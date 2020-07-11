---
title: Wann ist Alex? 🎰
date: 2019-11-15
tags: 
  - Vue
  - Vuetify
  - Firebase
author: Yannick
location: Dresden
summary: Gambling at workplace
---

For some time I wanted to try out Googles Firebase, but as I don't have much time these days I couldn't and didn't want to just experiment by myself but use it for prototyping or a small application for a real use case. When I finally had an idea, it was the following:
 
## The use case

I encountered the case, that an employee was not too reliable on the time he arrived at the office everyday. His coworkers began betting on the time he would arrive as a joke, because there was quite a time-frame in which he usually appeared. But for serious betting, there where some open questions and problems to be cleared:
- Do you bet on a concrete point in time or on a time-slot in which he arrives?
- When using time-slots, does the nearest bet win or only the bet that predicted the exact slot?
- And how big should theses slots be?
- Should on be able to give multiple bets?
- Do you bet a random amount of tokens?
- ...

## The implementation

So I made my mind up and decided to implement a small application that makes it easy for people to bet, that shows the other bets and the schedule and determines the winner. The constraints I chose where the following:
- The day is divided into 15min timeslots, ranging from 8 AM to 5:30 PM
- Each person can bet on any number of slots, with a fixed price per slot
- You win only if the worker arrives in your slot, otherwise nobody wins
- The winner wins the accumulated tokens of every bettor

## The constraints

For technological constraints I came to following decisions:
- You do not need to log in, therefore anyone can create, edit and delete any bets. That my sound wrong at first glance,
but my understanding is, that one instance should be served per office, where a level of trust exists, further would a required registration drive away potential users and being able to edit your coworkers bets adds new layer of fun inside the office, which this is all about
- There is an AdminPanel, authenticated with your Google-Account, where a designated admin can change start and endtime, slotsize, the people that can be betted on and the token-price per slot.

## The stack

Technologywise, I relied upon VueJS combined with the UI-Framework Vuetify and the vue-router-plugin for the frontend and as Firebase for the backend. Firebase is seamless integrated via the vuefire-plugin and provides real-time-data-sync which is really cool. I did not need to implement any API-requests or database-logic, every change inside the frontend can be written instantly into the database and when the database changes all clients are instantly updated. I did not event get into the deep and rich features of firebase, but even with just scratching the surface I am really happy with my choice and convinced to recommend and use Firebase again, when it comes to small-scale webapplications or prototyping. Heres my simple stack:
![Stack](/static/postimg/wannistalexdiagram.jpg)

# The features

For the features of the app, I implemented the following:
- Table, that shows all bets with its respective slots, bettors and tokens
- Dialoge to edit or add bets
- Table showing all bettors and their total amounts of tokens betted
- Plot showing the distributions of all bets over the course of the day
- The running time, when there was no arrival
- The active slot, otherwise the arrival-slot
- Animation, showing the previous, then current and the next winner, should the worker arrive in the current slot, otherwise todays winner
- A button that should be pressed, when the worker arrives, disabling betting and showing the winner on all clients

Here you can see the final result:
![Screenshot](https://user-images.githubusercontent.com/33640025/86590794-94bf9200-bf90-11ea-8a89-f9f00c7f7e5b.png)

Check out the [live-app](https://wannistalex.yannickspoerl.de) or check out the project [on GitHub](https://github.com/YannickSpoerl/wannistalex).
