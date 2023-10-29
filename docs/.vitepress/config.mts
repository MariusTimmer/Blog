import { defineConfig } from "vitepress";
import { fetchSidebarItems, PostItem } from "../utilities/postMetaData";

export default defineConfig({
    title: "Timmers Blog",
    description: "Marius Timmers persönlicher Blog",
    lang: "de",
    head: [
        [
            'link',
            {
                rel: "me",
                href: "https://mastodon.mariustimmer.de/@timmer"
            }
        ]
    ],
    themeConfig: {
        logo: {
            src: "/favicon.png",
            alt: "Kleines monochromes Bild von Marius Timmer im Profil"
        },
        nav: [
            {
                text: "Startseite",
                link: "/"
            },
            {
                text: "Beiträge",
                link: "/post/"
            },
            {
                text: "Fotografie",
                link: "/photos"
            },
            {
                text: "Referenzen",
                link: "/references"
            },
            {
                text: "Über mich",
                link: "/aboutme"
            }
        ],
        sidebar: {
            "/": [
                {
                    text: "Alle Beiträge",
                    items: fetchSidebarItems().filter((item: PostItem) => {
                        return item.link.toUpperCase().startsWith("/POST/")
                    }).sort((a: PostItem, b: PostItem) => {
                        return (a.date == b.date) ? 0 : a.date < b.date ? 1 : -1;
                    }).filter((element: PostItem) => {
                        return !element.link.endsWith('index.md')
                    }).filter((element: PostItem) => {
                        return element.draft === false;
                    }),
                    //collapsible: true,
                    collapsed: true
                },
                {
                    text: "OTRS",
                    items: fetchSidebarItems().filter((item: PostItem) => {
                        return item.text.toUpperCase().includes("OTRS");
                    }).filter((item: PostItem) => {
                        return item.link.toUpperCase().startsWith("/POST/")
                    }).sort((a: PostItem, b: PostItem) => {
                        return (a.date == b.date) ? 0 : a.date < b.date ? 1 : -1;
                    }).filter((element: PostItem) => {
                        return element.draft === false;
                    }),
                    //collapsible: true,
                    collapsed: false
                }
            ]
        },
        footer: {
            message: "Zusammengebastelt mit <a href=\"https://vitepress.vuejs.org/\">VitePress</a>",
            copyright: "Copyright &copy; seit 2017 bis heute: <a href=\"/aboutme\">Marius Timmer</a>"
        }
    }
});
