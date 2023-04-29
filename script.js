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

// document.addEventListener('keydown', (event) => {
//     keyboard.push(event.key)
//     console.log(keyboard)
// })

keyboard.forEach((key) => {
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
        keyElement.textContent = 'Caps';
    } else if (key === 'Enter') {
        keyElement.classList.add('key_enter');
    } else if (key === 'Shift') {
        keyElement.classList.add('key_shift-left');
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
