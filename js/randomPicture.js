const bodyEl = document.querySelector('body');
const width = window.innerWidth;
const height = window.innerHeight;

const canvasCreateEl = `<canvas width="${width}" height="${height}"></canvas>`;

bodyEl.insertAdjacentHTML('afterbegin', canvasCreateEl);

const canvasEl = document.querySelector('canvas');
const can2d = canvasEl.getContext('2d');

for (let x = 0; x < width; x += 1) {
    for (let y = 0; y < height; y += 1) {
        can2d.beginPath();
        can2d.moveTo(x, y);
        can2d.lineTo(x + 1, y + 1);
        can2d.lineWidth = 1;
        can2d.strokeStyle = getRandomHexColor();
        can2d.stroke();
    }
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
