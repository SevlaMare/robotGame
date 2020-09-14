# Robot vs Ninja
> A game where you can eliminate the ninjas, using a robot with massive destruction weapons.

![screenshot](doc/screenshot.png)

<br>This project was made to consolidate my knowledge with JS, and take a step ahead on game development world.<br>

## Content

* [Live Demo](#live-demo)
* [Requirements](#requirements)
* [Possible new features](possible-new-features)
* [Requisites](#built-with)
* [Built With](#built-with)
* [Game Design](#game-design)
* [Getting Start](#getting-start)
* [Contributing](#contributing)
* [Acknowledgments](#acknowledgments)
* [Author](#author)
* [License](#license)

## How to play
* Left and right keyboard arrows to move the robot.
* Up arrow to jump.
* Space bar to shoot the ninjas.
* Press any button to start the game on the start screen.
* Click in OK button to submit a score on game over screen.

## Live Demo
You can access a online version of this game at:<br>
https://robot-vs-ninja.netlify.app/

## Requirements
- [x] A game build with Phaser 
- [x] Leaderboard system using an API
- [x] Deployed and documented

## Possible new features
- Controls for mobile
- Pagination for scores
- Highlight player best score
- More content (Stages, actions, and animations)

## Requisites
* [A modern web browser](https://www.google.com/chrome/)
* [Node JS](https://nodejs.org/en/download/)
* [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)

## Built With

- Javascript<br>
- Phaser 3 (Game Engine)<br>
- HTML/CSS <br>
- Webpack and babel <br>
- JEST for tests <br>
- ESlint and Stylelint (Linters) <br>
- GitHub Actions (CI Tool) <br>
- Git, Github and VScode <br>

## Game Design

### Objective of the game
* Play until you reach the top 10

### Game Mechanics
* Shoot ninjas to earn points.
* Keep moving to avoid ninjas or is game over.

### Scope
* Kind: Shooter
* Platform: Desktop web browser
* Target: Build and deploy in 5 days, using free assets only.

### Schedule
#### Day 1 - Plan and setup
- [x] Design game
- [x] Execution plan
- [x] Follow tutorial
- [x] Look for examples

#### Prepare assets
- [x] Find source
- [x] Resize sprites
- [x] Create spreadsheets

#### Setup
- [x] Setup environment
- [x] Configurations
- [x] Files sctructure

#### Day 2 - Start development
##### Implementation
- [x] Draft start, game, and ending scenes
- [x] Setup to load assets and animations

#### Day 3 - Core game engine
- [x] Player movement
- [x] Player shoot
- [x] Enemy generator
- [x] Score system

#### Day 4 - Documentation and API
- [x] Read API docs
- [x] fetch data from API
- [x] Integrates with API to submit scores
- [x] Write unit tests

#### Day 5 - Polish and Deploy
- [x] Deploy
- [x] Basic documentation

## Getting Start

#### Get a local copy
Now you need a copy of this application, if you are using Git:
```js
git clone git@github.com:SevlaMare/robotGame.git
```
Otherwise just hit (Download Zip) on green button (Code) at top of this page.

#### Open terminal
Open your terminal inside the game folder, and paste the following commands:

#### Download all dependencies
```js
npm install
```

#### Compile
```js
yarn build
```

#### Start the server
```js
yarn go
```

#### Go to a web browser (Like Google Chrome) and visit:
```js
localhost:7000
```

#### Run the tests
```js
yarn test
```

### Contributing

Contributions, issues and feature requests are welcome!

You can do it on [issues page](issues/).

## Acknowledgments

A special thanks for the code reviewers.

## Author

👤 **Thiago Miranda**

- Github: [@SevlaMare](https://github.com/SevlaMare)
- Twitter: [#SevlaMare](https://twitter.com/SevlaMare)
- Linkedin: [SevlaMare](https://www.linkedin.com/in/sevla-mare)

### License
Sprites from gameart2d.com and cloud sprite from bevouliin.com

<strong>Creative Commons • 2020</strong>
