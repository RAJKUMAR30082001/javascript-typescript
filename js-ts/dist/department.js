"use strict";
const info = document.getElementById("dept");
const btn = document.getElementById("btn");
let stu_info = {
    mca: ['raj', 'kumar', 'raina'],
    ece: ['sai', 'ram', 'krishna'],
    eee: ['john', 'mark', 'jack'],
    mech: ['bob', 'tim', 'joan']
};
btn.addEventListener('click', () => {
    const para = document.querySelector('.details');
    // const paragraph=para.getElementsByTagName("p")
    // while (para.firstChild) {
    //     para.removeChild(para.firstChild);
    // }
    para.innerHTML = "";
    let val = info.value;
    let student = stu_info[`${val}`];
    for (let i of student) {
        para.innerHTML += `<p>${i}</p>`;
    }
});
