#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var fqdn = "mariustimmer.de";
var postProvider_1 = require("../utilities/postProvider");
var fs_1 = require("fs");
/**
 * Post and Tag data needs to be stored in separate JSON files,
 * so they can be used at runtime.
 */
//console.log(sidebarItems);
(0, fs_1.writeFile)("./docs/postData.json", JSON.stringify(postProvider_1.sidebarItems), console.error);
(0, fs_1.writeFile)("./docs/tagData.json", JSON.stringify((0, postProvider_1.getTagSidebar)()), console.error);
// Sitemap
var XMLWriter = require('xml-writer');
var sitemap = new XMLWriter();
sitemap.startDocument();
sitemap.startElement("urlset");
sitemap.writeAttribute("xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9");
var urls = [
    {
        link: "https://" + fqdn + "/",
        lastmod: "2023-01-14",
        changefreq: "never",
        priority: "1.0"
    },
    {
        link: "https://" + fqdn + "/post/",
        lastmod: "2023-01-14",
        changefreq: "daily",
        priority: "0.9"
    },
    {
        link: "https://" + fqdn + "/aboutme.html",
        lastmod: "2023-01-14",
        changefreq: "yearly",
        priority: "0.5"
    },
    {
        link: "https://" + fqdn + "/fotografie.html",
        lastmod: "2022-12-01",
        changefreq: "yearly",
        priority: "0.5"
    }
];
var articles = postProvider_1.sidebarItems.map(function (article) {
    var dateObject = new Date(article.date);
    return {
        link: "https://" + fqdn + article.link + ".html",
        lastmod: dateObject.toISOString().substring(0, 10),
        changefreq: "weekly",
        priority: "0.4"
    };
});
[urls, articles].forEach(function (list) {
    list.forEach(function (url) {
        sitemap.startElement("url")
            .writeElement("loc", url.link)
            .writeElement("lastmod", url.lastmod)
            .writeElement("changefreq", url.changefreq)
            .writeElement("priority", url.priority)
            .endElement();
    });
});
sitemap.endDocument();
(0, fs_1.writeFile)("./docs/sitemap.xml", sitemap.toString(), console.error);
