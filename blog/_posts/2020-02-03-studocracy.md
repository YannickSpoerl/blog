---
date: 2020-02-03
tags: 
  - Flutter
  - Dart
  - Aqueduct
  - Android
author: Yannick
location: Dresden  
---

# Studocracy

For the lecture Application Development for Mobile and Ubiquitous Computing during winter-term 19/20 my teammate and me created a nice little Android-Application: Studocracy

## Some background

This app tries to solve the problems of the expectation mismatch between professors and students, but can also be used for other Speaker - Audience dynamics.
Basically the lecturer can create his lecture within the app, which creates a PIN and QR-code that he can share with his audience.
Then, while the lecture is active anyone who knows PIN or QR-Code can join this lecture in the app and rate the lecture in simple categories or leave a 
short message - all with his sentiment attached. The lectures sees all this accumulated feedback and comments on his screen in real-time.
This aims to improve the students satisfaction with the lecture by allowing them to give anonymous feedback and lets the lecturer adjust his style according to the students needs.

## The stack

All this is realized by the client-application used on the phones written in Dart with the cross-platform flutter. The clients communicate via rest-interface from one
deployed backend, that handles the user interactions and database, writte also in Dart with the web-framework aqueduct.

Overall I am happy with the result and we passed the exams, also it is nice to see the fictive idea being realized by a working prototype.
I invite you to download the app from Google Play and try it at your university or meetings!

Here is a little sneak peak at screen within the app:

<img src="https://user-images.githubusercontent.com/33640025/86590389-cedc6400-bf8f-11ea-905c-8b967337413f.png" alt="studocracy-screenshot" width="300"/>

## Check it out!

Check out the app on [Google Play](https://play.google.com/store/apps/details?id=de.tudresden.studocracy) or check the project out on [GitHub](https://github.com/YannickSpoerl/Studocracy).
