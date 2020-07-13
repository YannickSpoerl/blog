---
title: Wann ist Alex? 🎰
date: 2019-11-15
tags: 
  - Vue
  - Vuetify
  - Firebase
author: Yannick
location: Dresden
summary: Wetten am Arbeitsplatz
---

[English](/en/2019/11/15/wannistalex/) | Deutsch

Schon seit längerem wollte ich Googles Firebase in einem Projekt nutzen, aber aus einer gewissen Zeitknappheit heraus, direkt in einer kleinen Anwendung für einen realen Use-Case.

## Der Use-Case

Ich erlebte einen Fall, in dem ein Angestellte stets zu einem anderen Zeitpunkt morgens auf Arbeit erschien. So begannen seine Kollegen aus Spaß Wetten abzuschließen, wann er wohl auftauchte. Aber für ein geregeltes Wetten gab es einige Probleme, die geklärt werden wollten:
- Wettet man auf einen konkreten Zeitpunkt oder auf einen Zeitslot, in dem er eintrifft?
- Wenn man auf Zeitslots wettet, gewinnt die Wette, die am nächsten liegt oder nur der Slot, in dem der Zeitpunk des Eintreffens liegt?
- Wie groß sollten solche Slots sein?
- Darf man mehrere Wetten abschließen?
- Setzt man eine beliebige Menge an Tokens?
- ...

## Die Implementation

Ich machte mir ein paar Gedanken und entschied eine Anwendung zu bauen, die Leuten das Wetten vereinfacht, andere abgeschlossene Wetten anzeigt und den Gewinner bestimmt. Den Rahmen stellten folgende Regeln:
- Der Tag wird in 15-minütige Slots unterteilt, von 8 Uhr morgens bis 17:30 Uhr
- Jeder kann auf eine beliebige Menge an Slots wetten, mit einem festen Preis pro Slot
- Man gewinnt nur, wenn der Kollege im Zeitslot kommt, wenn niemand auf den Slot wettet, gewinnt niemand
- Der Gewinner gewinnt alle gesetzen Token aller Teilnehmer

## Die Constraints

Im Rahmen der technologischen Constraints traf ich folgende Entscheidungen:
- Es ist kein Login notwendig, somit kann jeder alle Wetten bearbeiten und löschen. Das mag erst problematisch erscheinen, aber nach meinem Verständnis, das pro Büro eine Instanz der Anwendung bereitgestellt wird. Dort existiert eine gewisse Vertrauensbasis, weiterhin schreckt eine Registrierung potenzielle User ab und die Möglichkeit die Wetten der Kollegen zu bearbeiten fügt einen weiteren Spaßfaktor hinzu, was ultimativ die Basis der ganzen Anwendung ist.
- Es gibt eine Admin-Sektion, authentiziert nach Google-Account, wo der ausgewählte Admin Start- und Endzeit, Slot-Länge, den Kollegen, auf den gewettet wird und der Token-Preis pro Slot eingestellt werden können.

## Der Stack
Bezüglich der Technologie verließ ich mich auf Vue.js in Kombination mit dem UI-Framework Vuetify und dem offiziellen Vue-Router als Frontend und Firebase als Backend. Firebase ist nahtlos mit Hilfe des Vuefire-Plugins integriert, welches Echtzeit-Datensynchronisation bereitstellt. Daher gab es keine Notwendigkeit API-Requests oder Datenbank-Logik zu schreiben, da jede Änderung im Client sofort and den Server weitergegeben wird, während jede Änderung im Backend eine Änderung der entsprechenden Daten in jedem Client bewirkt. Dabei kratzte ich nur an der Oberfläche der Funktionen von Firebase, nichtsdestotrotz bin ich glücklich mit meiner Wahl und sehr überzeugt von Firebase, wenn es um kleine Webanwendungen oder Prototyping geht.

## Die Features

Folgende Features sind implementiert:
- Eine Tabelle, die alle Wetten, Slots, Wettende und Tokens anzeigt
- Bearbeitung und Löschen von Wetten
- Tabelle die all Wettenden und ihre totale Anzahl gekaufter Slots anzeigt
- Ein Plot, der die Verteilung aller Wetten im Verlauf des Tages zeigt
- Die laufende Zeit oder der Zeitpunkt, an dem der Kollege erschienen ist
- Der aktive Slot oder der Slot, and ddem der Kollege erschien
- Animation, die den vorherigen, aktuellen und nächsten Potenziellen Gewinner anzeigt
- Ein Button, der, wenn bei Erscheinen gedrückt, das Spiel für den Tab beendet

Hier ist das finale Ergebnis:
![Screenshot](https://user-images.githubusercontent.com/33640025/86590794-94bf9200-bf90-11ea-8a89-f9f00c7f7e5b.png)

Schau dir die [Live-App](https://wannistalex.yannickspoerl.de) an oder werfe einen Blick in den Code [auf GitHub](https://github.com/YannickSpoerl/wannistalex).
