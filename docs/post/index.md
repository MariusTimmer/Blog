---
---

Alle Beiträge
=============

<ArticleCard
    v-for="data in postData"
    :title="data.text"
    :excerpt="data.description"
    :author="data.author"
    :date="data.date"
    :href="data.link" />

<script setup>
import ArticleCard from "./../components/ArticleCard.vue";
import postData from "../postData.json";
</script>