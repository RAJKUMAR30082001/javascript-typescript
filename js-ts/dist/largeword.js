"use strict";
let wordd = "the quick brown fox jumps overs the lazy dog";
let words = wordd.split(" ");
let max = 0;
let worddd = [];
for (let i of words) {
    if (i.length > max) {
        max = i.length;
        worddd.splice(0, 1);
        worddd.push(i);
    }
}
console.log(worddd);
