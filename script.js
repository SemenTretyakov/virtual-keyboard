const body = document.querySelector('body');

const container = document.createElement('div');
container.className = 'container';

const sectionTitle = document.createElement('h1');
sectionTitle.className = 'section-title';
sectionTitle.textContent = 'Virtual Keyboard Online';

const keyboardWrapper = document.createElement('div');
keyboardWrapper.className = 'keyboard-wrapper';

const textarea = document.createElement('textarea');
textarea.className = 'text';

const textKeyboard = document.createElement('h2');
textKeyboard.className = 'text-info';
textKeyboard.textContent = 'Клавиатура создана в операционной системе Windows';

const textCombination = document.createElement('h2');
textCombination.className = 'text-info';
textCombination.textContent = 'Для переключения языка комбинация: левые shift + alt';

body.prepend(container);
container.prepend(sectionTitle, textarea, keyboardWrapper);
container.append(textKeyboard, textCombination)


const keyboard = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'ShiftLeft', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'AltLeft', ' ', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'MetaLeft',];
const keyboardUp = keyboard.map((letter) => {
    if (letter.length <= 1) {
        return letter.toUpperCase()
    } else {
        return letter
    }
    
})

// document.addEventListener('keydown', (event) => {
//     keyboard.push(event.key)
//     console.log(keyboard)
// })

keyboardUp.forEach((key) => {
    const keyElement = document.createElement('button');
    keyElement.textContent = key;
    keyElement.className = 'key key__text';
    keyElement.setAttribute('type', 'button');
    if (key === ' ') {
        keyElement.classList.add('key_space');
    } else if (key === 'ArrowLeft') {
        keyElement.classList.add('key_nav');
        keyElement.innerHTML = '&larr;';
        keyElement.dataset.arrow = 'left';
    } else if (key === 'ArrowUp') {
        keyElement.classList.add('key_nav');
        keyElement.innerHTML = '&uarr;';
        keyElement.dataset.arrow = 'up';
    } else if (key === 'ArrowDown') {
        keyElement.classList.add('key_nav');
        keyElement.innerHTML = '&darr;';
        keyElement.dataset.arrow = 'down';
    } else if (key === 'ArrowRight') {
        keyElement.classList.add('key_nav');
        keyElement.innerHTML = '&rarr;';
        keyElement.dataset.arrow = 'right';
    } else if (key === 'Backspace') {
        keyElement.classList.add('key_backspace');
    } else if (key === 'Tab' || key === '\\') {
        keyElement.classList.add('key_slash-tab');
    } else if (key === 'CapsLock') {
        keyElement.classList.add('key_caps');
    } else if (key === 'Enter') {
        keyElement.classList.add('key_enter');
    } else if (key === 'ShiftLeft' || key === 'ShiftRight') {
        keyElement.classList.add('key_shift');
        keyElement.textContent = 'Shift';
    } else if (key === 'ControlLeft') {
        keyElement.classList.add('key_ctrl');
        keyElement.textContent = 'Ctrl';
        keyElement.dataset.ctrl = 1;
    } else if (key === 'ControlRight') {
        keyElement.classList.add('key_ctrl');
        keyElement.textContent = 'Ctrl';
        keyElement.dataset.ctrl = 2;
    } else if (key === 'MetaLeft') {
        keyElement.classList.add('key_win');
        keyElement.textContent = 'Win';
    } else if (key === 'AltLeft') {
        keyElement.textContent = 'Alt';
        keyElement.classList.add('key_alt');
        keyElement.dataset.alt = 'left';
    } else if (key === 'AltRight') {
        keyElement.textContent = 'Alt';
        keyElement.classList.add('key_alt');
        keyElement.dataset.alt = 'right';
    }
    keyboardWrapper.appendChild(keyElement);
})

const keys = document.querySelectorAll('.key');
const spaceKey = document.querySelector('.key_space');
const caps_lock_key = document.querySelector('.key_caps');
const ctrlLeft = document.querySelector('[data-ctrl="1"]');
const ctrlRight = document.querySelector('[data-ctrl="2"]');
const arrowL = document.querySelector('[data-arrow="left"]');
const arrowR = document.querySelector('[data-arrow="right"]');
const arrowU = document.querySelector('[data-arrow="up"]');
const arrowD = document.querySelector('[data-arrow="down"]');
const altL = document.querySelector('[data-alt="left"]');
const altR = document.querySelector('[data-alt="right"]');
// const text_input = document.querySelector('.text');


keys.forEach((key) => {
    key.setAttribute('keyname', key.innerText);
    key.setAttribute('lowerCaseName', key.innerText.toLowerCase());
})

document.addEventListener('keydown', (event) => {
    keys.forEach((key) => {
        if (event.key === key.getAttribute('keyname') || event.key === key.getAttribute('lowerCaseName')) {
            key.classList.add('key_active')
        }
        else if (event.code === 'Space') {
            spaceKey.classList.add('key_active')
        } else if (event.code === 'ControlLeft') {
            ctrlLeft.classList.add('key_active')
        } else if (event.code === 'ControlRight') {
            ctrlRight.classList.add('key_active')
        } else if (event.code === 'Capslock') {
            caps_lock_key.classList.toggle('key_active');
        } else if (event.code === 'ArrowLeft') {
            arrowL.classList.add('key_active')
        } else if (event.code === 'ArrowUp') {
            arrowU.classList.add('key_active')
        } else if (event.code === 'ArrowDown') {
            arrowD.classList.add('key_active')
        } else if (event.code === 'ArrowRight') {
            arrowR.classList.add('key_active')
        } else if (event.code === 'AltLeft') {
            altL.classList.add('key_active')
        } else if (event.code === 'AltRight') {
            altR.classList.add('key_active')
        }
        
    })
})

document.addEventListener('keyup', (event) => {
    keys.forEach((key) => {
        if (event.key === key.getAttribute('keyname') || event.key === key.getAttribute('lowerCaseName') || event.key !== key.dataset.alt) {
            key.classList.remove('key_active');
        }
        else if (event.code === 'Space') {
            spaceKey.classList.remove('key_active');
        } else if (event.code === 'ControlLeft') {
            ctrlLeft.classList.remove('key_active')
        } else if (event.code === 'ControlRight') {
            ctrlRight.classList.remove('key_active')
        } else if (event.code === 'ArrowLeft') {
            arrowL.classList.remove('key_active')
        } else if (event.code === 'ArrowUp') {
            arrowU.classList.remove('key_active')
        } else if (event.code === 'ArrowDown') {
            arrowD.classList.remove('key_active')
        } else if (event.code === 'ArrowRight') {
            arrowR.classList.remove('key_active')
        } else if (event.code === 'AltLeft') {
            altL.classList.remove('key_active')
        } else if (event.code === 'AltRight') {
            altR.classList.remove('key_active')
        }
    })
})

// keys.forEach((btn) => {
//     btn.addEventListener('click', (event) => {
//         keys.forEach((btn) => {
//             btn.classList.remove('key_active');
//         });
//         const { target } = event;
//         const targetClos = target.closest('.key');
//         targetClos.classList.add('key_active');
//         if (targetClos.textContent !== 'Backspace' || targetClos.textContent !== 'Tab') {
//             text_input.append(targetClos.textContent);
//         }
//         if (targetClos.textContent === 'Backspace') {
//             const text = text_input.value;
//             text_input.value = text.substring(0, text.length - 1);
//         }
//     })
// })

