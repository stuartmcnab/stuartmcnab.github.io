---
layout: post
title: "Setting up an RTL-SDR-V4 on a Raspberry Pi 3b+"
date: 2025-12-30 12:56:00 -0000
categories: blog
---

# The too long, didn't read, but probably still too long

I am a licensed amateur radio operator, and one of the tools I use is a Software Defined Radio (SDR), the version I have is the RTL-SDR V4 (https://www.rtl-sdr.com/) from AliExpress, it came in a pack with a dipole antenna for about £40.
The SDR works great plugged into my laptop and I can run SDR++ to listen to various frequencies, use wellie.io to listen to digital broadcast radio, or Virtual Radar with WINDUMP1090 to track the transponders of local aircraft.

What I wanted out of this change, is a way to have an always-on monitoring setup so I can listen to a particular frequency, repeater, or gateway and then power up a handheld radio to join in.

I have my SDR dipole on a shelf above my desk, which works well to monitor local radio activity, and I have a Raspberry Pi 3b+ and a Pimeroni HyperPixel 4" touch screen that sits on the GPIO pins and would serve as a nice display for this, they are not in use and this will give them some purpose again.

## Here is how I did it

1. Fresh install of PiOS 32bit from Raspberry Pi Imager
2. Followed the instructions (but not the bit about the screen) from https://unboxing-tomorrow.com/software-defined-radio-for-raspberry-pi-3b-part-2/
3. Installed GQRX SDR from the Add/Remove Software on PiOS
4. Followed the setup instructions for the screen https://shop.pimoroni.com/products/hyperpixel-4
5. Pair my mouse via bluetooth as its 3rd device for ease of navigation

The first 3 steps I did with the Pi attached via HDMI to a monitor, and I plugged my keyboard and mouse in via USB. That afforded me the luxury of a 24" screen rather than trying to type commands into a 4" screen.

At the moment I am using so Koss Porta Pro headphones plugged into the Pi, as I share the room with my wife for work, at some point I may add a small speaker.
