## Research and Planning log


|Time|Work/Research done|
|---|-----------|
|8:00am|Begin reading React Native documentation.|
|8:30am|Following the tutorial in the React Native documentation, create demo project using Expo CLI and view project on phone via Expo App.|
|9:00am|Begin reading Expo documentation.|
|10:00am|Continue reading Expo documentation.|
|10:45am|Begin work on practice React app, following tutorial from React Native documentation|
|11-12|Added custom component to react native app that displays differently depending on props passed to it, added state (a number) and a button that updates that state by incrementing it by one.|
|12:30pm|Begin work on Simon Says app|
|1:00pm|Added Simons Command component|
|1:30pm|Added Buttons Component|
|2:00pm|Simon Says is technically fully-playable, UI needs an overhaul, code is messy and needs refactoring, planning to add a high-score feature, also planning to overhaul the scoring system so that you get more points the faster you react, and can run out of time to react|
|3:00pm|Simon says UI overhauled|
|4:00pm|Scoring system reworked, longer reaction times = less points earned|

Day 2

|Time|Work/Research done|
|---|-----------|
|8:00am-8:30am|Refactor possible score timer|
|8:30am-9:45am|Research React Native game engines and frameworks|
|9:45am-11:00am|Create basic sketch of app UI|
|11:00am-12:00pm|Plan component structure and create component diagram|
|12:00pm-1:00pm|Research API's in react native (motion sensors among others) and brainstorm possible mini-game ideas|
|1:00pm-2:00pm|Refactor component planning and UI sketch|
|2:00pm-3:30pm|Refine component diagram, continue further react native study|
|3:30pm-4:30pm|Update sketch, diagram, and readme|

## Component Structure
  App
   -Splash
   -Game
    -Screen
    -Score
    -Controls
    -Mini game 1
     -Mini game 1 components
    -Mini game 2
     -Mini game 2 components
    -Mini game 3
     -mini game 3 components
    etc

## App formatting

  The UI of the app will be split into three main components; The 'screen' at the top, the players score bar in the middle that acts also as a visual divider, and the controls at the bottom that change depending on which mini game the user is playing.

  After each mini game, the 'screen' component will return to a sort of 'default' state, until the next game is started. During this period of time, the controls at the bottom of the screen will grey out while wiaitng for the next game to start.


## Mini-Game Ideas

* Simon says/color match
  Score X amount of points in Y amount of time
* Micro Minesweeper
  Solve a small minesweeper in X amount of time
* Mini Puzzle
  Drag puzzle pieces to the correct spots in X amount of time
* Speed tapping
  X amount of taps in Y amount of time
* Flappy bird
  Stay alive for X amount of time
* Timing game
  Tap an object at the precise time
* Typing game
  Type X amount of words in Y amount of time
* Crane game
  Move the crane claw to the correct position in X amount of time
* Maze game
  Drag finger through a maze in X amount of time
* Arkanoid game
  Stay alive for X amount of time
* Galaga/Space invaders
  Shoot all the ships in X amount of time
* Balancing game
  Balance an object for X amount of time
