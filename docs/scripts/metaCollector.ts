/**
 * Meta collector
 * Script to find and parse the metadata from all markdown files.
 */
import {
    fetchSidebarItems,
    findMarkdownFiles,
    PostItem
} from "../utilities/postMetaData";

findMarkdownFiles([
    'docs/',
    'docs/post/'
]);