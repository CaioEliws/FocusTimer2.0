export const forest = new Audio('./assets/Floresta.wav')

export const rain = new Audio('./assets/Chuva.wav')

export const coffeeshop = new Audio('./assets/Cafeteria.wav')

export const fire = new Audio('./assets/Lareira.wav')

let currentAudio = null;

export function toggleAudio(audio) {
    if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    if (currentAudio !== audio) {
        audio.play();
        currentAudio = audio;
    } else {
        audio.pause();
        audio.currentTime = 0;
        currentAudio = null;
    }
}

forest.loop = true  
rain.loop = true
coffeeshop.loop = true
fire.loop = true