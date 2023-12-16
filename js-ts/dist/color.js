"use strict";
const mybtn = document.getElementById("btn");
const para = document.getElementById("color");
mybtn.addEventListener('click', () => {
    let number = Math.round(Math.random() * 255);
    let number1 = Math.round(Math.random() * 255);
    let number2 = Math.round(Math.random() * 255);
    para.style.color = `rgb(${number},${number1},${number2})`;
});
