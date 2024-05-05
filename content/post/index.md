---
---

Alle Beiträge
=============

<ArticleCard
    v-for="data in postData"
    :title="data.text"
    :excerpt="data.description"
    :date="data.date"
    :href="data.link" />

<script setup>
import ArticleCard from "../components/ArticleCard.vue";
import allPosts from "../postdata.json";

const postData = allPosts.filter((item) => {
    return item.link.toUpperCase().startsWith("/POST/")
}).sort((a, b) => {
    return (a.date == b.date) ? 0 : a.date < b.date ? 1 : -1;
}).filter((element) => {
    return !element.link.endsWith('index.md')
}).filter((element) => {
    return element.draft === false;
});

</script>