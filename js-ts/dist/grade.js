"use strict";
//students marks
let maths = 100;
let social = 80;
let science = 75;
let tamil = 80;
let english = 70;
let total_mark = maths + social + science + tamil + english;
if (maths >= 40 && social >= 40 && science >= 40 && tamil >= 40 && english >= 40) {
    console.log("All subject are passed");
}
else
    console.log("student is not clear the exam");
let avg = total_mark / 5;
if (avg > 95)
    console.log("A+ grade");
else if (avg > 85)
    console.log("A grade");
else if (avg > 60)
    console.log("B grade");
else
    console.log("C grade");
