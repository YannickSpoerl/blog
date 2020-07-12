---
title: Studocracy 👨‍🎓
date: 2020-02-03
tags: 
  - Flutter
  - Dart
  - Aqueduct
  - Android
author: Yannick
location: Dresden
summary: Studentenfeedback an der Universität optimieren
---

[English](/en/2020/02/03/studocracy/) | Deutsch

Für die Vorlesung Application Development for Mobile and Ubiquitous Computing im Wintersemester 19/20 haben meine Kommilitonin und ich eine nette kleine Android-Anwendung entwickel: Studocracy

## Etwas Hintergrund

Die App versucht die Problematik der unterschiedlichen Erwartungen von Professoren und Studenten zu lösen, kann natürlich aber auch bei anderen Vortrags-Dynamiken Anwendung finden.
Im Wesentlichen kann man als Vortragender einen Vortrag in der App erstellen, die dann einen QR- und Pin-Code generiert, die man mit seiner Zuhörerschaft teilen kann. Während der Vortrag aktiv ist kann jeder mit dem Code diesem Vortrag in der App beitreten. Ist man beigetreten kann man in kleinen Abständen Bewertungen oder Kommentare absenden, alles mit Stimmungsindikator. Der Vortragende sieht das gesamte akkumulierte Feedback in Real-Time.

Das Ziel dabei ist, die Zufriedenheit der Studenten mit der Vortragsweise zu verbessern, indem sie anonymes Feedback abgeben können und dem Vortragenden die Möglichkeit zu geben, seine Vortragsweise entsprechend der Bedürfnisse der Stundenten anzupassen.

## Der Stack

Alles beschriebene ist in der Client-Anwendung als Android-App realisiert, geschrieben in Dart mit dem Cross-Platform-Framework Flutter. Der Client kommuniziert mit dem Rest-Interface von einem Backend, geschrieben in Dart mit Aqueduct, das User-Interaktion und Datenbank managed.

Insgesamt bin ich sehr zufrieden mit dem Resultat, außerdem bestanden wir beide unsere Prüfung. Auch ist es ein gutes Gefühl eine fiktive Idee in einem funktionierenden Prototyp realisiert zu sehen. Lade dir gerne die App aus dem Google-Play-Store und teste sie an der Universität oder deinen Meetings!

Hier ist ein Screenshot aus der App:

<img src="https://user-images.githubusercontent.com/33640025/86590389-cedc6400-bf8f-11ea-905c-8b967337413f.png" alt="studocracy-screenshot" width="300"/>

Besuche uns auf [Google Play](https://play.google.com/store/apps/details?id=de.tudresden.studocracy) oder werfe einen Blick in den Code [auf GitHub](https://github.com/YannickSpoerl/Studocracy).