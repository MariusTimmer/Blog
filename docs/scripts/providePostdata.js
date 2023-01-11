#!/usr/bin/env node
var postProvider = require("../utilities/postProvider");
var fs = require("fs");
/**
 * Post and Tag data needs to be stored in separate JSON files,
 * so they can be used at runtime.
 */
//console.log(postProvider.sidebarItems);
fs.writeFile("./docs/postData.json", JSON.stringify(postProvider.sidebarItems), function (err) {
    console.error(err);
});
fs.writeFile("./docs/tagData.json", JSON.stringify(postProvider.getTagSidebar()), function (err) {
    console.error(err);
});
