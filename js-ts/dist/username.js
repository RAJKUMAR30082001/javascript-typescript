"use strict";
const val = document.getElementById("valid");
const btn4 = document.getElementById("btn");
btn4.addEventListener("click", () => {
    if (4 < val.value.length && val.value.length < 16) {
        const regex = /^[a-zA-Z_.0-9]+$/;
        if (regex.test(val.value))
            alert("valid username");
        else
            alert("invalid username");
    }
    else
        alert("enter valid username");
});
