// Criei em 5 lugar

import * as el from './elemments.js'
import state from './state.js'
import * as timer from './timer.js'
import { toggleAudio, forest, rain, coffeeshop, fire } from './sounds.js';

export function toggleRunning() {
    state.isRunning = !state.isRunning
    timer.countdown()
}

export function toggleStop() {
    state.isRunning = false
    timer.updateDisplay()
}

export function increase() {
    let minutes = Number(el.minutes.textContent);
    minutes += 5;
    el.minutes.textContent = String(minutes).padStart(2, "0");
}


export function decrease() {
    let minutes = Number(el.minutes.textContent);
    minutes -= 5;
    el.minutes.textContent = String(minutes).padStart(2, "0");
}

export function soundTree() {
    toggleAudio(forest);
}

export function soundRain() {
    toggleAudio(rain);
}

export function soundCoffee() {
    toggleAudio(coffeeshop);
}

export function soundFire() {
    toggleAudio(fire);
}

