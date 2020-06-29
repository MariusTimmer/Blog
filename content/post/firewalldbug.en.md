---
title: "Bug in Firewalld"
author: "Marius Timmer"
date: 2019-12-09T16:31:33+02:00
draft: false
keywords: ["Firewalld", "Firewall", "Linux", "Network", "Host", "IP", "IP address", "nftables", "iptables"]
---

<span vocab="http://schema.org/" typeof="Report">

My personal experience level
----------------------------
<span property="backstory">I am administrating many servers for our university since 2016. Of course we try to keep them as safe as possible by using firewalls. They are used to protect our network from unwanted visitors and to protect every single node from each other. Only administrative and known service ports are open for specific IPs. Additionally we are NATting a lot of traffic. So you could say I am firm with the usage of firewalls. Our primary firewall is [firewalld](https://en.wikipedia.org/wiki/Firewalld) which is a frontend for [nftables](https://en.wikipedia.org/wiki/Nftables)/[iptables](https://en.wikipedia.org/wiki/Iptables). I wouldn't say that I am an firewalld expert because I only knew the things I need to know for the things I use it for.</span>

What I've found
---------------
<span property="articleBody">As far as I know it is common sense to use zones to separate different services. In fact firewalld does not allow to use a single IP in two different zones. In my case I used a VM which hosts two different services. Of course they are separated by two different [docker containers](https://en.wikipedia.org/wiki/Docker_(software)) using subuid, single networks for each service and separated zones in firewalld. When I tried to add a single IP address to both zones I encountered an error from the firewall telling me that I can not use a single IP in two zones. That was not new to me but somehow I just forgot it when I executed the commands - shit happens. But then I added `xxx.xxx.xxx.xxx` to the first and `xxx.xxx.xxx.xxx/32` to the second zone. No error message occured. Even after reloading the firewall everything seemed to be fine. After a few hours a customer complained that he could not access one of the services any more. I tried to find the reason and I started to doubt my own abilities. But then I realized that I used one IP in two zones and I remembered that this coult not be what I want.

It seems to me that firewalld checks whether an IP is already used by another zone. But only the strings are compared - not the real IP address. In my eyes this is a bug should be fixed. Or at least there should be a warning which tells me that there is a illegal configuration. But of course I can not rule it out that it is my personal fault. I would be happy to hear some feedback from you regarding this issue. Or maybe I should open an issue in the [repository](https://github.com/firewalld/firewalld/issues)? I just dont want to disgrace myself in public. &#128516;</span>

```bash
# Add ip address to the first zone
firewall-cmd --permanent --zone=one --add-source=123.123.123.123

# Add the same ip address to the second zone
firewall-cmd --permanent --zone=two --add-source=123.123.123.123/32

# Now lets apply everything
firewall-cmd --reload
```
<span property="inLanguage" content="de"></span>
<span property="reportNumber" content="001"></span>
</span>
