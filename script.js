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

// ---------- State ----------
// State variables are the parts of your program that change over time.
// For example: where the pointer is, how fast it's moving, or whether a drone is on.
let randomColor1 = Math.floor(Math.random () * 400) + 1;
let randomColor2 = Math.floor(Math.random () * 250) + 1;
let randomColor3 = Math.floor(Math.random () * 70) + 1;
const randomNote = ["D1", "E4", "E3", "D4", "A3", "A4", "B3", "F2", "G4"]
const duration   = ["8n", "8n", "8n", "20n", "16n", "10n", "8n", "12n", "8n"]
let counter = Math.floor(Math.random () * 8) + 1;
let position1Shape = 0.1;
let position2Shape = 0.1;

const shape = createShape()
shape.setSize(250);
shape.setRoundedness(0.2)
shape.setColour(245, 400, 20)

// ---------- Sound ----------
// Make the instruments and plug them into the speakers.
const synth = new Tone.PolySynth(Tone.Synth).toDestination(); // can play several notes at once

// ---------- Update ----------
// Update the state. This is called every 100ms.
function update() {
  setTimeout(update, 100); // call update() again in 100 milliseconds
}

console.log(randomColor1, randomColor2, randomColor3);

function pointerEnter(event) {
  synth.triggerAttackRelease(randomNote[counter], duration[counter]);
  shape.setColour(randomColor1, randomColor2, randomColor3);
  randomColor1 = Math.floor(Math.random () * 400) + 1;
  randomColor2 = Math.floor(Math.random () * 200) + 1;
  randomColor3 = Math.floor(Math.random () * 70) + 1;
  shape.setPosition(position1Shape, position2Shape)
  position1Shape = position1Shape + 0.1;
  position2Shape = position2Shape + 0.1;
  console.log("The settings for the color for the circle are ", randomColor1, randomColor2, randomColor3);
  counter = Math.floor(Math.random () * 8) + 1;
  console.log(randomNote[counter], duration[counter]);
if (position1Shape > 0.9) {
    position1Shape = 0.1
    console.log("The positions on x and y for the shape are: ", position1Shape, position2Shape)
  } else if (position2Shape > 0.9) {
    position2Shape = 0.1
    console.log("The positions on x and y for the shape are: ", position1Shape, position2Shape)
  }

}

//function pointerEnter(event) {
//  synth.triggerAttack("A3");
//  shape.setColour(200, 10, 40)
//}

//function pointerRelease(event) {
//  synth.triggerRelease("");
//  shape.setColour(200, 10, 40)
//}

// ---------- Use ----------
// Use the state to make sound and move shapes. This is called every 100ms.
function use() {
  setTimeout(use, 100); // call use() again in 100 milliseconds
}

// ---------- Controls (Event Handlers) ----------
// Runs every time the pointer goes down: a click, a tap or a pen touch.
function pointerDown(event) {
  Tone.start(); // browsers only allow sound after the player has pressed something

  console.log("Pointer down at", event.clientX, event.clientY);
  synth.triggerAttackRelease("G2", "16n"); // play the note for an eighth note
}

// ---------- Setup ----------
// Setup is run once, at the start of the program. It sets everything up for us!
function setup() {
  update(); // start the update loop
  use(); // start the use loop

  // Example: a shape near the middle of the window. Replace it with your own.
  const example = createShape("example");
  example.setPosition(0.4, 0.5);

  shape.element.addEventListener("pointerup", pointerEnter);
  example.element.addEventListener("pointerup", pointerDown);
}

setup(); // Always remember to call setup()!
