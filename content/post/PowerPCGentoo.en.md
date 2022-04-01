---
title: "Install Gentoo on a Mac Mini (G4 PowerPC)"
description: "How I revived an old Apple Mac Mini from 2005 with PowerPC architecture with a current Linux"
date: 2022-03-10T09:00:00+01:00
keywords: ["Linux", "PowerPC", "PPC", "Mac Mini G4", "Kernel"]
tags: ["Technology", "Linux"]
draft: false
---

> Note: This article is primarily translated by [DeepL](https://deepl.com/)
> and I did not really check everything due to a lack of time. I guess
> you will get my point - I guess.

Why a computer from 2005?
-------------------------
Older computers always fascinated me. But I do not limit myself to a certain era, like the 80s or 90s. That's why I still own a Commodore 64 with datasettes, but also my first laptop (_IBM ThinkPad T23_) from 2003. With a Pentium III processor and (_already upgraded_) 512 <abbr title="Megabyte">MB</abbr> <abbr title="Random Access Memory">RAM</abbr>, the latter is very underpowered when compared to today's computers. However, the limited hardware always appeals to me to get as much performance out of it as possible.

A few years ago, I got my hands on a server from the nineties. Gigantic 512 MB RAM will have cost thousands of marks back then. That in combination with a SCSI hard disk that sounds like an starting airplane turbine and the two Pentium Pro processors on their own plug-in card, the box is a real eye-catcher. My goal, however, is not to install Flight Simulator 98, because I won't install a Windows on any of my disks. Therefore I installed Debian Woody which comes on 20 floppy disks. From then on I tried to upgrade each version one by one until eventually it wouldn't work anymore. Once I even made the mistake and installed the default 64bit binaries. From then on, of course, nothing worked any more and I had to reinstall everything. In the meantime the almost 30 years old computer is running a Debian Bullseye. If you have a little patience, you can even start the X11 GUI and use the mouse. But do not try to surf the web with Firefox under X11. Since I am a console person anyway, I don't really care. That a current operating system still supports such old hardware surprised and pleased me enormously.

Just like this old computer came to me, a Mac Mini from 2005 (_last generation with <abbr title="Power PC">PPC</abbr> architecture_) also found its way to me.


Why Gentoo?
-----------
The question of the "_right_" distribution is always very difficult. Everyone has their own preferences and depending on what a computer is to be used for, reasons for or against a particular distribution can vary. Many Linux beginners therefore go for an Ubuntu installation, whereas experienced Linux users might rather install its "_father_" Debian or even an Arch Linux. Only very few people have actually installed Gentoo on their computers.

The reason for this is quite simple: The installation takes place completely manually. After booting the boot medium you are thrown into a console and that's it. But fortunately the distribution is very well documented in the [Handbook](https://wiki.gentoo.org/wiki/Handbook:Main_Page). So you partition your harddisk yourself, copy important files yourself, configure things like the timezone, locales or the bootloader yourself and to top it all off you have to compile every package. Because that is the big difference with Gentoo: It is a source based system, which means that the source code is downloaded and compiled during the installation of the individual components. This takes a long time and harbors a lot of error potential. This is exactly why it is a distribution that is really only for nerds.

Why do I want to go to this trouble? The reason is the architecture of the Mac Mini: In contrast to the standard computers in circulation (_mostly `x86` or `x86_64`_), this hardware runs with a 32 bit PowerPC, one of the last used. That's why no Linux distributions support this architecture anymore. Even Debian dropped support for it when changing from version 8 to 9. But since I want to have a system that is as up to date as possible and not lagging behind by many versions, these distributions are all out of the question. The fact that Gentoo is compiled on the target system therefore allows support for the PowerPC as well.


Configuration of the kernel
---------------------------
Now I can tell, that this was the right way, because it also runs in the meantime, but it was a long way. For example, I compiled the kernel five times until I had a working version. Especially on the old hardware with only one processor, building the kernel took a whole day each time. For anyone who wants to build their own kernel for the Mac Mini G4 with PowerPC architecture, I have linked my working configuration here with some hints. Note, however, that Gentoo applies its own patches to the kernel. So this is not the configuration for a vanilla kernel, presumably it is compatible though.

| Link | Linux-Version | Notes |
|------|---------------|-------|
| [0.3](/attachments/config-5.15.23-ppc-3) | 5.15.23       | <ul><li>WIFI-Error `kernel reports: key addition failed` fixed</li><li>Framebuffer uses 100x40 instead of 80x25 characters, fills the screen now</li><li>Removed some not needed drivers</li></ul> |
| [~~0.2~~](/attachments/config-5.15.23-ppc-2) | 5.15.23       | <ul><li>Will be booted by OpenFirmware unsing GRUB.</li><li>WIFI works in general, but kernel writes "`key addition failed`" when using PSK networks</li><li>Framebuffer does not use the full space of the screen</li></ul> |

At this point I only list the kernels that run on my Mac Mini. Everything else would have no added value for anyone. All in all I compiled eight different versions of the kernel until I had something executable. Each run took about ten hours. So you can imagine that I spent a lot of time on this project. Fortunately, something like this can compile on its own, so I could continue working on more important things. In addition, every installed package in the system (_because Gentoo_) also took some time to compile. But the binaries are super optimized for that, which is very important with such limited hardware.


My problem: The bootloader
--------------------------
However, there were a few more construction sites. When setting up Gentoo, I followed the instructions in the manual very closely and only made a few modifications, for example in the partitioning or the selection of some packages. A big problem for me was the bootloader. The handbook uses [yaboot](https://en.wikipedia.org/wiki/Yaboot), which is common on PowerPCs with OpenFirmware. However, the installation/compilation of the package already fails. Some Google queries showed that besides the package `sys-boot/yaboot` used in the manual, there is also `sys-boot/yaboot-static` which does not have a bug I encountered. So I changed to that package, but nothing else changed in that respect. Nevertheless OpenFirmware (_The BIOS for PowerPCs_) did not boot, but showed me that it could not find the requested file (_the Linux kernel_). I read in some forums that yaboot might have problems with the e2fs tools, so I created an own `/boot` partition (_I always do, but I wanted to follow the manual as good as possible first_) which I formatted with XFS. But that did not change anything. After a few days of research and trial and error, I gave up and tried to install GRUB. I wasn't sure if this would work at all on OpenFirmware, but [a manual](https://wiki.gentoo.org/wiki/GRUB_on_Open_Firmware_(PowerPC)) on the internet helped me. Even with that, I had to improvise and deviate in a few places. For example, my `ofboot.b` does not have any badge images, which is obviously not necessary.


Current state
-------------
In the meantime, however, I have a running Mac Mini G4 with a more or less now exotic architecture. My Gentoo Linux boots as I expect it to and loads all the necessary drivers. Even WLAN works now, although I initially had problems with it, as a required module for WPA-PSK networks was not in the kernel. Now I have another very old computer, with current Linux. Since Gentoo is open source and an active distribution, the installed packages will always have the latest versions and even be newer than my Debian machines. I should perhaps mention that I don't have X11 installed let alone a desktop manager. That would also be possible, but on the one hand I am a console person and on the other hand I don't want to lose the gained performance by unnecessary GUI.

In any case, this experience was certainly very useful for my next project: Linux From Scratch for my server from 1996. Since I have now even found a [ZIP drive](https://en.wikipedia.org/wiki/Zip_drive) and have a few suitable disks, it will certainly be interesting to squeeze a whole Linux (_kernel and the system (maybe even with RAMFS)_) onto the 100MB. I got the idea when I read how someone got a [minimal kernel and RAMFS onto a 3.5" 1.44MB floppy](https://hackaday.com/2021/05/24/running-modern-linux-from-a-single-floppy-disk/).
