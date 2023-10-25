/**
 * Post Metadata
 * Collection of helper functions to manage post metadata.
 */
import { readdir, writeFile, readFile } from "fs/promises";
import * as matter from "gray-matter";
import {readFileSync} from "fs";

const metadataFilename: string = 'docs/postdata.json';

export interface PostItem {
    date: string,
    description?: string,
    link: string;
    summary?: string;
    text: string;
    draft: boolean;
    priority?: string;
    image?: string;
}

export const convertJSONToPostItem = (data: any): PostItem => {
    let postMetaData: PostItem = {
        text: "" + data.title,
        date: null,
        link: data.link,
        description: null,
        draft: false,
        image: null,
        priority: "0.5"
    };
    if (data.hasOwnProperty("date")) {
        postMetaData.date = data.date;
    }
    if (data.hasOwnProperty("description")) {
        postMetaData.description = data.description;
    }
    if (data.hasOwnProperty("image")) {
        postMetaData.image = data.image;
    }
    if (data.hasOwnProperty("priority")) {
        postMetaData.priority = data.priority;
    }
    postMetaData.draft = (data.hasOwnProperty("draft") && data.draft);
    return postMetaData;
}

export const findMarkdownFiles = (directories: string[]): void => {
    let allPromises: Promise<string[]>[] = [];
    directories.forEach((directory: string): void => {
        let currentPromise: Promise<string[]> = readdir(directory).then((allFilesInDirectory: string[]): string[] => {
            let markdownFiles: string[] = [];
            allFilesInDirectory.forEach((item) => {
                markdownFiles.push(directory + item);
            })
            return markdownFiles.filter((filename: string) => filename.endsWith('.md'))
        });
        currentPromise.catch(error => {
            console.error(error)
        });
        allPromises.push(currentPromise);
    });
    Promise.allSettled(allPromises).then((results) => {
        let postMetaData: PostItem[] = [];
        results.forEach((promise: PromiseSettledResult<string[]>) => {
            if (promise.status === 'fulfilled') {
                promise.value.forEach((filePath: string) => {
                    const {data} = matter.read(filePath);
                    data.link = filePath.slice(4);
                    postMetaData.push(convertJSONToPostItem(data));
                });
            }
        });
        postMetaData.filter(e => e.link !== '/post/index')
            .filter(e => e.draft !== true)
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        writeFile(metadataFilename, JSON.stringify(postMetaData)).then(() => {
            console.log("Metadata of posts written to file");
        }).catch((error) => {
            console.error(error);
        })
    });
}

export const fetchSidebarItems = (): PostItem[] => {
    let sidebarData: any = readFileSync(metadataFilename);
    if (typeof sidebarData !== "object") {
        return;
    }
    let itemsAsJSON = JSON.parse(sidebarData);
    let sidebarItems: PostItem[] = [];
    itemsAsJSON.forEach((itemData: any) => {
        if (!itemData.draft) {
            sidebarItems.push(itemData);
        }
    });
    return sidebarItems;
}