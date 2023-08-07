// Criei em 3 lugar

import { controlSound, controls, soundButtons } from "./elemments.js";
import * as actions from './actions.js'

export function registerControls() {
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        
        if (typeof actions[action]() != "function") {
            return
        }

        actions[action]()
    })

    controlSound.addEventListener('click', (event) => {
        const action = event.target.dataset.action;
        if (action === undefined) {
            return;
        }

        actions[action]();
    });

    soundButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Verifica se o botão já tem a classe 'clicked'
            if (button.classList.contains('clicked')) {
                button.classList.remove('clicked'); // Remove a classe
            } else {
                // Remove a classe 'clicked' de todos os botões
                soundButtons.forEach(btn => btn.classList.remove('clicked'));
                button.classList.add('clicked'); // Adiciona a classe ao botão clicado
            }
        });
    });
}