// Get the form elements defined in your HTML above.
type ProductType1 = {
    name: string;
    price: number;
    type: string;
  };
let productName1= document.getElementById("productName")as HTMLInputElement;
let productPrice1 = document.getElementById("productPrice")as HTMLInputElement;
let productType1 = document.getElementById("productType")as HTMLSelectElement;
let btn=document.getElementById("btn") as HTMLButtonElement;
btn.addEventListener("click",()=> submitForm())
function submitForm():void {
    // Check if localStorage is available
    if (typeof Storage !== "undefined") {
        let product:string = productName1.value;
        let price =parseInt(productPrice1.value);
        let type:string = productType1.value;

        // Get existing product details from localStorage
        let details = localStorage.getItem('details');
        let value:ProductType1[] = details ? JSON.parse(details) : [];

        // Check if the product already exists, and update details
        let flag:boolean = true;
        for (let i of value) {
            if (i.name == product) {
                i.price = price;
                i.type = type;
                flag = false;
            }
        }
        console.log(value)

        if (flag) {
            alert(`${product} not found`);
        } else {
            // Update localStorage with the new data
            localStorage.setItem('details', JSON.stringify(value));
            alert(`${product} has been updated`);
            // Redirect to another page if needed
            window.location.href = "../html/cab.html";
        }
    } else {
        alert("LocalStorage is not supported in this browser.");
    }
}