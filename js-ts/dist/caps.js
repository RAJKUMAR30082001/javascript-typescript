"use strict";
let word = "the quick brown fox jumps overs the lazy dog";
let list = word.split(" ");
let finalword = "";
for (let i of list) {
    finalword += i[0].toUpperCase() + i.slice(1, i.length);
    finalword += " ";
}
console.log(finalword);
