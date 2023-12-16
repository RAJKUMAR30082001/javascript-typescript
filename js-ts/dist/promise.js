"use strict";
const btn1 = document.getElementById("btn");
if (btn1) {
    btn1.addEventListener('click', () => {
        fetch('https://official-joke-api.appspot.com/jokes/programming/random')
            .then((val) => val.json())
            .then((val) => {
            let jokes = val[0].setup;
            let ans = val[0].punchline;
            const jokeElement = document.querySelector('.joke');
            if (jokeElement) {
                jokeElement.innerHTML = `${jokes} ${ans}`;
            }
        });
    });
}
