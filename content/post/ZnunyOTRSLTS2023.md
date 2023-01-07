---
title: "Was kommt nach Znunys OTRS LTS 6.0?"
description: "Die LTS-Version 6.0 von Znuny OTRS hat ihr Support-Ende erreicht. Doch auf welche Version sollte ich in Zukunft setzen?."
summary: "Aktuell betreibe ich OTRS in der LTS-Version 6.0, dessen Support mit Ende des Jahres 2022 ausgelaufen ist. Nun ist also die Frage, ob wir zur neuen LTS-Version 6.5 oder doch zur schon länger verfügbaren Feature-Version 6.4 wechseln werden. Entgegen meiner persönlichen Präferenz für LTS-Versionen kann es aber sein, dass diesmal stattdessen auf die Feature-Version gesetzt wird."
draft: false
date: "2023-01-06T17:45:00+01:00"
keywords: ["OTRS", "Znuny", "LTS", "Ticketsystem", "Update"]
author: "Marius Timmer"
image: "https://mariustimmer.de/img/znuny_otrs_favicon.webp"
---

Wieso wir Znunys OTRS nutzen
----------------------------
Vor einem Jahr hat die OTRS AG spontan angekündigt, ihr Versprechen zu brechen
und OTRS 7.0 nicht als Community Edition zwei Jahre später als die Enterprise
Version zu veröffentlichen. Das überraschte und verärgerte viele Kunden. Einen
[entsprechenden Beitrag](/post/otrs_ce) hatte ich damals veröffentlicht.
[Znuny](https://www.znuny.org) hatte das Projekt daraufhin übernommen und
als Community Edition weiter geführt. Kurz darauf hatte sich die sogenannte
[OTTER Allianz](https://www.otter-alliance.de) aus unterstützdenden Unternehmen
gebildet, wodurch alles auf noch festeren Beinen steht.

Wechsel von OTRS CE auf Znunys LTS-Version 6.4
----------------------------------------------
Damals sind wir (_die Uni Münster_) dann also auf die dort angebotene 
<abbr title="Longterm support">LTS</abbr>-Version umgestiegen. Die Migration
war denkbar einfach, da auf maximale Kompatibilität gesetzt wurde und
ausschließlich Sicherheitsfixes integriert wurden. Es war also ein Update
wie jedes andere auch, das ich mithilfe eines selbst geschriebenen
Skriptes sowieso regelmäßig durchführe (_Bei Interesse daran gerne
melden, dann kann ich dazu auch mal einen Beitrag schreiben_). Somit
waren wir für ein Jahr aus dem Schneider, da wir im Kern dieselbe Version
weiter fahren konnten.

Was kommt nun?
--------------
<figure role="group" class="right col2">
    <img
        srcset="/img/znuny_roadmap_2023q1_small.webp 480w,
                /img/znuny_roadmap_2023q1.webp,
                /img/znuny_roadmap_2023q1.png"
        img="/img/znuny_roadmap_2023q1.png"
        alt="Visualisierung der Roadmap: Aktuell ist Znuny 6.4 (Seit Sommer 2022), als nächstes kommt Znuny LTS 6.5 (ab 2023) und später folgt Znuny 7 (ab 2023)"
        title="" />
    <figcaption>Znunys Roadmap von Anfang Januar 2023</figcaption>
</figure>

Wie schon länger in der [Roadmap](https://www.znuny.org/de/roadmap) zu sehen
war, ist die bisherige LTS-Version (_6.0_) mit Ende des Jahres 2022 auch am
Ende ihres Supports angekommen. Daher drängt sich die Frage auf, was wir als
Nächstes nutzen sollten. Mögliche Nachfolger sind zum einen die auch bisher
schon verfügbare Feature-Version 6.4 und die zukünftige LTS-Version 6.5. Wer
mich kennt weiß, dass ich ein Freund von stabiler Software und somit von
LTS-Versionen bin. Zu Znunys OTRS 7 ist noch nicht viel bekannt. Nur, dass
es "_bald_" kommen wird und tiefgreifende Veränderungen (_z.B. in Oberfläche
und teilweise den APIs und somit sicher auch im Paket-Handling_) mit sich
bringen wird. Bei einer neuen Versionsnummer liegt das aber auch auf der Hand.

Es dürfte also wenig überraschend sein, dass ich weiterhin bei der LTS-Version
bleiben möchte. Leider ist mit dem neuen Jahr der Support für 6.0.x offiziell
ausgelaufen und es gibt (_Stand 07. Januar_) noch keine 6.5.x zum Download.
Allerdings wurde noch am 20. Dezember 6.0.48 veröffentlicht, wodurch es wohl
kein großes Problem sein wird, noch bis Ende Januar auf 6.5.x zu warten. Da
ich unsere Systeme in der Regel sowieso monatlich aktualisiere und Znuny
auch alle ein bis zwei Monate Aktualisierungen veröffentlicht, wird mir das
ganz gut in den Zeitplan passen.

Auf unseren Testsystemen haben wir bisher nur die Feature-Version 6.4
installiert, um uns damit vertraut zu machen. Meine Befürchtung ist, das
dies auch der Grund sein könnte, weswegen wir "_erstmal_" auch zu 6.4
wechseln werden, auch wenn ich die LTS-Version bevorzuge. Für die Mitte
des Monats haben wir das nächste Wartungsfenster angekündigt, was eher
für die Feature-Version spricht. Ein wichtiger Grundsatz ist nämlich immer,
dass bevor ein größerer Versionssprung ansteht, die neue Version vorab auf
dedizierten Testsystemen ausprobiert wird. Schließlich muss man sich aus
Support-Sicht auch darauf vorbereiten, wenn eine neue Version sich plötzlich
anders verhält und die Agenten verwirrt sind.

Sobald wir den Wechsel hinter uns gebracht haben, werde ich davon berichten.
Und auch von eventuell anstehenden Serviceaufwand, der dadurch entstanden sein
könnte (_was ich mal nicht hoffe_).

> <abbr title="To be added">TBA</abbr>