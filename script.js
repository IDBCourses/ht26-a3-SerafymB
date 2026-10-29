/*
 * IDB Programming: A3 — a musical instrument
 *
 * All of the code for your instrument goes in this file. It's split into sections:
 *   settings — the "fixed" parts of your program
 *   state    — the parts of your program that change over time
 *   sound    — the Tone.js instruments and effects
 *   update   — updates the state every 100ms, if necessary
 *   use      — uses the state to make sound and shapes every 100ms, if necessary
 *   controls — what happens when the player uses the pointer
 *   setup    — starts everything
 *
 * The pointer events change the state. update() and use() each run every
 * 100ms, in a loop:
 *   1. update: change the state, e.g. based on time or on the pointer's movement
 *   2. use:    make sound and move shapes, based on the state
 *
 * Shapes come from shape.js: createShape() makes one, and its methods
 * (setPosition, setSize, setColour ...) change it.
 *
 * Tone.js documentation: https://tonejs.github.io/docs/15.1.22/
 */

import { createShape } from "./shape.js";

// ---------- Settings ----------
// Settings variables should contain all of the "fixed" parts of your programs
// For example: which notes you can play, how fast things move, the tempo.
const note = "C4"; // the note played when the pointer goes down
const randomNote = ["D", "E", "B", "D", "A", "F#", "C", "F", "G"];
const duration   = ["8n", "8n", "8n", "20n", "16n", "10n", "8n", "12n", "8n"];

// ---------- State ----------
// State variables are the parts of your program that change over time.
// For example: where the pointer is, how fast it's moving, or whether a drone is on.
let randomColor1 = Math.floor(Math.random () * 400) + 1;
let randomColor2 = Math.floor(Math.random () * 250) + 1;
let randomColor3 = Math.floor(Math.random () * 70) + 1;
let enteredCircle = [];
let leftCircle = [];
let counter2 = 0;
let octave1 = 4;
let counter = Math.floor(Math.random () * 8) + 1;

let octave2 = 4;
let octave = 4;
let timeEnter = [];
let timeLeave = [];
let latestX = 0;
let latestY = 0;
let lasttime = [];

let realGap = 0;
let EnTeR = false;

 let amountOfClicks = [];

let position1Shape = 0.7;
let position2Shape = 0.3;

const shape = createShape()
shape.setSize(50);
shape.setRoundedness(0.2);
shape.setColour(245, 400, 20);
shape.setRotation(250);

// PUMCIN

const pumpaBackgroud = createShape();
pumpaBackgroud.setSize(630);
pumpaBackgroud.setRoundedness(0.5);
pumpaBackgroud.setColour(34, 250, 70);
pumpaBackgroud.setPosition(0.31, 0.075);

const pumpa = createShape();
pumpa.setSize(600);
pumpa.setRoundedness(0.5);
pumpa.setColour(34, 250, 50);
pumpa.setPosition(0.33, 0.1);

// EYES

const partOfAnEye = createShape()
partOfAnEye.setSize(60);
partOfAnEye.setRoundedness(0);
partOfAnEye.setColour(140, 90, 0);
partOfAnEye.setPosition(0.44, 0.3);

const partOfAnEye2 = createShape()
partOfAnEye2.setSize(60);
partOfAnEye2.setRoundedness(0);
partOfAnEye2.setColour(140, 90, 0);
partOfAnEye2.setPosition(0.63, 0.3);

const InnerEye = createShape()
InnerEye.setSize(20);
InnerEye.setRoundedness(0.1);
InnerEye.setColour(140, 90, 50);
InnerEye.setPosition(0.46, 0.36);

const InnerEye2 = createShape()
InnerEye2.setSize(20);
InnerEye2.setRoundedness(0.1);
InnerEye2.setColour(140, 90, 50);
InnerEye2.setPosition(0.65, 0.36);

// NOSE

const nosePart1 = createShape()
nosePart1.setSize(44);
nosePart1.setRoundedness(0.1);
nosePart1.setColour(210, 40, 0);
nosePart1.setPosition(0.53, 0.48);
nosePart1.setRotation(137);

const nosePart2 = createShape()
nosePart2.setSize(44);
nosePart2.setRoundedness(0.1);
nosePart2.setColour(140, 90, 0);
nosePart2.setPosition(0.56, 0.48);
nosePart2.setRotation(300);

const nosePart3 = createShape()
nosePart3.setSize(54);
nosePart3.setRoundedness(0.1);
nosePart3.setColour(140, 90, 0);
nosePart3.setPosition(0.54, 0.42);
nosePart3.setRotation(90);

// MOUTH

//RIGHT
const mouthPart1 = createShape()
mouthPart1.setPosition(0.56, 0.67);

const mouthPart2 = createShape()
mouthPart2.setPosition(0.60, 0.63);

const mouthPart3 = createShape()
mouthPart3.setPosition(0.64, 0.67);

const mouthPart4 = createShape()
mouthPart4.setPosition(0.67, 0.63);

const mouthPart5 = createShape()
mouthPart5.setPosition(0.69, 0.57);

const mouthPart6 = createShape()
mouthPart6.setPosition(0.71, 0.51);
// LEFT

const mouthPart7 = createShape()
mouthPart7.setPosition(0.54, 0.67);

const mouthPart8 = createShape()
mouthPart8.setPosition(0.5, 0.63);

const mouthPart9 = createShape()
mouthPart9.setPosition(0.46, 0.67);

const mouthPart11 = createShape()
mouthPart11.setPosition(0.42, 0.63);

const mouthPart12 = createShape()
mouthPart12.setPosition(0.4, 0.57);

const mouthPart13 = createShape()
mouthPart13.setPosition(0.38, 0.51);

// ChasePointer

let chagneRotation = 250;

const jump = createShape()
jump.setColour(245, 400, 20);
jump.setPosition(0.38, 0.51);

const jump2 = createShape()
jump2.setColour(245, 400, 20);
jump2.setPosition(0.38, 0.51);

const jump3 = createShape()
jump3.setColour(245, 400, 20);
jump3.setPosition(0.38, 0.51);

const jump4 = createShape()
jump4.setColour(245, 400, 20);
jump4.setPosition(0.38, 0.51);

const jump5 = createShape()
jump5.setColour(245, 400, 20);
jump5.setPosition(0.38, 0.51);

const jump6 = createShape()
jump6.setColour(245, 400, 20);
jump6.setPosition(0.38, 0.51);

const jump7 = createShape()
jump7.setColour(245, 400, 20);
jump7.setPosition(0.38, 0.51);

const jump8 = createShape()
jump8.setColour(245, 400, 20);
jump8.setPosition(0.38, 0.51);

const jump9 = createShape()
jump9.setColour(245, 400, 20);
jump9.setPosition(0.38, 0.51);

const jump10 = createShape()
jump10.setColour(245, 400, 20);
jump10.setPosition(0.38, 0.51);

const jump11 = createShape()
jump11.setColour(245, 400, 20);
jump11.setPosition(0.38, 0.51);

const jump12 = createShape()
jump12.setColour(245, 400, 20);
jump12.setPosition(0.38, 0.51);

const jump13 = createShape()
jump13.setColour(245, 400, 20);
jump13.setPosition(0.38, 0.51);

const jump14 = createShape()
jump14.setColour(245, 400, 20);
jump14.setPosition(0.38, 0.51);

const jump15 = createShape()
jump15.setColour(245, 400, 20);
jump15.setPosition(0.38, 0.51);

const jump16 = createShape()
jump16.setColour(245, 400, 20);
jump16.setPosition(0.38, 0.51);

const jump17 = createShape()
jump17.setColour(245, 400, 20);
jump17.setPosition(0.38, 0.51);

let arrayOfMouthParts = [
  mouthPart1, mouthPart2, mouthPart3,
  mouthPart4, mouthPart5, mouthPart6,
  mouthPart7, mouthPart8, mouthPart9,
  mouthPart11, mouthPart12, mouthPart13
]

let arrayOfJumpShapes = [jump, jump2, jump3, jump4, jump5, jump6,
  jump7, jump8, jump9, jump10, jump11, jump12, jump13,
   jump14, jump15, jump16, jump17]

     let partsOfTheHat = [shape
  ];

function shortenTheAmountOfCode(event){
for (let i = 0; i < arrayOfJumpShapes.length; i++) {
   let whichOne = arrayOfJumpShapes[i]
   whichOne.setSize(30);
   whichOne.setRoundedness(0.2);
 }
 for (let i = 0; i < arrayOfMouthParts.length; i++) {
   let whichOne2 = arrayOfMouthParts[i]
   whichOne2.setSize(35);
   whichOne2.setRoundedness(0.1);
   whichOne2.setColour(140, 90, 0);
   whichOne2.setRotation(0);
 }
      }

const octaveee = createShape()
octaveee.setSize(130);
octaveee.setRoundedness(0.2);
octaveee.setColour(360, 200, 60);
octaveee.setRotation(250);
octaveee.setPosition(0.2, 0.1);

// ---------- Sound ----------
// Make the instruments and plug them into the speakers.
const synth = new Tone.PolySynth(Tone.Syth).toDestination(); // can play several notes at once
const mono = new Tone.MonoSynth().toDestination();
const favoritSynth = new Tone.AMSynth().toDestination();


// ---------- Update ----------
// Update the state. This is called every 100ms.
function update() {
  setTimeout(update, 100); // call update() again in 100 milliseconds
}

function chase(event) {
  let normalX = event.clientX / window.innerWidth;
  let normalY = event.clientY /window.innerHeight;
  latestX = normalX;
  latestY = normalY;

  jump.setPosition(latestX - 0.025, latestY - 0.09);
  jump2.setPosition(latestX, latestY - 0.08);
  jump2.setColour(0,0,0);
  jump3.setPosition(latestX + 0.025, latestY - 0.07);
  jump3.setColour(360,90,60);
  jump4.setPosition(latestX + 0.050, latestY - 0.05);
  jump4.setColour(130,90,60);
  jump5.setPosition(latestX - 0.003, latestY + 0.08);
  jump6.setPosition(latestX - 0.028, latestY + 0.06);
  jump7.setPosition(latestX - 0.050, latestY + 0.029);
  jump8.setColour(222,90,0);
  jump8.setPosition(latestX - 0.072, latestY - 0.0025);
  jump7.setColour(10,90,60);
  jump9.setPosition(latestX - 0.067, latestY - 0.07);
  jump10.setPosition(latestX - 0.047, latestY - 0.09);
  jump11.setPosition(latestX - 0.086, latestY - 0.04);
  jump11.setColour(265,90,60);
  jump12.setPosition(latestX + 0.019, latestY + 0.09);
  jump13.setPosition(latestX + 0.070, latestY - 0.019);
  jump14.setPosition(latestX + 0.086, latestY + 0.016);

  jump15.setPosition(latestX + 0.082, latestY + 0.066);
  jump15.setColour(156,90,60);
  jump16.setPosition(latestX + 0.063, latestY + 0.099);
  jump17.setPosition(latestX + 0.043, latestY + 0.1);
}

function rotate(event) {
  chagneRotation = chagneRotation + 19;
  if (chagneRotation > 359) {
    chagneRotation
  }
       for (let i = 0; i < arrayOfJumpShapes.length; i++) {
   let whatShapeShoudlIRotate = arrayOfJumpShapes[i]
   whatShapeShoudlIRotate.setRotation(chagneRotation)
       }
}

function changeOctaveEnter(event) {
  timeEnter.push(Date.now());

  if (timeEnter.length > 1) {
    timeEnter.shift()
  }

  if (EnTeR === false) {
    EnTeR = true;
  }

  console.log("entered at: " + timeEnter[0])
}

function changeOctaveLeave(event) {
  timeLeave.push(Date.now());

  if (timeLeave.length > 1) {
    timeLeave.shift()
  }

  console.log("left at: " + timeLeave[0]);
}

function calculateOctave(event) {
  realGap = timeLeave[0] - timeEnter[0]; // ms

  console.log("Real gap is: " + realGap);
  console.log("Entered at: " + timeEnter[0], " and left at: " + timeLeave[0]);

  octave2 = realGap / 1000;
  console.log("Seconds: " + octave2);
  octave = Math.floor(octave2 * 10);
   if (octave === NaN) {
    octave = 5
  } else if (octave > 10) {
    octave = 9;
  } else if (octave === NaN) {
    octave = 7;
  }
  lasttime.push(octave);
  if (lasttime.length > 1) {
    lasttime.shift();
  }
  console.log("Current Octave is: " + lasttime[0])
}

// ---------- Use ----------
// Use the state to make sound and move shapes. This is called every 100ms.
function use() {
  setTimeout(use, 100); // call use() again in 100 milliseconds
}

// ---------- Controls (Event Handlers) ----------
// Runs every time the pointer goes down: a click, a tap or a pen touch.
function pointerEnter(event) { // browsers only allow sound after the player has pressed something
mono.triggerAttack("B" + octave1);
enteredCircle.push(counter2);
counter2++
console.log(enteredCircle);

  if (enteredCircle.length >= 5) {
  octave1 = octave1 + 1;
  console.log("The current octave is: " + octave1);
  }
}

function pointerLeave(event) {
mono.triggerRelease();
leftCircle.push(counter2)
counter++
console.log("You have left the circle " + leftCircle.length + " times.")
console.log(leftCircle);

 if (octave1 > 6) {
   octave1 = 3
  }

  if (leftCircle.length > 10) {
    InnerEye.setColour(0, 90, 50);
    InnerEye2.setColour(0, 90, 50);
  }
}

function play1(event) {
  synth.triggerAttackRelease("E3", "20n", Tone.now());
}

function play2(event) {
  synth.triggerAttackRelease("B4", "20n", Tone.now());
}

function play3(event) {
  synth.triggerAttackRelease("E3", "20n", Tone.now());
}

function play4(event) {
  synth.triggerAttackRelease("B4", "20n", Tone.now());
}

function play5(event) {
  synth.triggerAttackRelease("E2", "20n", Tone.now());
}

function play6(event) {
  synth.triggerAttackRelease("E3", "20n", Tone.now());
}

function play7(event) {
  synth.triggerAttackRelease("C4", "20n", Tone.now());
}

function play8(event) {
  synth.triggerAttackRelease("C5", "20n", Tone.now());
}

function play9(event) {
  synth.triggerAttackRelease("B4", "20n", Tone.now());
}

function play10(event) {
  synth.triggerAttackRelease("E2", "20n", Tone.now());
}

function play11(event) {
  synth.triggerAttackRelease("E3", "20n", Tone.now());
}

function play12(event) {
  synth.triggerAttackRelease("A4", "20n", Tone.now());
}

function pointerClick(event) {

  counter = Math.floor(Math.random () * 8) + 1;
  console.log(randomNote[counter] + octave1, duration[counter]);
  favoritSynth.triggerAttackRelease(randomNote[counter] + octave1, duration[counter]);

  shape.setColour(randomColor1, randomColor2, randomColor3);
  randomColor1 = Math.floor(Math.random () * 400) + 1;
  randomColor2 = Math.floor(Math.random () * 200) + 1;
  randomColor3 = Math.floor(Math.random () * 70) + 1;

  //shape.setPosition(position1Shape, position2Shape)
  //position1Shape = position1Shape + 0.1;
  //position2Shape = position2Shape + 0.1;
  //console.log("The settings for the color for the circle are ", randomColor1, randomColor2, randomColor3);

  //if (position1Shape > 0.9) {
  //  position1Shape = 0.2
  //  console.log("The positions on x and y for the shape are: ", position1Shape, position2Shape)
  //} else if (position2Shape > 0.9) {
  //  position2Shape = 0.3
  //  console.log("The positions on x and y for the shape are: ", position1Shape, position2Shape)
  //}
  }

  function showTheHat(event) {

    for (let index = 0; index < partsOfTheHat.length; index++) {
      console.log(partsOfTheHat[index]);
        partsOfTheHat[index].setSize(60);
        partsOfTheHat[index].setRoundedness(0.2);
        partsOfTheHat[index].setColour(360, 200, 0);
        partsOfTheHat[index].setRotation(0);
       }

       amountOfClicks.push(1);
   if (amountOfClicks.length === 1) {
    const hat1 = createShape()
    partsOfTheHat.push(hat1);
    hat1.setPosition(0.33, 0.22);
   }

      if (amountOfClicks.length === 2) {
    const hat2 = createShape()
    partsOfTheHat.push(hat2);
    hat2.setPosition(0.38, 0.19);
   }

      if (amountOfClicks.length === 3) {
    const hat3 = createShape()
    partsOfTheHat.push(hat3);
    hat3.setPosition(0.43, 0.16);
   }

      if (amountOfClicks.length === 4) {
    const hat4 = createShape()
    partsOfTheHat.push(hat4);
    hat4.setPosition(0.48, 0.13);
   }

      if (amountOfClicks.length === 5) {
    const hat5 = createShape()
    partsOfTheHat.push(hat5);
    hat5.setPosition(0.53, 0.10);
   }

      if (amountOfClicks.length === 6) {
    const hat6 = createShape()
    partsOfTheHat.push(hat6);
    hat6.setPosition(0.58, 0.1);
   }

      if (amountOfClicks.length === 7) {
    const hat7 = createShape()
    partsOfTheHat.push(hat7);
    hat7.setPosition(0.63, 0.13);
   }

      if (amountOfClicks.length === 8) {
    const hat8 = createShape()
    partsOfTheHat.push(hat8);
    hat8.setPosition(0.68, 0.16);
   }

      if (amountOfClicks.length === 9) {
    const hat9 = createShape()
    partsOfTheHat.push(hat9);
    hat9.setPosition(0.73, 0.23);
   }

      if (amountOfClicks.length === 10) {
    const hat10 = createShape()
    partsOfTheHat.push(hat10);
    hat10.setPosition(0.408, 0.136);
   }

      if (amountOfClicks.length === 11) {
    const hat11 = createShape()
    partsOfTheHat.push(hat11);
    hat11.setPosition(0.625, 0.07);
   }

      if (amountOfClicks.length === 12) {
    const hat12 = createShape()
    partsOfTheHat.push(hat12);
    hat12.setPosition(0.45, 0.1);
   }

      if (amountOfClicks.length === 13) {
    const hat13 = createShape()
    partsOfTheHat.push(hat13);
    hat13.setPosition(0.50, 0.07);
   }

      if (amountOfClicks.length === 14) {
    const hat14 = createShape()
    partsOfTheHat.push(hat14);
    hat14.setPosition(0.56, 0.06);
   }

      if (amountOfClicks.length === 15) {
    const hat15 = createShape()
    partsOfTheHat.push(hat15);
    hat15.setPosition(0.56, 0);
   }

      if (amountOfClicks.length === 16) {
    const hat16 = createShape()
    partsOfTheHat.push(hat16);
    hat16.setPosition(0.72, 0.18);
   }

      if (amountOfClicks.length === 17) {
    const hat17 = createShape()
    partsOfTheHat.push(hat17);
    hat17.setPosition(0.35, 0.16);
   }

      if (amountOfClicks.length === 18) {
    const hat18 = createShape()
    partsOfTheHat.push(hat18);
    hat18.setPosition(0.67, 0.1);
   }

      if (amountOfClicks.length === 19) {
    const hat19 = createShape()
    partsOfTheHat.push(hat19);
    hat19.setSize(50, 100);
    hat19.setPosition(0.74, 0.318);
   }

      if (amountOfClicks.length === 20) {
    const hat20 = createShape()
    partsOfTheHat.push(hat20);
    hat20.setSize(50, 100);
    hat20.setPosition(0.333, 0.309);
   }

      if (amountOfClicks.length === 21) {
    const hat21 = createShape()
    partsOfTheHat.push(hat21);
    hat21.setSize(50, 100);
    hat21.setPosition(0.55, 0.18);
   }
  }

  //function playy(event) {
   // synth.triggerAttackRelease("E3", "20n", Tone.now());
   // synth.triggerAttackRelease("B4", "20n", Tone.now() + 0.3);
   // synth.triggerAttackRelease("E3", "20n", Tone.now() + 0.6);
   // synth.triggerAttackRelease("B4", "20n", Tone.now() + 0.9);

   // synth.triggerAttackRelease("E2", "20n", Tone.now() + 1.2);
    //synth.triggerAttackRelease("E3", "20n", Tone.now() + 1.5);
  //  synth.triggerAttackRelease("C4", "20n", Tone.now() + 1.8);

    //synth.triggerAttackRelease("C5", "20n", Tone.now() + 2.1);
    //synth.triggerAttackRelease("B4", "20n", Tone.now() + 2.4);
    //synth.triggerAttackRelease("E2", "20n", Tone.now() + 2.7);
   // synth.triggerAttackRelease("E3", "20n", Tone.now() + 3.0);
   // synth.triggerAttackRelease("A4", "20n", Tone.now() + 3.3);

   // synth.triggerAttackRelease("B2", "20n", Tone.now() + 3.6);
   // synth.triggerAttackRelease("G3", "20n", Tone.now() + 3.9);
   // synth.triggerAttackRelease("G2", "20n", Tone.now() + 4.2);
  //  synth.triggerAttackRelease("E2", "20n", Tone.now() + 4.5);
   // synth.triggerAttackRelease("E3", "20n", Tone.now() + 4.8);
   // synth.triggerAttackRelease("E4", "20n", Tone.now() + 5.1);
   // synth.triggerAttackRelease("F4", "20n", Tone.now() + 5.4);

  //shape.setPosition(position1Shape, position2Shape)
 // position1Shape = position1Shape + 0.1;
 // position2Shape = position2Shape + 0.1;
 // console.log("The settings for the color for the circle are ", randomColor1, randomColor2, randomColor3);

//if (position1Shape > 0.9) {
  //  position1Shape = 0.2
  //  console.log("The positions on x and y for the shape are: ", position1Shape, position2Shape)
 // } else if (position2Shape > 0.9) {
 //   position2Shape = 0.3
 //   console.log("The positions on x and y for the shape are: ", position1Shape, position2Shape)
//  }
//}

//function randomNoteMono(event) {
//  counter = Math.floor(Math.random () * 8) + 1;
//  console.log(randomNote[counter], duration[counter]);
 // mono.triggerAttackRelease(randomNote[counter], duration[counter]);
//}

//function randomNoteSynth(event) {
//  counter = Math.floor(Math.random () * 8) + 1;
//  console.log(randomNote[counter], duration[counter]);
//  synth.triggerAttackRelease(randomNote[counter], duration[counter]);
//}

function playANoteNose(event) {
   synth.triggerAttackRelease("E4", "8n");
}

function playANoteNose2(event) {
   synth.triggerAttackRelease("E3", "8n");
}

function playANoteNose3(event) {
   mono.triggerAttackRelease("E4", "8n");
}

function playEye(event) {
  if (EnTeR === true) {
  let numberRandom = Math.floor(Math.random () * 8) + 1;
  console.log(randomNote[numberRandom] + octave, "20n");
  synth.triggerAttackRelease(randomNote[numberRandom] + lasttime[0], "20n", Tone.now())
  }
}

//function positions(event) {
//console.log("Pointer down at", event.clientX, event.clientY);
//}

// ---------- Setup ----------
// Setup is run once, at the start of the program. It sets everything up for us!
function setup() {
  update(); // start the update loop
  use(); // start the use loop

  // Example: a shape near the middle of the window. Replace it with your own.
  const example = createShape("example");
  example.setPosition(0.1, 0.7);
  example.setSize(40, 200)

  window.addEventListener("pointermove", shortenTheAmountOfCode);

  shape.element.addEventListener("pointerdown", pointerClick);
  shape.element.addEventListener("pointerdown", showTheHat);

  example.element.addEventListener("pointerenter", pointerEnter);
  example.element.addEventListener("pointerleave", pointerLeave);

  nosePart1.element.addEventListener("pointerenter", playANoteNose2);
  nosePart2.element.addEventListener("pointerenter", playANoteNose3);
  nosePart3.element.addEventListener("pointerenter", playANoteNose);
  //pumpaBackgroud.element.addEventListener("pointerenter", randomNoteMono);

  partOfAnEye.element.addEventListener("pointerenter", playEye)
  InnerEye.element.addEventListener("pointerenter", playEye)

  partOfAnEye2.element.addEventListener("pointerenter", playEye)
  InnerEye2.element.addEventListener("pointerenter", playEye)

    window.addEventListener("pointermove", chase);
    window.addEventListener("pointermove", rotate);

    octaveee.element.addEventListener("pointerenter", changeOctaveEnter)
    octaveee.element.addEventListener("pointerleave", changeOctaveLeave)
    octaveee.element.addEventListener("pointerleave", calculateOctave)

  mouthPart13.element.addEventListener("pointerenter", play1)
  mouthPart12.element.addEventListener("pointerenter", play2)
  mouthPart11.element.addEventListener("pointerenter", play3)
  mouthPart9.element.addEventListener("pointerenter", play4)
  mouthPart8.element.addEventListener("pointerenter", play5)
  mouthPart7.element.addEventListener("pointerenter", play6)
  mouthPart1.element.addEventListener("pointerenter", play7)
  mouthPart2.element.addEventListener("pointerenter", play8)
  mouthPart3.element.addEventListener("pointerenter", play9)
  mouthPart4.element.addEventListener("pointerenter", play10)
  mouthPart5.element.addEventListener("pointerenter", play11)
  mouthPart6.element.addEventListener("pointerenter", play12)
}

setup(); // Always remember to call setup()!
