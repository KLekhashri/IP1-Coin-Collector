//I have included some sound, enemy and some platforms. It was easy to implement the sound. When the game character collects the coin, win or jump there will be a sound. When he hits the enemy, he will lose a life. Moreover, he can stand on the platform.
//I found difficulties in coding when doing a bit more advanced things such as implementing the platforms using the constructor function. Moreover, as I included more features in the game, there were too many codes so I had to be clear in doing the code as one affects the other. It may seem like I did the code perfectly, however, the result usually differs from what I expected. Lastly, I am still learning how to code efficiently.
//I learnt how to code constructor function and the factory pattern. I also learnt that coding requires lots of try and error. I learned using arrays are useful when coding for the same type of objects. Moreover, using "let" and "const" will help my code to be cleaner.

let gameChar_x;
let gameChar_y;
let gameChar_width;
const floorPos_y = (576 * 3) / 4;

let isLeft;
let isRight;
let isFalling;
let isPlummeting;

let collectables;
let canyons;
let clouds;
let trees;
let mountains;
let scrollPos;

let gameChar_world_x;
let gameState;
let newState;

let lives;
let game_score;
let flagpole;

let jumpSound;

const platforms = [];
let onPlatform;

let enemies;
let hitByEnemy;

function preload() {
  soundFormats("mp3");

  //   sound effect obtained from https://mixkit.co/free-sound-effects/game/?page=3 and https://pixabay.com/sound-effects/search/game/
  jumpSound = loadSound("assets/jump.mp3");
  jumpSound.setVolume(0.1);
  collectSound = loadSound("assets/collectcoin.mp3");
  collectSound.setVolume(0.1);
  //    fallSound= loadSound("assets/fall.mp3");
  //    fallSound.setVolume(0.1);
  winSound = loadSound("assets/win.mp3");
  winSound.setVolume(0.1);
  //    loseSound = loadSound("assets/gameover.mp3");
  //    loseSound.setVolume(0.1);
}

function setup() {
  createCanvas(1024, 576);
  gameState = 0;
  lives = 3;
  startGame();
}

function startGame() {
  gameChar_x = 30;
  gameChar_y = floorPos_y;
  gameChar_width = 50;

  game_score = 0;

  isLeft = false;
  isRight = false;
  isPlummeting = false;
  isFalling = false;
  onPlatform = false;
  hitByEnemy = false;
  scrollPos = 0;

  gameChar_world_x = gameChar_x - scrollPos;

  flagpole = { x_pos: 2000, isReached: false };

  canyons = [
    { x_pos: 800, width: 100 },
    { x_pos: 80, width: 100 },
    { x_pos: 600, width: 100 },
    { x_pos: 0, width: -1000 },
    { x_pos: 900, width: 100 },
  ];

  collectables = [
    { x_pos: 200, y_pos: floorPos_y, size: 30, isFound: false },
    { x_pos: 400, y_pos: floorPos_y, size: 30, isFound: false },
    { x_pos: 600, y_pos: floorPos_y, size: 30, isFound: false },
    { x_pos: 800, y_pos: floorPos_y, size: 30, isFound: false },
    { x_pos: 540, y_pos: 100, size: 30, isFound: false },
  ];

  platforms.push(createPlatform(200, floorPos_y - 100, 100));
  platforms.push(createPlatform(400, floorPos_y - 200, 100));
  platforms.push(createPlatform(600, floorPos_y - 100, 100));
  platforms.push(createPlatform(800, floorPos_y - 200, 100));

  enemies = [];
  enemies.push(new enemy(200, floorPos_y - 10, 100));
  enemies.push(new enemy(400, floorPos_y - 10, 100));
  enemies.push(new enemy(600, floorPos_y - 10, 100));
  enemies.push(new enemy(800, floorPos_y - 10, 100));

  //    collectables = [];
  //    initCollectables();

  mountains = [];
  initMountains();

  trees = [];
  initTrees();

  clouds = [];
  initClouds();
}

function draw() {
  ///////////DRAWING CODE//////////
  drawSky();
  drawGround();

  push();
  translate(scrollPos, 0);
  drawClouds();
  animateClouds();
  drawCanyons();
  checkIfGameCharFallIntoCanyon();
  checkIfGameCharInContactWithEnemies();
  drawMountains();
  drawTrees();
  drawCollectables();
  collectCollectables();
  drawFlagpole();
  checkFlagpole();
  drawPlatforms();
  drawEnemies();
  pop();

  drawLifeTokens();
  drawGameScore();

  //the game character
  drawGameChar();

  ///////////INTERACTION CODE//////////
  //Put conditional statements to move the game character below here

  if (checkIsGameOver()) {
    drawGameOver();
    return;
  }

  if (isPlummeting == true) {
    gameChar_y += 10;
    checkPlayerDie();
    return;
  }

  if (gameChar_y < floorPos_y) {
    isFalling = true;
  } else {
    isFalling = false;
  }

  if (isLeft == true) {
    if (gameChar_x > width * 0.1) {
      gameChar_x -= 5;
    } else {
      scrollPos += 5;
    }
  } else if (isRight == true) {
    if (gameChar_x < width * 0.1) {
      gameChar_x += 5;
    } else {
      //negative for moving against the background
      scrollPos -= 5;
    }
  }

  checkIfCharIsUnderAnyPlatforms();
  //Update real position of gameChar for collision detection.
  gameChar_world_x = gameChar_x - scrollPos;

  if (gameState == 0) {
    text("Press any key to start", width / 2, height / 2);
  }

  text("lives:" + lives, 30, 50);
}

function keyPressed() {
  // if statements to control the animation of the character when
  // keys are pressed.

  //open up the console to see how these work
  console.log("keyPressed: " + key);
  console.log("keyPressed: " + keyCode);

  if (keyCode == 37 || keyCode == 65) {
    console.log("left arrow");
    isLeft = true;
  } else if (keyCode == 39 || keyCode == 68) {
    console.log("right arrow");
    isRight = true;
  } else if (keyCode == 38 || keyCode == 87) {
    //ensure that the character only jump when it is touching the ground
    if (gameChar_y >= floorPos_y || onPlatform) {
      console.log("up arrow");
      gameChar_y -= 150;
      jumpSound.play();
    }
  }

  gameState = newState;
  if (gameState == 0) {
    newState = 1;
  }
}

function keyReleased() {
  // if statements to control the animation of the character when
  // keys are released.

  console.log("keyReleased: " + key);
  console.log("keyReleased: " + keyCode);

  if (keyCode == 37 || keyCode == 65) {
    console.log("left arrow");
    isLeft = false;
  } else if (keyCode == 39 || keyCode == 68) {
    console.log("right arrow");
    isRight = false;
  }
}
