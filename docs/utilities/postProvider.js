"use strict";
exports.__esModule = true;
exports.sidebarOTRSItems = exports.getTagSidebar = exports.sidebarItems = void 0;
var node_fs_1 = require("node:fs");
var node_path_1 = require("node:path");
var matter = require("gray-matter");
;
;
;
var postDirectory = './../post';
var articles = (0, node_fs_1.readdirSync)((0, node_path_1.join)(__dirname, postDirectory));
exports.sidebarItems = articles
    .map(function (article) {
    var data = matter.read((0, node_path_1.join)(__dirname, postDirectory, article)).data;
    var item = {
        text: "" + data.title,
        date: null,
        link: "/post/".concat((0, node_path_1.basename)(article, ".md")),
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
    .filter(function (e) { return e.link !== '/post/index'; })
    .sort(function (a, b) { return new Date(b.date).getTime() - new Date(a.date).getTime(); });
//.map(({text, link}) => ({text, link}));
var getTagSidebar = function () {
    var tags = {};
    articles.forEach(function (article) {
        var data = matter.read((0, node_path_1.join)(__dirname, postDirectory, article)).data;
        if (typeof data.tags === 'undefined') {
            return;
        }
        data.tags.forEach(function (tag) {
            if (typeof tags[tag] === 'undefined') {
                tags[tag] = [];
            }
            tags[tag].push({
                text: data.title,
                link: "/post/".concat((0, node_path_1.basename)(article, ".md"))
            });
        });
    });
    var sidebar = [];
    Object.keys(tags).forEach(function (tagName) {
        sidebar.push({
            text: tagName,
            items: tags[tagName],
            collapsible: true,
            collapsed: true
        });
    });
    return sidebar;
};
exports.getTagSidebar = getTagSidebar;
exports.sidebarOTRSItems = exports.sidebarItems.filter(function (item) {
    (0, exports.getTagSidebar)();
    return item.text.toUpperCase().includes("OTRS");
});
