const pressed = [];
const konami = 'unicorn';

window.addEventListener('keyup',(e) => {
    pressed.push(e.key);
    pressed.splice(-konami.lenght - 1, pressed.length - konami.length);
    if (pressed.join('').includes(konami)){
        console.log('Konami = unicorn');
        cornify_add();
    }
});