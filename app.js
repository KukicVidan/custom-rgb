
const colorchangeBtn = document.querySelector('button');
const colorRGB = document.querySelector('h1');
colorchangeBtn.addEventListener('click', () => {
    const randomColor = makeRandomColor();
    document.body.style.backgroundColor = randomColor;
    colorRGB.innerText = randomColor;
})

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}