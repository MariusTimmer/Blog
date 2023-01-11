import {readdirSync} from "node:fs";
import {join, basename} from "node:path";
import * as matter from "gray-matter";

interface PostItem {
    date: string,
    description?: string,
    link: string;
    summary?: string;
    text: string;
};

interface TagItem {
    text: string,
    link: string
};

interface TagList {
    [key: string]: TagItem[]
};

const postDirectory = './../post';

const articles = readdirSync(
    join(
        __dirname,
        postDirectory
    )
);

export const sidebarItems = articles
    .map((article) => {
        const {data} = matter.read(join(__dirname, postDirectory, article));
        let item: PostItem = {
            text: "" + data.title,
            date: null,
            link: `/post/${basename(article, ".md")}`,
            description: null
        };
        if (data.hasOwnProperty("date")) {
            item.date = data.date;
        }
        if (data.hasOwnProperty("description")) {
            item.description = data.description;
        }
        return item;
    })
    .filter(e => e.link !== '/post/index')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    //.map(({text, link}) => ({text, link}));

export const getTagSidebar = () => {
    let tags: TagList = {};
    articles.forEach((article) => {
        const {data} = matter.read(join(__dirname, postDirectory, article));
        if (typeof data.tags === 'undefined') {
            return;
        }
        data.tags.forEach((tag) => {
            if (typeof tags[tag] === 'undefined') {
                tags[tag] = [];
            }
            tags[tag].push({
                text: data.title,
                link: `/post/${basename(article, ".md")}`
            });
        });
    });
    let sidebar = [];
    Object.keys(tags).forEach((tagName) => {
        sidebar.push({
            text: tagName,
            items: tags[tagName],
            collapsible: true,
            collapsed: true
        });
    });
    return sidebar;
};

export const sidebarOTRSItems = sidebarItems.filter((item) => {
    return item.text.toUpperCase().includes("OTRS");
});