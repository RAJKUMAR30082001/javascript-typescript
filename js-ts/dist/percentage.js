"use strict";
let marks = [80, 40, 90, 70, 50];
const total = marks.reduce((num, marks) => num + marks, 0);
console.log(`the student total mark is ${total}`);
console.log(`percentage of student is ${total / 5}%`);
