---
layout: post
title: "Upcycled Ham"
date: 2025-12-21 17:30:00 -0000
categories: blog
---

# Upcycled Ham - Adventures with old tech

Whilst in a rabbit hole of APRS, I decided I wanted to have a dedicated station using some old/unused tech.

## Where we came from

To test out the idea I used some kit I had laying around:

- A Quansheng UV-K6
- A 2 pin Kenwood to 3.5mm female cable (that I had used with headphones for monitoring)
- A 3.5mm male to 3.5mm male cable from a ChromeCast Stereo which was going unused as I have a 3.5mm to L/R phono into an amp, its nice and short, and lime green
- A Samsung 3.5mm female to USB-C adaptor, the kind phones were bundled with in the transition from 3.5mm jacks to them being taken away

That chain of equipment allowed me to receive APRS packets, limited by the 3 pole 3.5mm cable from the ChromeCast (because it doesn't have a mic).
The setup worked well, it was reliable, and whilst I didn't necessarily pick up people directly, I did discover I get good coverage from a local digipeater which started to populate my local area, and other digipeaters.

To enable the transmit part, I purchased an APRS cable from Aliexpress for £3.50 that takes a 2 pin kenwood from the Quansheng, goes through some sort of black box section (not sure why) and then terminates at a 4 pole 3.5mm cable. The 4 pole 3.5mm cable plugs into the Samsung 3.5mm to USB-C adaptor, and after enabling VOX to 10 on the Quansheng was transmitting enough to hit some iGates, and the digipeater.

## Where we are

Here is the upcylced part. I wanted an 'always on' APRS station at home, over RF, so basically the setup I have now, but not using my main phone so I can use it normally, or leave it running when I am out.

After some (lots) of research, I settled on the Samsung Galaxy S5. At almost 12 years old its still going strong, has Lineage 21 (Android 14) unofficial support, a removable battery to replace old ones (though mine came with a perfectly good one), and it was only £20 from eBay. It also has a 3.5mm jack, so the theory is I can have the APRS cable, and a micro-USB cable to keep it charges (with Android limiting it at 80% to avoid battery fatigue).

Unfortunately, the slight hic-up is that the Samsung Galaxy S5 is not picking up the APRS cable as a headset, so it only uses the audio in. After some reading, the likely issue is impedance, as there is no microphone inline for the headphone 3.5mm to detect. It does detect a Koss headset I have, so I know the port does work.

## Where we are going

Thankfully a fried gifted me a repaired soldering iron and some solder, so the next steps are purchasing:

- A 4 pole 3.5mm female to male (maybe 2 for mistakes)
- Some 1kΩ resistors (at least 2)

What I need to do, is get to the 4 wires inside, work our which one is the ground, and which one is the microphone.
Once identified I will solder a 1kΩ bridge to that wire, giving the phone enough resistance to trick it into thinking there is a microphone in line, but as its a bridge on the wire when the APRSDroid app sends a signal it will take the path of least resistance and go straight to the Quansheng and transmit via VOX.

My soldering skills are not great, but this seems a simple job, and should be complete for less than £5 in parts.
