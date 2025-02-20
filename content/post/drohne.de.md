---
title: "Meine neue DJI Mini 2 Drohne"
date: "2021-01-07T20:00:00+02:00"
draft: false
author: "Marius Timmer"
keywords: ["Drohne", "DJI Mini 2", "Fliegen", "Videos", "Weihnachten", "Luftfahrt-Bundesamt", "Haftpflicht"]
tags: ["Technik"]
description: "Meine erste Mini 2 Drohne von DJI erfordert eine Menge Bürokratie mit Versicherung und LBA. Eine Menge Flugstunden muss man dann auch noch sammeln."
summary: "Zu Weihnachten habe ich meine erste Drohne geschenkt bekommen. Nun übe ich mich als Drohnenpilot und versuche mich an den ersten Flügen und Clips."
video: "ZMimjM1-ocE"
---

<Image :imagedata="drone_image" />

Zu diesem Weihnachten gabe es eine Reihe von Geschenken. Unter anderem zum Beispiel ein cooles Poster von "Haus des Geldes" in der originalen Spanischen Sprache, aber eben auch eine **[Mini 2 Drohne](https://www.dji.com/de/mini-2)** von DJI. Laut vielen Reviews im Netz ist das wohl _die perfekte Einsteigerdrohne_, da sie gut bedienbar ist, aber auch einige Automatismen für vorprogrammiere Shots hat.

Neue EU-Richtlinien am 2021
---------------------------
Passend zum neuen Jahr trat die **neue EU-Regelung für Drohnenflüge** in Kraft. Da ich mich natürlich an alle Gesetze halten werde, habe ich der Drohne direkt ein Nummernschild mit meinen Kontaktdaten spendiert. Glücklicherweise schließt meine Haftpflichtversicherung Drohnen bis zu einem Gewicht von 2kg mit ein, weswegen ich keine neue Versicherung abschließen musste. Bei Drohnen verhält es sich genau wie bei Autos: Jeder Verkehrsteilnehmer **muss versichert** sein, damit im Falle eines Unfalls der Schaden bezahlt werden kann. Wer weiß schon, in was für ein Haus oder Autodach man fallen könnte.

Zusätzlich muss man seine Drohne beim <abbr title="Luftfahrt-Bundesamt">LBA</abbr> registrieren[1], was aber erst seit dem 31.12.2020 möglich war. Die Bearbeitung meiner Registrierung steht aktuell noch aus, aber zwischen den Jahren ist das nicht groß verwunderlich. Vor allem wenn man bedenkt, dass sämtliche Drohnenpiloten sich zu dem Zeitpunkt dort registriert haben.

Das ist eine Menge Bürokratie für ein eigentlich tolles Hobby. Aber eine gute Änderung gibt es durch die neuen Regeln doch: Die maximale Flughöhe wurde von 100 Metern auf 120 Meter angehoben. Prinzipiell könnte ich auch 500 Meter hoch fliegen (_zumindest bietet die Drohne selbst das an_), aber ich bin mir nicht sicher, ob Shots aus solch einer Höhe wirklich einen Mehrwert haben.

In der Praxis Fliegen lernen
----------------------------
Ganz wichtig ist es natürlich, dass man seine Drohe vernünftig fliegen kann. Die Steuerung mit der Fernbedienung ähnelt ein wenig der eines Playstation-Controllers, womit ich bisher aber nie sonderlich gut klar kam. Daher war es mir wichtig, **viel zu fliegen** um den Umgang damit zu lernen. Das ist bei den kurzen Sonnenstunden und dem schlechten Wetter zur Zeit aber nicht so einfach. Immerhin komme ich inzwischen auf knapp 14 Flugstunden, was schon mal ein guter Anfang ist, wie ich finde. Ich freue mich vor allem darauf, endlich außerhalb von Laer zu fliegen. Es ist aber wirklich faszinierend, was ein **neuer Blickwinkel** verändern kann.

Das ein oder andere Bild werde ich demnächst unter [Fotografie in meinem Blog](/photos) teilen. Vor allem bin ich selber schon sehr gespannt, wie sich die so neu gewonnenen Clips in [meinen YouTube-Videos](https://www.youtube.com/channel/UCKllWK67NhLhk6QAwLelVyA) machen werden. Da wird demnächst auch (_endlich mal wieder_) ein neues Video erscheinen.

<figure role="group">
    <video
        id="drohnenvideo"
        controls="controls"
        width="100%"
        poster="/video/drohne_laer_nacht_thumbnail.webp"
        autobuffer="autobuffer"
        title="Mein erster Nachtflug"
        >
        <source
            src="/video/drohne_laer_nacht_720p.mp4"
            type="video/mp4"
            />
        Dein Browser unterstützt anscheinend keine Videos in Webseiten oder so. Versuchs mal mit dem <a href="/video/drohne_laer_nacht_720p.mp4">Direktlink</a>.
    </video>
    <figcaption>Ein Drohnenflug zum Turm der katholischen Kirche Laer bei Nacht | <a href="/video/drohne_laer_nacht_360p.mp4">360p</a>, <a href="/video/drohne_laer_nacht_720p.mp4">720p</a>, <a href="/video/drohne_laer_nacht_1080p.mp4">1080p</a></figcaption>
</figure>

[1]: https://www.lba.de/DE/Betrieb/Unbemannte_Luftfahrtsysteme/UAS_Betreiberregistrierung/UAS_Betreiberregistrierung_node.html

<script setup>
import Image from "./../components/Image.vue";

const drone_image = {
    src: "djimini2",
    srcset: [
        "djimini2_small",
        "djimini2_medium",
        "djimini2_large",
        "djimini2"
    ],
    title: "Die DJI Mini 2 Drohne wie ich sie jetzt auch habe"
};
</script>
