---
title: "Debian-Update zerschießt mein Mastodon"
description: "Ich halte meine Systeme gerne auf dem neusten Stand. Nun war es an der Zeit, mein Debian von Bullseye auf Bookworm zu aktualisieren. Mastodon gefiel das nicht."
date: "2024-07-14T16:00:00+02:00"
draft: false
keywords:
  - Mastodon
  - Debian
  - Migration
  - Yarn
  - NodeJS
  - Ruby
  - PostgreSQL
---

## Eine Debian Aktualisierung ging schon mal schief
In regelmäßigen Abständen besuche ich den [Wikipedia-Artikel von Debian](https://de.wikipedia.org/wiki/Debian), weil ich mir weder merken kann, welche die jeweils aktuelle Version ist, noch wie lange sie unterstützt werden. Bei meinem Besuch letzte Woche stellte ich fest, dass es nicht mehr lange dauern wird, bis der Support für Bullseye ausläuft und ich bis dahin auf Bookworm gewechselt haben sollte. Die meisten Systme hatte ich im Laufe des letzten Jahres wohl schon umgestellt, aber mein [Mastodon-Server](https://mastodon.mariustimmer.de/) fehlte noch. Vermutlich weil ich schon beim letzten mal [darüber gestolpert](/post/mastodon_fix) war, die Instanz komplett neu aufgesetzt wurde und alle Daten (_einschließlich meiner Posts und mehr_) verloren gingen.

Mein Verdacht war, dass sich die Versionen einiger Abhängigkeiten (_z.B. NodeJS, Yarn, Puma, etc_) geändert hatten und dadurch nichts mehr lief. Trotz Monate langer Recherche schaffte ich es nicht, die Instanz zu retten und gab sie irgendwann auf. Das war mir noch alles im Hinterkopf, als ich nun überlegte, Debian erneut zu aktualisieren. Ich finde es sehr praktisch, dass sich die Mastodon-Instanz bei mir meldet, wenn es neuere Versionen gibt oder Sicherheitsupdates bevorstehen (_was ja am Ende auch nur neue Versionen sind_). Für die Anwendung selbst reicht es meist aber aus, die Neuerungen per `git fetchen` zu holen und anschließend auf den neuen Versions-Branch zu aktualisieren. Am Ende wird dann noch mal ein Kommandozeilenbefehl von Mastodon ausgeführt, der alles abrundet und damit ist es dann erledigt. Ich setzte nun darauf, dass es ein ähnlicher Aufwand werden würde, da es ja nicht sein könne, dass alle Nutzer auf der Welt bei Debian-Updates auf die Nase fallen.


## Die Aktualisierung
Die Aktualisierung an sich verlief, wie erwartet, recht unkompliziert und schnell. Unter `/etc/apt/sources.d/` sah ich mir meine eigenen Sourcen mal an (_kann hin und wieder auch nicht schaden_) und änderte dort die Debian-Version. Ein `apt-get {update,upgrade,dist-upgrade,autoremove,autoclean}` später waren nahezu alle Pakete ausgetauscht und auf dem neusten Stand. Nach dem Reboot kam ich wieder ins System und alles war wie erwartet.

Wirklich überrascht war ich aber nicht, als ich bemerkte, dass die [sidekiq](https://docs.joinmastodon.org/admin/scaling/#sidekiq) und web-Daemons von Mastodon nicht mehr starteten. In den Protokollen sah ich die merkwürdigsten Fehlermeldungen, die meinen Verdacht bestätigten: Die Version von Yarn war eine neue, die Abhängigkeiten hatten sich geändert und NodeJS war auch um vier Versionen neuer. Einige Stunden tüftelte ich herum und versuchte herauszufinden, was die Ursache war. Ich merkte, dass `yarn` und `corepack` systemweit installiert waren, sie aber auch systemweit als NPM-Pakete installiert waren und so zwei Versionen Konflikte miteinander hatten. Auch wenn ich einige Anwendungen habe, in denen NPM-Pakete und NodeJS generell, Yarn, oder auch Puma genutzt werden, hatte ich zu wenig Ahnung, wie ich diesen kaputten Stand reparieren konnte.

Es ist zwar leider die Methode mit dem Vorschlaghammer, aber am Ende habe ich Yarn und NodeJS neu installiert, nur um festzustellen, dass es nichts gebracht hatte. Viel zu spät bemerkte ich, dass Ruby durch das neue Debian nicht beeinflusst war, da es nicht systemweit, sondern nur im Home-Verzeichnis des Nutzers installiert war. Als ich da einmal drauf gekommen war, konnte ich die Ruby-Version dort updaten und plötzlich funktionierten die Schritte aus dem [Installer](https://docs.joinmastodon.org/admin/install/) auch wieder.

An diesem Punkt hatte ich mich schon davon verabschiedet, die alte Instanz einfach zu aktualisieren, da ich in der Zwischenzeit auf die Dokumentation gestoßen war, wie man [auf meine neue Maschine migriert](https://docs.joinmastodon.org/admin/migrating/). Den Anweisungen folgte ich dann, auch wenn die alte und die neue Maschine das selbe System aber zwei unterschiedliche Verzeichnisse waren. Ich konnte es am Ende fast nicht glauben, als ich mein Mastodon Dashboard im Browser wieder sehen konnte, ganz ohne die blöse Fehlermeldung, dass es technische Störungen gebe.


## Wenn schon, denn schon
Mit dem Wissen, dass meine Instanz nun wieder lief (_weil komplett neu aufgesetzt_), wurde ich fast ein wenig übermütig. Mir war nämlich aufgefallen, dass ich noch eine alte PostgreSQL-Datenbank benutzte und die Client-Libraries noch viel älter waren. Also nahm ich mir dir Zeit, die Datenbank in einem Backup zu sichern und anschließend die Datenbank komplett zu deinstallieren. Ich löschte die Verzeichnisse aus und installierte anschließend einen PostgreSQL 16 Server. Das Backup ließ sich dann recht simpel einspielen (_wenn man von meinen zu viel und zu gut gemeinten Parametern bei `pg_restore` mal absieht_). Anschließend startete ich die Maschine noch einmal komplett neu, aktivierte und startete die Dienste, und siehe da: Mastodon antwortete mir wieder. Keine Fehlermeldungen in den Protokollen und alle Daten waren erhalten geblieben.

Nebenbei hatte ich mir auch noch erlaubt, bei der Firewall auf `firewalld` umzusteigen. Bisher hatte ich die immer nur in CentOS- und AlmaLinux-Systemen verwendet, kenne daber aber eben auch die Schwierigkeiten, wobei dir wirklich überschaubar sind.

Am Ende des ganzen Debian Updates und der Migration blieb ein fader Beigeschmack. Es kann ja schließlich nicht sein, dass jeder Betreiber eines Mastodon-Servers unter Debian die gleichen Probleme durch macht. Vermutlich hätte ich mir aber auch eine Menge Zeit sparen können, wenn ich mich mehr mit Ruby und co. auskennen würde. Trotz allem überwiegt aber die Freude, dass die Migration am Ende geklappt hat, Debian Bookworm noch bis Mitte 2026 unterstützt wird und ich dieses mal keinen Datenverlust erleiden musste. 🎉
