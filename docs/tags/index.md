Tags
====

Meinen Beiträgen sind in der Regel immer gewisse Tags zugeordnet. So ist es
einfacher, thematisch zusammenhängende Beiträge zu verknüpfen. Hier findest
du eine Übersicht aller Tags, die ich in meinem Blog verwendet habe. Darauf
folgt eine Zuordnung aller Beiträge zu den jeweiligen Tags.

Aller Tags
----------
Dies ist eine Liste aller Tags, mit denen ich meine bisherigen Beiträge
versehen habe. Du kannst sie auch als Beitragsreihen verstehen. Klicke
auf ein Tag, um zur Liste aller dazugehörigen Beiträge zu gelangen.

<ul>
    <li v-for="tagDetails in tagData">
        <a :href="'#'+ buildTagLink(tagDetails.text)">
            {{ tagDetails.text }}
        </a>
    </li>
</ul>

Beitrage pro Tag
----------------
Im Folgenden siehst du die genaue Aufschlüsselung der Beiträge zu den Tags.
Wundere dich nicht über die lange Liste: Ein Beitrag kann mehreren Tags
zugeordnet sein, wenn es beispielsweise mehrere inhaltliche Themen gibt
(_ist aber eher die Ausnahme_).

<div v-for="tagDetails in tagData" class="card">
    <section :id="buildTagLink(tagDetails.text)">
        <h3>{{ tagDetails.text }}</h3>
        <ul>
            <li v-for="articleDetails in tagDetails.items">
                <a :href="articleDetails.link">{{ articleDetails.text }}</a>
            </li>
        </ul>
    </section>
</div>

<script setup>
import tagData from "./../tagData.json";

const buildTagLink = (tagName) => tagName.replace(" ", "-").toLowerCase();

</script>
<style>
ul {
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
}
</style>