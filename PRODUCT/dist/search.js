"use strict";
const productNameInput = document.getElementById("productNameInput");
const showDiv = document.querySelector(".show");
const btn2 = document.getElementById("btn");
btn2.addEventListener('click', () => search());
function search() {
    // Clear the content of the div
    showDiv.innerHTML = "";
    let productName = productNameInput.value;
    let valu = localStorage.getItem('details');
    let val = valu ? JSON.parse(valu) : [];
    let flag = true;
    for (let i of val) {
        if (i.name === productName) {
            showDiv.innerHTML += `<p>product name= ${i.name}</p>`;
            showDiv.innerHTML += `<p>product price= ${i.price}</p>`;
            showDiv.innerHTML += `<p>product type= ${i.type}</p>`;
            flag = false;
        }
    }
    if (flag) {
        alert(`${productName} not found`);
    }
}
