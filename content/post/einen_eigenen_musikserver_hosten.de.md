---
title: "Die eigene Musik-Bibliothek hosten"
description: "Warum ich meine CD-Sammlung digital mit Navidrome verwalte"
summary: "Ich habe mir nach über zwei Jahren eine neue kleine Musik-Bibliothek auf CD zugelegt. So kann ich die Musik rippen und direkt mit Navidrome verwalten, ohne immer wieder in meinem Musik-Regal nachzusehen, welche Alben ich eigentlich habe und welche noch fehlen."
date: "2025-08-20T21:24:23+02:00"
draft: false
images:
 - "/img/navidrome_cover.webp"
tags:
 - "Technik"
keywords:
 - "CD"
 - "Schallplatte"
 - "Musikserver"
 - "Navidrome"
---

Vor einigen Tagen habe ich einen eigentlich ausrangierten Rechner als kleines Home Lab zurück ins Leben geholt. Hauptsächlich war ich es leid, mit mehreren externen 1 <abbr title="Terrabyte">TB</abbr> Festplatten zu hantieren. Das raubt mir nur die USB-Buchsen und ist mehr ein Flickenteppich als eine gute Lösung. Daher nutze ich das Lab nun als eine Art <abbr title="Network Attached Storage">NAS</abbr> - wenn auch (_noch_) nicht 24/7. Neben dem Samba-Dienst und einem [Pi-Hole](https://de.wikipedia.org/wiki/Pi-hole) habe ich aber vor allem [Navidrome](https://www.navidrome.org/) installiert.

## Eine neue Musik-Bibliothek muss her
Bei einem gewissen Event vor über zwei Jahren ist meine gesamte Platten-Sammlung vernichtet worden. Immerhin um die einhundert Schallplatten, die ich ich vom Großteil von meinen Eltern übernommen hatte. Ich war schon immer ein Freund davon, Medien (_egal ob Musik, Filme oder auch Spiele_) wirklich zu besitzen und sie nicht nur zu leihen. Am Ende will ich es unter meiner eigenen Kontrolle haben. Das ist vielleicht nieschig und eine überholte Denkweise, aber ich stehe dazu. Ich weiß nie, ob die Musik, die ich suche, auch wirklich auf Spotify zu finden ist. Und wenn sie dort ist, weiß ich nicht, ob das auch in Zukunft so bleibt. Es wäre nicht das erste mal, dass Inhalte wieder entfernt werden (_genau wie bei Apple Music, Netflix oder e-Books bei Amazon_). Mir ist klar, dass das eine absolute Seltenheit ist - mir reicht aber schon, dass es die Möglichkeit überhaupt gibt. Außerdem mag ich es, Musik zu kaufen - im Laden. Es ist immer ein Event für das man sich bewusst Zeit nimmt.

## Von Platten zu CDs
Bei meiner neuen Musik-Bibliothek werde ich aber nicht mehr auf Schallplatten setzen, sondern zu diesem neuartigen und modernen Compact Disks wechseln. Die Platten-Sammlung hatte ich damals schließlich, weil es natürlich das coolste Medium ist, aber vor Allem, weil ich bestehende Sammlungen zusammengeführt und erweitert habe. Da ich nun einen kompletten Neuanfang durchlaufe, setze ich auf ein neueres Medium, will Kassetten aber doch lieber überspringen.

<figure vocab="https://schema.org/" typeof="Photograph" style="width:33%;float:left;margin-right:1em;">
    <img
        alt="Bildschirmfoto welches einige meiner Alben in Navidrome zeigt."
        srcset="/img/navidrome_small.webp  480w,
                /img/navidrome_medium.webp 960w"
        src="/img/navidrome.webp"
        copyright="cc-by Marius Timmer"
        />
    <figcaption>
        <small>
            <span property="copyrightHolder">Marius Timmer</span>
        </small>
        &minus;
        <span property="abstract">So sieht die Musik-Bibliothek doch nach etwas aus</span>
    </figcaption>
</figure>

## Second-Hand Musik im Laden kaufen
Schon häufiger habe ich meine Musik [in Münster bei Andrä](https://www.xn--cd-andr-cxa.de/) gekauft. Dort kann man gut Second-Hand Musik kaufen und vor allem Stöbern. Ich liebe es, eine halbe Stunde durch die Regale zu gehen und einfach nur zu gucken, was angeboten wird. So habe ich in der vergangenen Woche knapp 90 Euro dort gelassen, habe für das Geld aber auch 40 Alben gekauft. Meiner Mutter stattete ich ebenfalls einen Besuch ab und bediente mich an der CD-Sammlung von ihr und ihrem Mann. Auch wenn die CDs dort ganz präsent im Wohnzimmer stehen, weiß ich genau, dass sie seit vielen Jahren nicht mehr abgespielt wurden.

## CDs rippen und Taggen
Jetzt hatte ich also über sechzig Musik-Alben und ein frisch eingerichtetes Navidrome auf meinem Home Lab. Also begab ich mich in eine Zeitmaschine und fühlte mich wieder wie im Jahr 2005, als ich meine gesamte CD-Sammlung rippte. Ich hatte völlig verdrängt, wie viel Zeit das eigentlich in Anspruch nimmt. Vor allem, wenn man Wert auf korrekte Metadaten setzt. Im Gegensatz zu meiner Kindheit benutzte ich jetzt natürlich auch Linux. Nach und nach legte ich jede CD in das Laufwerk ein, las die Daten mit `abcde` ein (_=rippte sie_) und bearbeitete die vorgeschlagenen Metadaten (_Künstler, Album, Songnamen_). Besonders das Suchen der passenden Bilder für Künstler und Album-Cover nahm einige Zeit in Anspruch. Irgendwann begann ich auch, die Cover direkt mit dem Scanner einzuscannen - Schneller wurde der Workflow dadurch aber nicht.

Mehrmals überarbeitete ich die Gesamte Musik-Datenbank, da es einige Details beim [Tagging](https://www.navidrome.org/docs/usage/tagging-guidelines/) zu beachten gibt, damit Navidrome die Künstler oder auch Kollaborationen korrekt erkennt. Ich fügte noch ein paar optionale Metadaten wie Genre oder auch Erscheinungsjahr der einzelnen Songs (_bei Kollektionen_) ein und lies immer wieder einen vollständigen Scan meiner Bibliothek durchführen. Jedes mal sah es besser aus als vorher und wirkte auch runder.

## Kein Spotify
Natürlich rede ich mir nicht ein, dass ich damit meine Spotify-Nutzung einstellen kann. Schließlich möchte ich häufig auch nur einen bestimmten Song hören, den ich nicht als CD besitze. Andersherum werde ich auch nicht für jeden Song den ich mag, das komplette Album kaufen. Aber für meine Lieblingsalben und einiges mehr ist das schon ein echt cooles Werkzeug. Ich habe einen besseren Überblick darüber, welche Musik ich eigentlich besitze und kann sie direkt hören.

Hoffentlich werde ich das noch einige Zeit lang weiter betreiben und immer wieder auch in den Musik-Laden gehen - das macht echt Spaß. Aber ob ich es durchziehen werde, oder es doch nur eine kurze impulsive Phase war, wird die Zeit zeigen.
