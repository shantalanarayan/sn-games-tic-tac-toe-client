# Tic-Tac-Toe game

## Introduction

This is my first project. A game of tic-tac-toe(X-O-X).

## Objectives

To allow authorized user to play a tic-tac-toe game using a Single Page Application. This application shall allow users to sign up for a new account. It shall allow users to sign-in to their account and start a new game. All games played by the signed-in user shall be saved in the backend. Games statistics shall be available on successful sign-in.

## Planning and strategies

### Planning
* All planning frequently followed [game-project requirements](https://git.generalassemb.ly/ga-wdi-boston/game-project/blob/master/requirements.md) provided by GA.
* I started of with creating user stories based on above requirements and jotted them down on sticky notes.
* Later, I created wireframes and designed an high-level look and feel for the application.
* Both user-stories and wireframes were edited and adjusted as I progressed along.

### Strategies used
* Studies and projects covered at GA were used as guidelines and referenced whenever I got stuck. For example: all api functionality implemented, used api-token-auth and jquery-ajax-crud as examples.
* For html look and feel followed examples and instructions provided by [Bootstrap 4 documentation](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
* Development was done in smaller chunks i.e., 1 user story or 1 functionality at a time.
* At every incremental step
  - ran `grunt nag` to validate code standards.
  - unit tested using `grunt serve` and checking for errors in browser console.
  - Would log data to console to see the object returned from server; it's structure and properties.
  - All incremental changes were frequently committed and pushed to github to save the work.
* When stuck, got help from peers and instructors.
* Frequently incorporated peer/instructor review feedback.

## Technologies Used

1. Html
2. CSS
3. JavaScript
4. cURL
5. Ajax
6. JSON
7. JQuery
8. Bootstrap 4
9. NPM
10. Grunt


## User stories
![ root > user-stories > UserStories.png](https://github.com/shantalanarayan/sn-games-tic-tac-toe-client/blob/master/user-stories/UserStories.png)

## Unsolved Problems
* Display in-progress games list
* Display completed games list
* Allow user to click an in-progress game and continue
* Play against computer
* Implement multiplayer version
