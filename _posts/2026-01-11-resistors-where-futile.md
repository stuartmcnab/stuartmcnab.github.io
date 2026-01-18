---
layout: post
title: "Resistors where futile"
date: 2026-01-11 16:49:00 -0000
categories: blog
---

# Resistors where futile - adventures in APRS

Last year after getting my foundation License to operate a radio, I went down the rabbit hole of digital modes, and specifically APRS as it looked a lot like Meshtastic.

## In the beginning there where spare parts

I like to try things at a low cost point, its like fail fast. I had a Quansheng radio, and a Kenwood 2 pin plug to 3.5mm that I had used to listen with headphones. I also had a male to male 3.5mm short cable from a Chromecast Stereo, and a 3.5mm to USB-C adaptor tp lug into my Pixel 8a.

It worked well, I side loaded APRSDroid, set it up, and it could hear gateways, repeaters, and the map quickly populated, the downside was the 3.5mm cable from the Chromecast was 3 pole, so there was no microphone channel for me to push messages out.

## The APRS specific cable upgrade

Because I had a minimum viable setup, I purchased an APRS specific cable from Aliexpress. It has a Kenwood 2 pin adaptor on one end, and a 4 pole 3.5mm on the other, and some sort of black enclosure in the middle which does something, not sure what though.

I plugged the 3.5mm end into the adaptor and then into the USB-C in my phone, and with the quansheng on the other end tuned to 144.800MHz it worked just as well, and when I transmitted my location, I showed up on aprs.fi. A success.

## Back to the future, 3.5mm and detection issues

I wanted to have a base station for APRS, so that I could send myself messages if I was out and about, let my wide see where I was if I was out walking, and generally have an always on setup to see what was happening around my in APRS.

I purchased a Samsung Galaxy S5, as it had good Lineage support, put Lineage 21 (Android 14) on it, side loaded Lineage, plugged the APRS cable in via 3.5mm.

It seemed to pick up some incoming, but when I pressed the send location button, the squawk of APRS came out of the phones speaker.

I installed an app that shows what is connected via the 3.5mm socket, and it was showing headphones, not headset. Plugging in a Koss headset that showed up correctly, something was wrong here.

## Getting things working, resistors, capacitors, and the quest for APRS

After some searching, and some AI assistance, I decided to get a 4 pole male to femal cable to modify.

The first step was to gently slice open the outer casing, then strip each of the 4 wires inside.

I used a multimeter to map each one to the rings on the tip, and identify which colour mapped to each function of Ground, Mic, Left audio, and Right Audio.

After identifying each, I put a 10kΩ bridge between the ground and microphone wires, with the below behavior:

1. The extension cable plugged in showed headset (which it did before mods)
2. I plugged the APRS cable into that which also showed headset (it had previously changed to headphones, so this was promising)
3. I plugged the APRS cable into a Quansheng radio, it showed nothing connected (not ideal)
4. I turned the radio on, it still said nothing connected (But wait, when I received an APRS transmission, it changed to headphones, better, not ideal)

## Whats next

The next step is adding a capacitor, it adds something called a DC block that should prevent the phone and radio causing issues with each other, hopefully that works, and keeps the phone recognising the setup as a headset, so it transmits audio down the line, and triggers the vox in the Quansheng.

Look out for updates in future posts.

I will be looking at this guide: https://blog.aprs.fi/2022/02/baofeng-btech-aprs-k1-iphone-problems.html
