# Campus Collaborate

## Description

An buisness and employement focused webapp built with Firebase, Node.js and React. This collaborative store enables three main different flows or implementations:

1. Create a profile of your own and showcase your projects and courses that you have undertaken to your peers.
2. View profile of others and gain insightful ideas by scouting thier project and courses.
3. Ask help from your peers by posting an ongoing project and allow others to complement it by thier skills building your dream work.
4. Ask help from the community on various domains by posting your doubt and resolve the bug.
5. Get reviews on different courses taken by the community and filer them according to their desire to make sure you pick the right one.
6. Actively contribute in others ongoing project if you match the complementary req skills by sending a collab request to the perticular developer.
7. After each contribution to the other projecta increase tour total contribution climb the Top Contributors leaderboard.
8. Anti-spamming feature is implemented using socket.io which sets a cooldown of 10s and same content can't be commented again.

- bugs:
- several similar comments can be seen on frontend in Askhelper page
- Since the server is deployed on render the cors error occurs for fetching some APIs but can be removed after refreshing the page.

- features:
  - Node provides the backend environment for this application
  - Express middleware is used to handle requests, routes
  - Firebase to model different entity
  - Firestore Cloud to store and images
  - React for displaying UI components
  - Redux to manage application's state
  - Redux Thunk middleware to handle asynchronous redux actions

## Quickstart Guide

Here is a guide on how to run this project.

Clone the repository

$ git clone https://github.com/Prakhar-g2003/SiangSoftware.git

```

Navigate to client and server and install the node packages used in the application by running


$ npm install
```


## Install

Some basic Git commands are:

```
$ git clone https://github.com/Prakhar-g2003/SiangSoftware.git
```

$ cd SiangSoftware
$ cd client
$ npm install

```

## Start development

```

$ npm run dev

```

## Simple build for production

```

$ npm run build

```

## Run build for production

```

$ npm start

````


## Languages & tools

- [Node](https://nodejs.org/en/)

- [Express](https://expressjs.com/en/5x/api.html)

- [Firebase](https://firebase.google.com/docs)

- [React](https://reactjs.org/)



### Code Formatter

- Add a `.vscode` directory
- Create a file `settings.json` inside `.vscode`
- Install Prettier - Code formatter in VSCode
- Add the following snippet:

```json

    {
      "editor.formatOnSave": true,
      "prettier.singleQuote": true,
      "prettier.arrowParens": "avoid",
      "prettier.jsxSingleQuote": true,
      "prettier.trailingComma": "none",
      "javascript.preferences.quoteStyle": "single",
    }

````
