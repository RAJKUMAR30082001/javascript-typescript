"use strict";
let productName1 = document.getElementById("productName");
let productPrice1 = document.getElementById("productPrice");
let productType1 = document.getElementById("productType");
let btn = document.getElementById("btn");
btn.addEventListener("click", () => submitForm());
function submitForm() {
    // Check if localStorage is available
    if (typeof Storage !== "undefined") {
        let product = productName1.value;
        let price = parseInt(productPrice1.value);
        let type = productType1.value;
        // Get existing product details from localStorage
        let details = localStorage.getItem('details');
        let value = details ? JSON.parse(details) : [];
        // Check if the product already exists, and update details
        let flag = true;
        for (let i of value) {
            if (i.name == product) {
                i.price = price;
                i.type = type;
                flag = false;
            }
        }
        console.log(value);
        if (flag) {
            alert(`${product} not found`);
        }
        else {
            // Update localStorage with the new data
            localStorage.setItem('details', JSON.stringify(value));
            alert(`${product} has been updated`);
            // Redirect to another page if needed
            window.location.href = "../html/cab.html";
        }
    }
    else {
        alert("LocalStorage is not supported in this browser.");
    }
}
