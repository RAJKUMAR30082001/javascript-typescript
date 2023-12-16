
const btn1: HTMLButtonElement | null = document.getElementById("btn") as HTMLButtonElement;

if (btn1) {
    btn1.addEventListener('click', () => {
        fetch('https://official-joke-api.appspot.com/jokes/programming/random')
            .then((val) => val.json())
            .then((val) => {
                let jokes: string = val[0].setup;
                let ans: string = val[0].punchline;
                const jokeElement: Element | null = document.querySelector('.joke');
                if (jokeElement) {
                    jokeElement.innerHTML = `${jokes} ${ans}`;
                }
            });
    });
}
