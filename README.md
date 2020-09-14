# TypeReact
Progressive game-based web application in which a user types random letters displayed on the screen as soon as possible.

Link to a deployed version: https://type-react.web.app/

## How to run the app
1. Fork or download the project
2. Install the dependencies using the `npm i` command
3. Start the web server using the `npm start` command and go to http://localhost:3000/ on your browser

## Features
- Gameplay
  - the interface is locked while playing a game
  - on mobile keyboard pops up automatically
  
- Settings
  - a user can set up their gameplay by changing the number of letters or a game speed
  - settings are stored in Redux so they stay the same unless a user refreshes the app

- Leaderboard
  - if your score is good enough to be on the leaderboard you will get a popup after a finished run to submit it
  - the app keeps track of mobile and non-mobile scores separately so you can view both leaderboards
  
- PWA
  - the app will save your score even if you are offline and submit it once you go online again
  - you get a popup to install the app on mobile
  
## Future features
- Loading screens
- UX - more info for the user about the actions that have been done

## Dependencies
- React
- react-router
- Redux
- redux-thunk
- Firebase
