type ProductType2 = {
    name: string;
    price: number;
    type: string;
};
const productNameInput = document.getElementById("productNameInput")as HTMLInputElement;
const showDiv = document.querySelector(".show") as HTMLDivElement;
const btn2=document.getElementById("btn") as HTMLButtonElement
btn2.addEventListener('click',()=> search())
function search() {
// Clear the content of the div
showDiv.innerHTML = "";

let productName:string = productNameInput.value;
let valu = localStorage.getItem('details');
let val:ProductType2[] = valu?JSON.parse(valu):[];

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