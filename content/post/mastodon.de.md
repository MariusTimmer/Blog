---
title: "Meine Mastodon-Instanz"
description: "Mastodon ist quelloffen und zudem dezentral aufgebaut. Daher habe ich mir meine eigene Instanz eingerichtet. Twitter zerlegt sich gerade sowieso selber."
lastmod: "2022-10-18T09:00:00+02:00"
date: "2022-10-17T20:30:00+02:00"
tags: ["Technik"]
images:
  - "/img/mastodon_maskottchen.webp"
draft: false
keywords: ["Technik", "Mastodon", "Twitter", "Elon Musk"]
---

Es ist schon einige Wochen her, seitdem Elon Musk Twitter gekauft und damit
völlig auf den Kopf gestellt hat. Seit jeher ändern sich die geltenden
Spielregeln der Plattform nahezu täglich willkürlich. Diese Gelegenheit
habe ich nun genommen, um meinen eher wenig genutzten aber dafür schon
sehr alten Twitter-Account zu löschen.

<figure class="left col4" style="border:none">
    <img
        alt="Fröhliches Maskottchen von Mastodon"
        srcset="/img/mastodon_maskottchen.webp"
        src="/img/mastodon_maskottchen.webp"
        />
</figure>

Da mir schon seit einigen Jahren die Idee von dezentral strukturierten
Netzwerken sehr gefällt, habe ich mir direkt einen [eigenen Mastodon-Server](https://mastodon.mariustimmer.de/@timmer)
aufgesetzt. Hierbei ist zu erwähnen, dass ich immer mal wieder Prototypen
für eine art kleines dezentrales Netzwerk geschrieben hatte, die es aber
nie bis zu irgendeiner Reife gebracht haben. Ganz unabhängig davon war
der Nutzerkreis in meinem Umfeld auch immer so klein, dass es vermutlich
nie mehr als eine Instanz gegeben hätte. Wieso nicht auf offene Software
setzen, die jeder unter seiner eigenen Kontrolle laufen lassen kann und
dabei ganz offen (_im Sinne von [<abbr title="Application programming Interface">APIs</abbr>](https://de.wikipedia.org/wiki/Programmierschnittstelle)_)
ist. Der nächste Schritt zu Mastodon war also unausweichlich.


Mastodon-Server aufsetzen
-------------------------
Damit ich eventuell interessierten Followern auf Twitter rechtzeitig bescheid
geben konnte, musste ich zuerst eine Mastodon-Instanz aufsetzen, damit ich
anschließend einen letzten Tweet mit dem Link zum neuen Profil absetzen könnte.
Der oftmals genannte Vorteil der Dezentralität ist für mich ein Kernpunkt
von Mastodon, der mir super gefällt. Allerdings sehe ich auch, dass das für
die breite Masse nicht attraktiv ist, da nur ein kleiner Teil der potentiellen
Nutzer in der Lage sind, sich technisch einen Server zu mieten und dort
Mastodon zu installieren. Vermutlich wird es nur noch eine Frage der Zeit
sein, bis man bei Hostinganbietern entsprechende Mastodon-Instanzen bestellen
kann, so wie es heutzutage beispielsweise auch mit Wordpress möglich ist.
Aktuell gibt es das jedoch nicht (_soweit ich das gesehen habe_) weswegen
ich mir einen Root-Server nahm, eine neue Subdomain darauf zeigen ließ und
endlich die eigentliche Software installierte.
Da ich wegen der Stabilität gerne mit Debian arbeite, musste ich zuerst noch
einige neue Paketquellen einrichten um beispielsweise die aktuelle Postgres-
und NodeJS-Version zu installieren.

Sehr praktisch fand ich den Konsolengesteuerten Einrichtungsassistenten,
den ich auch direkt mehrfach ausführen musste, da meine Vorstellungen einer
optimalen Konfiguration nicht out-of-the-box funktionierten. Solche Punkte
hatte ich beispielsweise beim Einrichten der Datenbank (_nativ wird SSL von
dem Assistenten nicht unterstützt, weswegen ich es anschließend von Hand
nachrüstete_) oder auch beim Konfigurieren des lokalen E-Mailsystems.
Wenn man sich da als Techniker ein oder zwei Stunden reinarbeitet,
ist das aber auch alles kein Hexenwerk. Generell kann man sagen, dass die
ganze Software eigentlich recht gut dokumentiert ist.

Bei der Einrichtung wird man unter anderem auch gefragt, ob man beabsichtigt,
diese Instanz nur zum Hosten seines eigenen Mastodon-Profiles zu benutzen
oder auch andere Accounts dort liegen haben möchte. Aktuell wird auf meinem
Server ausschließlich mein eigenes Profil gehostet und dafür ist auch alles
konfiguriert. Dennoch möchte ich mir die Möglichkeit offen halten, später
auch mal die Accounts meiner Freunde zu hosten, wenn jemand Interesse haben
sollte.


Twitter Account löschen
-----------------------
Erst nachdem mein Mastodon-Server für einige Tage, ohne abzustürzen lief und
nachdem ich mich ein wenig mit dem neuen System vertraut machte, setzte ich
auf meinem seit 2012 bestehenden Twitter-Profil meinen letzten Tweet ab.
Dieser Informierte alle über die URL zu meinem neuen Profil im
[Fediverse](https://t3n.de/news/fediverse-erklaert-mastodon-activitypub-peertube-1513573/).

Wenn man sein Twitter-Konto löschen möchte, geht das gar nicht so einfach.
Zunächst deaktiviert man sein Konto und erst nach einigen Tagen (_ich glaube
zwei Wochen_) wird der Account dann wirklich gelöscht. Daher deaktivierte
ich meinen Account auch direkt nach dem Absetzen des Tweets im Wissen, dass
die Leute ihn weiterhin lesen können. Da mich aber noch interessierte, was
Twitter alles zu mir gespeichert hatte, nahm ich mir auch noch kurz die Zeit,
alle personenbezogenen Daten zu beantragen. Was für Informationen Twitter
über zehn Jahre über mich gesammelt hatte und das, obwohl ich die Plattform
nur sehr rudimentär nutzte, ist auch noch eine ganz andere Geschichte.


Seit der Löschung meines alten Accounts sind nun einige Wochen vergangen.
Bereuen tue ich den Weggang aber nicht. Vermutlich liegt das aber auch an
meiner sporaden Nutzung der Plattform. Denn mit einer ähnlichen Aktivität
bin ich nun auch auf Mastodon unterwegs. Hin und wieder gucke ich mal, was
es dort so in meiner noch kleinen Blase Neues gibt und noch viel seltener
setze ich mal einen Tröt ab. Leser dieses Blogs kennen mein
Veröffentlichungsintervall ja schon sehr gut. Trotz allem hoffe ich auf eine
blühende Zukunft dieser Alternative. Ganz ohne Ironie kann man glaube ich
sagen, dass [Jan Böhmermann](https://edi.social/@janboehm) mitunter auch
dafür verantwortlich ist, dass Mastodon plötzlich so einen
[Schub im deutschsprachigen Raum](https://www.zeit.de/2022/52/mastodon-twitter-alternative-plattform-dezentral?utm_referrer=https%3A%2F%2Fwww.google.com%2F) bekommen hat,
ganz abgesehen davon, dass Elon Musk offensichtlich auch alles versucht,
die [Leute von seiner Plattform zu verjagen](https://www.tagesschau.de/ausland/amerika/twitter-sperre-journalisten-101.html).
