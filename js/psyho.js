const boxRef = document.querySelector('body');

window.addEventListener('mousemove', onMouseMoveChangeBgColorOnBody);

function onMouseMoveChangeBgColorOnBody() {
    boxRef.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
