"use strict";
console.log(localStorage.length);
// Get the form elements defined in your HTML above.
let productName = document.getElementById("productName");
let productPrice = document.getElementById("productPrice");
let productType = document.getElementById("productType");
let form = document.querySelector('form');
// Handle the submit event of the form to send data to server using AJAX.
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let product = productName.value;
    let price = parseInt(productPrice.value);
    let type = productType.value;
    let array = [];
    let obj = {
        name: product, // Assuming product is of type string
        price: price, // Assuming price is of type number
        type: type, // Assuming type is of type string
    };
    array.push(obj);
    // console.log(array)
    let s = JSON.stringify(array);
    localStorage.setItem('details', s);
    window.location.href = "../html/cab.html";
    // alert("Data has been added")
});
