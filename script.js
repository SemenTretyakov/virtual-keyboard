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

const navBtns = document.querySelector('.nav-btns');

body.prepend(container);
container.prepend(sectionTitle, textarea, keyboardWrapper);


const keyboard = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Meta',];
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
    } else if (key === 'ArrowUp') {
        keyElement.classList.add('key_nav');
        keyElement.innerHTML = '&uarr;';
    } else if (key === 'ArrowDown') {
        keyElement.classList.add('key_nav');
        keyElement.innerHTML = '&darr;';
    } else if (key === 'ArrowRight') {
        keyElement.classList.add('key_nav');
        keyElement.innerHTML = '&rarr;';
    } else if (key === 'Backspace') {
        keyElement.classList.add('key_backspace');
    } else if (key === 'Tab' || key === '\\') {
        keyElement.classList.add('key_slash-tab');
    } else if (key === 'CapsLock') {
        keyElement.classList.add('key_caps');
    } else if (key === 'Enter') {
        keyElement.classList.add('key_enter');
    } else if (key === 'Shift') {
        keyElement.classList.add('key_shift');
    } else if (key === 'Control') {
        keyElement.classList.add('key_ctrl');
        keyElement.textContent = 'Ctrl';
    } else if (key === 'Meta') {
        keyElement.classList.add('key_win');
        keyElement.textContent = 'Win';
    } else if (key === 'Alt') {
        keyElement.classList.add('key_alt');
    }
    keyboardWrapper.appendChild(keyElement);
})

const keys = document.querySelectorAll('.key');
const spaceKey = document.querySelector('.key_space');
const shift_left = document.querySelector('.key_shift');
const shift_right = document.querySelector('.key_shift-right');
const caps_lock_key = document.querySelector('.key_caps');
const text_input = document.querySelector('.text');

keys.forEach((key) => {
    key.setAttribute('keyname', key.innerText);
    key.setAttribute('lowerCaseName', key.innerText.toLowerCase());
})

document.addEventListener('keydown', (event) => {
    keys.forEach((key) => {
        if (event.key === key.getAttribute('keyname') || event.key === key.getAttribute('lowerCaseName')) {
            key.classList.add('key_active')
        }
        if (event.code === 'Space') {
            spaceKey.classList.add('key_active')
        }
        if (event.code === 'Shift') {
            shift_right.classList.remove('key_active')
        }
        if (event.code === 'Capslock') {
            caps_lock_key.classList.toggle('key_active');
        }
    })
})

document.addEventListener('keyup', function(event) {
    keys.forEach((key) => {
        if (event.key === key.getAttribute('keyname') || event.key === key.getAttribute('lowerCaseName')) {
            key.classList.remove('key_active')
            key.classList.add('remove')
        }
        if (event.code === 'Space') {
            spaceKey.classList.remove('key_active');
            spaceKey.classList.add('remove');
        }
        if (event.code === 'Shift') {
            shift_right.classList.remove('key_active')
            shift_right.classList.remove('remove')
        }
        setTimeout(() => {
            key.classList.remove('remove')
        }, 250)
    })
})

keys.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        keys.forEach((btn) => {
            btn.classList.remove('key_active');
        });
        const { target } = event;
        const targetClos = target.closest('.key');
        targetClos.classList.add('key_active');
        text_input.append(targetClos.textContent);
    })
})
