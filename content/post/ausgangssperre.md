---
title: "Wo ist Ausgangssperre?"
date: 2021-05-17T10:00:00+02:00
draft: false
author: "Marius Timmer"
keywords: ["Corona", "Ausgangssperre", "Ausgangsbeschränkungen", "Robert Koch-Institut", "Landkreise"]
description: "Mein kleines Projekt zu aktuellen Ausgangssperren in den Landkreisen"
---

Durch das neue Infektionsschutzgesetz des Bundes sind nun doch die nächtlichen Ausgangssperren auf Kreisebene gekommen. Da es zu meinen Hobbys gehört, am späten Abend oder auch in der Nacht eine Runde mit dem Auto zu drehen, ist es für mich also sehr interessant zu wissen, ob aktuell eine AUsgangssperre besteht oder nicht. Gerade auch weil ich in einer Gegend wohne, in der drei Landkreise mit völlig unterschiedlichen 7 Tages-Inzidenz-Werten aufeinander treffen. Münster hat am Wochenende beispielsweise schon wieder seine Außengastronomie öffnen können. Kreis Coesfeld ist eines der Modell-Regionen für die Öffnungen nach der Pandemie. In Kreis Steinfurt hingegen ist die Infektionszahl generell höher - einen wirklichen Grund dafür kenne ich nicht.

<figure role="group" class="right col3">
    <a href="https://woistausgangssperre.de/" target="_blank">
		<img
	        alt="Karte der Bundesrepublik mit eingefärbten Landkreisen"
	        srcset="/img/coronamap_small.webp 480w,
	                /img/coronamap.webp       638w"
	        src="/img/coronamap.webp"
	        />
	</a>
    <figcaption>Bisher wurde noch nicht das gesamte Bundesgebiet in die Übersicht mit aufgenommen.</figcaption>
</figure>

Auf Grund dieses großen Durcheinanders habe ich im Internet eine Übersichtskarte finden wollen. Schnell habe ich aber festgestellt, dass es soetwas gar nicht gibt - oder ich zu doof bin Google zu benutzen. Wie Ihr wisst, verbringe ich ja auch viel Zeit damit, komische Projekte zu starten und nicht zuende zu bringen. Daher habe ich ein Skript geschrieben, welches stündlich die neusten Inzidenzwerte vom <abbr title="Robert Koch-Institut">[RKI](https://www.rki.de/DE/Home/homepage_node.html)</abbr> herunter lädt und in meine Datenbank speist. Passend dazu habe ich dann auch eine Deutschland-Karte angelegt, die mit roten und grünen Farben anzeigen soll, wo aktuell eine nächtliche Ausgangssperre besteht und wo nicht.

Ich erhebe natürlich keinen Anspruch auf die Richtigkeit der Karte (_ich wäre schön blöd_), bin mir aber ziemlich sicher, dass das alles korrekt funktioniert. Lag die 7 Tage-Inzidenz in einem Landkreis für fünf Tage unter dem Grenzwert von 100, so herrscht dort keine Ausgangssperre. Lag die Zahl für mindestens drei Tage bei 100 oder höher, so gehe ich von einer Ausgangssperre aus. Im Gesetzestext steht dann noch etwas von zwei Tagen Verzögerung (_vermutlich damit sich alle mental auf soetwas vorbereiten können_).
Da die Landkarte in Handarbeit eingerichtet werden muss, sind auch noch nicht alle Landkreise eingearbeitet. Außerdem liefert mir das RKI die Zahlen zum Beispiel für Berlin pro Stadtteil, wohingegen meine Karte Berlin aber als eine Stadt bzw. einen Landkreis sieht. Und irgendwie ist mir unwohl dabei, die Zahlen einfach zusammen zu rechnen. Das ist zwar ganz einfach möglich, aber sehr unsauber. Das daraus resultierende Ergebnis möchte ich dann doch lieber nicht veröffentlichen - einfach um sicher zu gehen.

Eigens für dieses Projekt habe ich mir sogar eine passende Domain gekauft - und das auch noch spottbillig für 5 Euro: [WoIstAusgangssperre.de](https://woistausgangssperre.de/)

Teilt den Link ruhig gerne, da die Übersichtskarte sicherlich mehrere Leute interessieren dürfte - zumindest so lange wie Corona und die Ausgangssperre noch da sind. Wenn ihr Fehler findet, könnt ihr mich gerne anschreiben, damit ich das mal prüfen kann. Vermutlich finde ich aber eine gute Ausrede, wieso das schon alles seine Richtigkeit hat. Ich bitte natürlich auch zu berücksichtigen, dass die Karte Sonderfälle nicht abdeckt. Wenn also ein Landkreis für sich die Ausgangssperre unabhängig vom Infektionsschutzgesetz verhängt, habe ich keine Chance, das automatisiert abzufragen. Viel Spaß!
