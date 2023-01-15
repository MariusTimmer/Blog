<template>
    <Layout>
        <template #layout-top>
            <meta name="robots" content="index" />
            <meta v-if="$frontmatter.title" name="title" :content="$frontmatter.title" />
            <meta v-if="$frontmatter.author" name="author" :content="$frontmatter.author" />
            <meta v-if="$frontmatter.keywords" name="keywords" :content="$frontmatter.keywords.join(',')" />
            <meta v-if="$frontmatter.author" name="article:author" :content="$frontmatter.author" />
            <meta v-if="$frontmatter.date" name="article:published_time" :content="toISODate($frontmatter.date)" />
            <meta v-if="$frontmatter.title" name="og:title" :content="$frontmatter.title" />
            <meta v-if="$frontmatter.description" name="og:description" :content="$frontmatter.description" />
            <meta v-if="$frontmatter.image" name="og:image" :content="$frontmatter.image" />
            <meta name="og:type" content="article" />
            <meta name="twitter:card" content="website" />
            <meta v-if="$frontmatter.title" name="twitter:title" :content="$frontmatter.title" />
            <meta v-if="$frontmatter.description" name="twitter:description" :content="$frontmatter.description" />
            <meta v-if="$frontmatter.image" name="twitter:image" :content="$frontmatter.image" />
        </template>
        <template #doc-footer-before>
            <div v-if="$frontmatter.tags">
                <hr />
                <strong>Verwandte Themen:</strong>
                <ul class="tag-list">
                    <li v-for="tagname in $frontmatter.tags">
                        <a
                            :href="withBase('/tags/#'+ buildTagLink(tagname))"
                            :title="tagLinkTitle(tagname)"
                            rel="tag">
                            {{ tagname }}
                        </a>
                    </li>
                </ul>
            </div>
        </template>
    </Layout>
</template>
<script setup>
import DefaultTheme from "vitepress/theme";
import { buildTagLink } from "./../../utilities/tagHelper";
import { withBase } from "vitepress";

const { Layout } = DefaultTheme;

const toISODate = (rawDate) => {
    let dateObject = new Date(rawDate);
    return dateObject.toDateString();
};

const tagLinkTitle = (tagname) => {
    return "Gehe zur Liste aller Beiträge mit dem Tag \""+ tagname +"\"";
};
</script>
<style>
ul.tag-list {
    list-style-type: disc;
    margin: 0em 2em;
}
.tag-list a {
    color: #AAAAAA;
}
.tag-list a:hover {
    color: white;
}
</style>