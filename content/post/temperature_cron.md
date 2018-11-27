---
title: "Temperatur Cronjob"
date: 2018-03-11T11:59:24+01:00
draft: false
author: "Marius Timmer"
tags: ["Entwicklung", "Raspberry Pi"]
---

Es ist kein Geheimnis, dass der Raspberry Pi eine bietet Menge Möglichkeiten bietet, diverse Sensoren anzuschließen und die erhobenen Daten zu verarbeiten. Bevor ich mir vor einiger Zeit ein richtiges Thermometer gekauft habe, war meine einzige Möglichkeit die Temperatur zu messen, die CPU Temperatur abzufragen. Diese ist in der Regel natürlich wesentlich höher als die Raumtemperatur, aber für kleine Versuche reicht es auf jeden Fall aus.

## Das Projekt
In diesem Projekt wollte ich nur die CPU Temperatur in regelmäßigen Abständen (_stündlich_) abfragen und in eine CSV-Datei speichern. Die generierte Datei kann man anschließend in Excel oder ähnlichen Programmen einbinden, um hübsche Grafen dazu zu erzeugen.

Auf meinem Pi habe ich dafür mit dem Befehl `sudo crontab -e -u root` die folgende Zeile in meiner Crontab eingetragen:

```sh
0 * * * * /opt/tempScript.sh > /dev/null
```

Das dort eingetragene Skript (`/opt/tempScript.sh`) sollte ungefähr so aussehen:

```sh
#!/bin/sh

# Legt für jeden Tag eine Datei mit den vierundzwanzig gesammelten
# Temperaturen und den dazugehörigen Stundenzahlen an

TARGET_DIRECTORY=~/temperatures
TARGET_FILE=${TARGET_DIRECTORY}/$(date +"%j").csv

mkdir -p ${TARGET_DIRECTORY}
echo $(date +"%H"),$(/opt/vc/bin/vcgencmd measure_temp | grep -o "..\..") >> ${TARGET_FILE}
```

Nach einigen Stunden sollte sich in dem ggf. neu angelegten Verzeichnis `temperatures` mindestens eine Datei befinden, deren Inhalt ungefähr so aussieht:

|Zeit| Temp |
|----|------|
| 00 | 51.9 |
| 01 | 51.9 |
| 02 | 51.9 |
| 03 | 52.5 |
| 04 | 51.4 |
| 05 | 50.8 |
| 06 | 50.8 |
| 07 | 51.4 |
| 08 | 51.4 |
| 09 | 50.8 |
| 10 | 50.8 |
| 11 | 50.8 |
| 12 | 50.3 |
| 13 | 50.8 |
| 14 | 49.8 |
| 15 | 50.3 |
| 16 | 49.8 |
| 17 | 49.8 |
| 18 | 50.3 |
| 19 | 50.8 |
| 20 | 50.3 |
| 21 | 50.3 |
| 22 | 50.8 |
| 23 | 49.8 |

![Graph zur Veranschaulichung der gesammelten Daten](/img/temperatures.svg)

**Übrigens**: Wie die Daten vermuten lassen, gibt es keinen (_oder nur einen minimalen_) Zusammenhang zwischen der Tageszeit und den Temperaturen.
