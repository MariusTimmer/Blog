---
title: "Reddit und das Rate Limit für RSS-Feeds"
description: "Das Ratelimit von Reddit für RSS-Anfragen muss kaputt sein"
summary: "Schon mehrfach habe ich angedeutet, dass ich **RSS-Feeds liebe** und versuche, meinen Internet-Konsum mehr und mehr darauf umzustellen. Praktischerweise bietet Reddit zu jedem Account und jeder Community einen eigenen RSS-Feed. Ich kann also beidem folgen, ohne einen Reddit-Account zu haben. Allerdings scheint es **nicht in Ordnung** zu sein, wenn ich mein RSS-Feed **einmal pro Stunde** nach Neuigkeiten guckt."
draft: false
date: "2025-07-05T23:54:25+02:00"
keywords:
 - "RSS-Feeds"
 - "Reddit"
 - "Rate limit"
tags:
 - "Technik"
images:
 - "/img/rss_reddit_logos.webp"
---

In der Vergangenheit habe ich immer mal wieder erwähnt, wie cool ich RSS-Feeds finde. Sehr zum Spaß und gerne wohl auch mal Unverständnis meiner Kollegen. Mir gefällt es aber nach wie vor, dass ich die verschiedensten Quellen, egal ob Blogs, Nachrichten-Seiten, YouTube-Kanäle oder Podcasts, alle zusammen in einem Feed bündeln kann. Dafür bräuchte ich nicht mal einen YouTube-Account.

## Social Media meets Feeds
Vor einigen Tagen (_inzwischen wohl auch schon Wochen_) habe ich dann erfahren, dass auch [Reddit](https://reddit.com/) zu jedem Nutzerkonto und jeder Community einen RSS-Feed anbietet. Also auch hier kann ich meinen Freunden oder spannenden Communities auf Reddit folgen, ohne dass ich meinen Account dort eigentlich bräuchte. Spätestens zum Liken oder Kommentieren müsste ich mich dann natürlich doch wieder anmelden. Um den RSS-Feed von etwas zu erhalten, das man dann in seinem Reader einbinden kann, nimmt man einfach die URL und hängt ein `.rss` dran. So wird zum Beispiel aus`https://www.reddit.com/r/ich_iel/` einfach `https://www.reddit.com/r/ich_iel/.rss`.

Ob man allerdings Social Media Kanäle in großen Stil in seinen RSS-Feed einbinden sollte, ist eine andere Frage. Schließlich ist eine meiner Motivationen auch, den Algorithmen ein wenig aus dem Weg zu kommen und so nicht mehr im Doomscrooling zu enden. Solange ich allerdings nicht alles einbinde, sollte das wohl vollkommen in Ordnung sein.

<figure style="float:right;width:25%;margin-left:1em;"><figcaption>Reddit unterstützt RSS</figcaption><img srcset="/img/rss_reddit_logos.webp" alt="Die beiden Logos von RSS und Reddit vereint" /></figure>

## Reddit stellt sich quer
Als ich von der Möglichkeit erfuhr, war ich echt begeistert. Nachdem ich allerdings zwei Communities in meinen Feed hinzugefügt hatte, merkte ich recht schnell, dass keine Neuigkeiten mehr rein kamen. Die Ursachenforschung dauerte nicht lange: 30 Minuten ist wohl ein zu kurzes Intervall, wenn es nach Reddit geht. Zugegeben: Ich muss meine Feeds nicht alle 5 Minuten aktualisieren (_das würde ja genau das bewirken, was ich eigentlich vermeiden will_), aber doch schon ein paar mal täglich.

Ich stellte das globale Intervall auf 60 Minuten ein und erhielt weiterhin **403 Blocked** als Antwort. Anschließend probierte ich 120 Minuten aus, was wieder zu klappen scheint. 120 Minuten auf Neuigkeiten zu warten ist kein wirklicher Beinbruch, allerdings schon alles andere als optimal. Da ich meinen Feed über NextCloud News steuere und auf meinen Geräten nur Clients dafür betreibe, sollte das auch eigentlich kein Problem sein. Hin und wieder aktualisiere ich dann aber vielleicht doch _ausversehen_ meine Feeds, wodurch ich dann doch wieder ins Rate Limit laufe und blockiert werde. Das ist echt nervig.

## Widersprüchliches Verhalten
Es fällt mir wirklich schwer zu verstehen, was Reddit damit erreichen will: Einerseits bietet es mir seine Inhalte im RSS-Format an, auf der anderen Seite blockiert es mich dann aber, wenn ich es normal nutzen möchte. Deren Server sollten ja wohl damit klar kommen, wenn ich dort alle paar Minuten (_oder auch nur einmal in der Stunde_) eine Hand voll Requests hin schicke.

Zu dem Thema habe ich auch schon eine [Diskussion auf Reddit](https://www.reddit.com/r/rss/comments/1kkitom/reddits_official_rss_feeds_now_giving_me_a/) selbst gefunden, aber eine wirkliche Lösung scheint es dort auch nicht zu geben. Bei einigen Leuten tritt das Problem wohl gar nicht auf (_oder sie merken es einfach nicht_), und die anderen haben wohl oder übel das Intervall auch runter gesetzt. Das ist natürlich ein saurer Apfel in den ich beißen kann, allerdings fände ich es noch besser, wenn Reddit sich an der Stelle nicht so auf den Kopf stellen würde.
