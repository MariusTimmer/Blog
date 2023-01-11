<template>
    <Layout>
        <template #layout-top>
            <meta name="robots" content="index" />
            <meta v-if="$frontmatter.title" name="title" :content="$frontmatter.title" />
            <meta v-if="$frontmatter.description" name="description" :content="$frontmatter.description" />
            <meta v-if="$frontmatter.author" name="author" :content="$frontmatter.author" />
            <meta v-if="$frontmatter.keywords" name="keywords" :content="$frontmatter.keywords.join(',')" />
            <meta v-if="$frontmatter.author" name="article:author" :content="$frontmatter.author" />
            <meta v-if="$frontmatter.date" name="article:published_time" :content="toISODate($frontmatter.date)" />
            <meta v-if="$frontmatter.title" name="og:title" :content="$frontmatter.title" />
            <meta v-if="$frontmatter.description" name="og:description" :content="$frontmatter.description" />
            <meta name="og:type" content="article" />
            <meta name="twitter:card" content="website" />
            <meta v-if="$frontmatter.title" name="twitter:title" :content="$frontmatter.title" />
            <meta v-if="$frontmatter.description" name="twitter:description" :content="$frontmatter.description" />
        </template>
    </Layout>
</template>
<script setup>
import DefaultTheme from "vitepress/theme";

const { Layout } = DefaultTheme;

const toISODate = (rawDate) => {
    let dateObject = new Date(rawDate);
    return dateObject.toDateString();
};
</script>