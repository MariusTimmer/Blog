#!/usr/bin/env node

const postProvider = require("../utilities/postProvider");
const fs = require("fs");

/**
 * Post and Tag data needs to be stored in separate JSON files,
 * so they can be used at runtime.
 */
//console.log(postProvider.sidebarItems);
fs.writeFile(
    "./docs/postData.json",
    JSON.stringify(postProvider.sidebarItems),
    err => {
        console.error(err)
    }
);

fs.writeFile(
    "./docs/tagData.json",
    JSON.stringify(postProvider.getTagSidebar()),
    err => {
        console.error(err)
    }
);