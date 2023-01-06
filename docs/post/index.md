---
---

<div
    v-if="postdata.length > 0"
    v-for="(article, index) in postdata.sort(postUtils.sortPosts)"
    :key="index">
    <ArticleCard
        :title="article.title"
        :excerpt="article.description"
        :image="article.image"
        :author="article.author"
        :href="article.href"
        :date="article.date" />
</div>
<div
    v-else>
    Aktuell sind keine Beiträge veröffentlicht
</div>

<script setup>
import ArticleCard from "./../components/ArticleCard.vue";
import postdata from "../../postdata.json";
import postUtils from "./../utilities/postUtils";
</script>