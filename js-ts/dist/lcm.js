"use strict";
function lcm(a, b) {
    let Max = Math.max(a, b);
    for (let i = Max; i < Max * Max; i += Max) {
        if ((i % a == 0) && (i % b == 0)) {
            return i;
        }
    }
}
console.log(lcm(3, 5));
