---
title: "Sichere E-Mails dank GnuPG"
description: "Um die Kommunikation per E-Mail so sicher wie möglich zu machen, nutze ich die GnuPG Implementierung von PGP."
draft: false
date: "2025-04-14T23:00:00+02:00"
lastmod: "2025-04-16T20:24:45+02:00"
layout: "single"
---

## Wieso ich E-Mails mag
Sehr häufig wird erzählt, dass E-Mail tot sei und die Zukunft in moderneren Messengern läge. Und trotzdem ist die gute alte E-Mail nicht weg zu denken. Fast ein wenig wie das Fax-Gerät - nur eben in cool. Denn ich liebe es Mails zu schreiben. Nachrichten in irgendwelchen Messengern kann man sehr gut zwischen Tür und Angel tippen und senden, aber gerade das sehe ich als den großen Vorteil von klassischen E-Mails: Ich schreibe sie nicht "_mal eben_", sondern nehme mir Zeit dafür und mache mir viel mehr Gedanken dazu, was ich eigentlich schreiben will. Ob einem das gelingt, steht auf einem ganz anderen Blatt.

Außerdem habe ich beim Verfassen meiner E-Mails mehr Kontrolle darüber, ob ich sie einfach so abschicke, mindestens signiere, oder sogar verschlüssel. Messenger sagen häufig, sie seien End-zu-End verschlüsselt, aber garantieren kann mir das keiner. Wenn ich <abbr title="GNU Privacy Guard">GnuPG</abbr> (_nach Möglichkeit korrekt_) nutze, bleibt dies für mich immer der sicherste Kommunikationskanal.

Netter aber irrelevanter Sidefact: Die Implementierung GnuPG kommt sogar aus Deutschland. 🎉


## Meine Schlüssel
Weil auf Schlüsselservern ja gerne einige Irrläufer unterwegs sind, möchte ich den korrekten Schlüssel an dieser Stelle verbreiten. Wenn ihr mal eine E-Mail bekommt, die mit einem anderen Schlüssel signiert ist, kommt die Mail nicht von mir.

<table>
  <caption>Liste aller von mir aktuell und in der Vergangenheit genutzter öffentlichen GnuPG-Schlüssel</caption>
  <thead>
    <tr>
      <th scope="col">Fingerabdruck</th>
      <th scope="col">Gültig ab</th>
      <th scope="col">Gültig bis</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="/4D641AE088F6D658FD2DD62760D410A83999EB85.asc">
          <code>4D641AE088F6D658FD2DD62760D410A83999EB85</code>
        </a>
      </td>
      <td>
        <time datetime="2025-04-15">15.04.2025</time>
      </td>
      <td>
        <time datetime="2026-04-15">15.04.2026</time>
      </td>
    </tr>
  </tbody>
</table>
