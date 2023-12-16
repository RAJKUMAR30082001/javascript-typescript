"use strict";
const productNameInput2 = document.getElementById("productNameInput");
const btn4 = document.getElementById("btn");
btn4.addEventListener('click', () => search1());
function search1() {
    let productName = productNameInput2.value;
    let valu = localStorage.getItem('details');
    let val = valu ? JSON.parse(valu) : [];
    let flag = true;
    for (let i = 0; i < val.length; i++) {
        if (productName === val[i].name) {
            val.splice(i, 1); // Remove the product from the array
            localStorage.setItem('details', JSON.stringify(val)); // Update local storage
            flag = false;
            alert(`Product '${productName}' has been deleted.`);
            break;
        }
    }
    if (flag) {
        alert(`Product '${productName}' not found.`);
    }
}
