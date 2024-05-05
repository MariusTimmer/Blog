---
title: "Über Mich"
date: "2018-03-09T14:06:36+01:00"
draft: false
author: "Marius Timmer"
image: "https://mariustimmer.de/img/timmer_small.webp"
description: "Eine kleine Übersicht"
priority: "0.9"
---

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Über mich
    </template>
    <template #lead>
      Hinter diesem Blog steckt kein großes Team. Betrieb, Weiterentwicklung und Verfassen neuer Beiträge geht alles von einer Person aus.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    size="medium"
    :members="members"
  />
</VPTeamPage>

Vita
----
Zu mir selber gibt es eigentlich nicht viel zu sagen außer das, was ohnehin
schon bekannt ist: Ich bin Marius Timmer, geboren 1994 im Münsterland. Nach
meiner Ausbildung zum *Fachinformatiker für Anwendungsentwicklung* (*aka
Programmierer*) wurde ich unbefristet übernommen und arbeite seit dem als
Anwendungsentwickler am Zentrum für Informationsverarbeitung
der [Westfälischen Wilhelms-Universität Münster](https://www.uni-muenster.de/).
Wenn ich mal nicht arbeite oder trotzdem programmiere, fahre ich gerne in
Urlaube mit unbekanntem Ziel und zeige das
auf [YouTube](https://www.youtube.com/channel/UCIROfdOW4gffuwYVNE1nwGg).

<figure class="right col3">
    <img
        alt="Ein relativ aktuelles Foto von mir"
        src="/img/timmer.webp"
        srcset="/img/timmer_small.webp  480w,
                /img/timmer_medium.webp 960w,
                /img/timmer.webp 1024w"
    />
    <figcaption>Ein relativ aktuelles Bild von mir</figcaption>
</figure>

Über diesen Blog
----------------
Vor vielen Jahren (_ungefähr 2007_) habe ich meine erste eigene Internetseite
(_damals noch beim [Homepage-Baukasten](https://www.homepage-baukasten.de/)_)
kostenlos zusammen geklickt. Zu der Zeit kannte ich das Internet erst seit
zwei Jahren. Dort schrieb ich darüber, was ich im Fernsehen gesehen hatte
oder schrieb Tagebuch, was man als Kind eben so macht. Durch meine "_Arbeit_"
bei der Schülerzeitung fing ich irgendwann an, kleinere Artikel zu schreiben.
Nach spätestens einer Woche wurde aber alles wieder gelöscht, weil man doch
nicht ganz zufrieden war.

Einige Jahre später sicherte ich mir meine Domain
[mariustimmer.de](https://mariustimmer.de/), bevor sie sich jemand anders
schnappen konnte. Inzwischen ist sie seit über zehn Jahren in meinem Besitz,
was mich auch ein wenig stolz macht. Denn in der Welt der
Suchmaschinen&shy;optimierung ist dies kein unwichtiges Kriterium. Zur
damaligen Zeit war mir das aber noch recht egal. Lange Zeit war WordPress
das Mittel der Wahl, da ich sowieso PHP einsetzte, um meine eigenen
Spielereien zu betreiben. So veröffentlichte ich beispielsweise Tagelang
meine Live-Position, welche mein Handy permanent an meinen Server schickte
und dort mit der Welt teilte. Über den Nutzen lässt sich streiten, aber
es war cool, dass es ging. Vermutlich hatte mich
[Mario Sixtus](https://mastodon.social/@sixtus) damals nur mit seinem
Projekt angesteckt, in dem er selbiges tat.

Während meiner Ausbildung lernte ich PHP gut genug kennen, um beurteilen
zu können, dass eine ganze WordPress Installation Overkill für meinen
Anwendungsfall und vermutlich eher ein zu großes Sicherheitsloch ist.
Darum wechselte ich zu [Hugo](https://gohugo.io/), einer Software,
um statische Webseiten zu generieren. Das war für lange Zeit eine gute
Lösung. Zwischenzeitlich bin ich aber auch mal zu [VitePress](https://vitepress.vuejs.org/)
umgestiegen. Dank [Vue](https://vuejs.org/) gab es mir noch mehr Möglichkeiten und benutzte
Techniken, die ich auch auf der Arbeit einsetze und generell lernen sollte.
Inzwischen bin ich aber wieder [zu Hugo zurückgekehrt](/post/zurueckzuhugo/).


Kontakt
-------
Wenn du Kontakt zu mir aufnehmen möchtest (_Und ich meine nicht diesen Kontakt,
von dem ich in meinen Spam-Emails immer so viel lese_), kannst du das am Besten
per E-Mail machen. Im Zweifel bin ich dort schneller und besser erreichbar als
beispielsweise über mein Handy. Ganz einfach, weil ich mein Handy auch gerne
lange Zeit bei Seite lege und anschließend keine Lust habe, direkt auf alles
zu antworten. Interessanterweise kommt es bei Anderen gar nicht so gut an,
nicht permanent per Handy erreichbar zu sein.

Ich bin zwar in der Lage HTML-Mails zu öffnen, aber dennoch bitte ich dich beim
Anschreiben darum, sie mir als `PlainText` zu schicken. Oder einfach beide
Formate (_sowieso der Standard bei den meisten E-Mail Programmen_) zu nutzen.
Ich empfehle übrigens sehr, bei E-Mail-Kontakt
auf [GnuPG](https://gnupg.com/index.de.html) Signaturen zu setzen. Meine
E-Mail-Adresse findet ihr im Fuß dieser Seite (
_Fingerabdruck: [`8180 A515 BAA9 285C 91FC ECBC 0CD8 0EC9 E66F 69BF`](/8180A515BAA9285C91FCECBC0CD80EC9E66F69BF.asc)_).

Aus rechtlichen Gründen muss ich als eine Art Impressum angeben, dass ich
ausschließlich für die direkt auf dieser Seite befindlichen Inhalte
verantwortlich bin, nicht aber für verlinkte Inhalte auf anderen Webseiten. Hier
sind meine Kontaktdaten in der echten Welt:

<div vocab="http://schema.org/" typeof="Person" style="text-align: center;">
    <address>
        <span property="givenName">Marius</span> <span property="familyName">Timmer</span> &mdash;
        <span property="address" typeof="PostalAddress">
            <span property="streetAddress">Am Bach 14</span> &mdash;
            <span property="postalCode">48366</span> <span property="addressRegion">Laer</span>
        </span>
    </address>
</div>

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';

const members = [
    {
        avatar: "/img/avatar_timmer.webp",
        name: "Marius Timmer",
        title: "Software Entwickler",
        org: "WWU Münster",
        orgLink: "https://www.uni-muenster.de/IT/",
        desc: "Entwickler, YouTuber und Hobbyfotograf",
        links: [
            {
                icon: {
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="61.076954mm" height="65.47831mm" viewBox="0 0 216.4144 232.00976"><path fill="#2b90d9" d="M211.80734 139.0875c-3.18125 16.36625-28.4925 34.2775-57.5625 37.74875-15.15875 1.80875-30.08375 3.47125-45.99875 2.74125-26.0275-1.1925-46.565-6.2125-46.565-6.2125 0 2.53375.15625 4.94625.46875 7.2025 3.38375 25.68625 25.47 27.225 46.39125 27.9425 21.11625.7225 39.91875-5.20625 39.91875-5.20625l.8675 19.09s-14.77 7.93125-41.08125 9.39c-14.50875.7975-32.52375-.365-53.50625-5.91875C9.23234 213.82 1.40609 165.31125.20859 116.09125c-.365-14.61375-.14-28.39375-.14-39.91875 0-50.33 32.97625-65.0825 32.97625-65.0825C49.67234 3.45375 78.20359.2425 107.86484 0h.72875c29.66125.2425 58.21125 3.45375 74.8375 11.09 0 0 32.975 14.7525 32.975 65.0825 0 0 .41375 37.13375-4.59875 62.915"/><path fill="#fff" d="M177.50984 80.077v60.94125h-24.14375v-59.15c0-12.46875-5.24625-18.7975-15.74-18.7975-11.6025 0-17.4175 7.5075-17.4175 22.3525v32.37625H96.20734V85.42325c0-14.845-5.81625-22.3525-17.41875-22.3525-10.49375 0-15.74 6.32875-15.74 18.7975v59.15H38.90484V80.077c0-12.455 3.17125-22.3525 9.54125-29.675 6.56875-7.3225 15.17125-11.07625 25.85-11.07625 12.355 0 21.71125 4.74875 27.8975 14.2475l6.01375 10.08125 6.015-10.08125c6.185-9.49875 15.54125-14.2475 27.8975-14.2475 10.6775 0 19.28 3.75375 25.85 11.07625 6.36875 7.3225 9.54 17.22 9.54 29.675"/></svg>'
                },
                link: "https://mastodon.mariustimmer.de/@timmer"
            },
            {
                icon: "youtube",
                link: "https://www.youtube.com/channel/UCKllWK67NhLhk6QAwLelVyA"
            },
            {
                icon: "instagram",
                link: "https://instagram.com/@timmer94"
            },
            {
                icon: "github",
                link: "https://github.com/mariustimmer"
            }
        ],
        sponsor: "https://www.paypal.com/paypalme/mariustimmer"
    }
];
</script>
