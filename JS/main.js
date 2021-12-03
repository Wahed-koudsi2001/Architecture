let bars = document.querySelector('.bars');
let nav = document.querySelector('nav');

bars.addEventListener('click', addActiveToNav);
bars.addEventListener('click', addActiveToBars);


function addActiveToNav() {
    nav.classList.toggle('active');
}

function addActiveToBars() {
    bars.classList.toggle('active');
}


// Fon Label
let boxs = document.querySelectorAll('.contact .box');

boxs.forEach((box) => {
    box.addEventListener('click', activate);
})

function activate() {
    boxs.forEach((box) => {
        box.classList.remove('active');
        this.classList.add('active');
    });
}