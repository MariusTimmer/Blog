---
title: "Es geht zurück zu Hugo"
description: "Nach mehr als einem Jahr VitePress bin ich mit meinem Blog nun zu Hugo zurück gekehrt. Aber wieso?"
date: "2024-05-05T18:00:00+01:00"
tags:
  - Hugo
  - VitePress
  - Markdown
  - Technik
draft: false
---

## Aktuelle Situation
Seit knapp zwei Jahren läuft mein Blog mit VuePress. [Damals](/post/vitepress/) hatte ich darüber geschrieben, als ich wechselte. Bei der Arbeit setzten wir damals zunehmend auf Vue im Frontend und fingen auch damit an, es für einzelne kleine Dokumentationen zu benutzen. Nach wie vor danke ich, dass es generell auch eine super Lösung dafür ist. Auf diesem Grund verließ ich damals [Hugo](https://gohugo.io/).

## Größter Nachteil für diesen Zweck
Zur Realisierung meines Blogs war es allerdings von Anfang an eine Krücke. Eigentlich war VitePress nicht dazu gedacht, Blogs zu betreiben. Wenn ich das richtig mitbekommen habe, kam diese Fähigkeit erst etwas später dazu. Ich baute hier und da einige Beulen ein, die mir das Arbeiten erleichterten. Mit der Zeit gab es von Haus aus andere Lösungen für diese Probleme, ich hatte meinen Code aber nie dementsprechend angepasst.

## Wieso wieder Hugo?
Hin und wieder trifft man Entscheidungen, die vielleicht nicht rational zu begründen sind. Auf der Arbeit benutze ich weiterhin VuePress. Ich mag es auch noch, weil man damit sehr schnell sehr schöne und brauchbare Ergebnisse erzielen kann. Zeitgleich mochte ich Hugo aber auch schon immer, obschon es Go benutzt, was ich eigentlich gar nicht beherrsche. Es mag auch nur sehr subjektiv sein und der Grund dafür wird auch bei mir zu suchen sein, aber _gefühlt_ erhalte ich mit Hugo stabilere Ergebnisse. Damit meine ich nicht, dass es besser ist. Allerdings schreibe ich meine Beiträge auf unterschiedlichen Rechnern. Der ganze Blog wird mit git versioniert. Je nach dem, an welchem Computer ich gerade sitze, unterscheiden sich aber auch die Build- und Deploy-Prozesse. Unterschiedliche Betriebssysteme (_z.B. Arch Linux und Debian_) kommen mit unterschiedlichen Node- und NPM-Versionen, was unweigerlich in unterschiedliche Ergebnisse resultiert, abhängig davon, wo ich den Blog builde. Bei Hugo gibt es diese Schwierigkeit im Grunde auch, allerdings habe ich das Gefühl, dass es dort nicht so viele breaking changes gibt.

## Fazit
Wie gesagt, es ist absolut subjektiv. Mir ist auch bewusst, dass der ein oder andere Kollege jetzt mit den Augen rollen wird. Und auch jetzt am Ende fehlt mir noch die überzeugende Begründung für den Wechsel zurück. Aber für mich funktioniert es vielleicht noch ein wenig besser. Trotz allem war ich auch erstaunt zu sehen, wie viel sich in Hugo inzwischen geändert hat und was alles möglich ist. Aber erst mal werde ich es ruhig halten und zusehen, dass der Blog zumindest nicht schlechter sein wird, wie bisher. Auch mit dem Theme [Mainroad](https://github.com/Vimux/Mainroad/) muss ich noch überlegen, ob das etwas Entgültiges bleibt. Das wird die Zukunft aber wohl schon zeigen. 