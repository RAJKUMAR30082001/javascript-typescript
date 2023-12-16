type ProductType3 = {
    name: string;
    price: number;
    type: string;
};
const productNameInput2 = document.getElementById("productNameInput") as HTMLInputElement;
const btn4=document.getElementById("btn")as HTMLButtonElement;
btn4.addEventListener('click',()=>search1())
function search1() {
let productName:string = productNameInput2.value;
let valu = localStorage.getItem('details');
let val:ProductType3[] = valu?JSON.parse(valu):[];


let flag = true;
for (let i = 0; i < val.length; i++) {
    if (productName === val[i].name) {
        val.splice(i, 1);  // Remove the product from the array
        localStorage.setItem('details', JSON.stringify(val));  // Update local storage
        flag = false;
        alert(`Product '${productName}' has been deleted.`);
        break;
    }
}

if (flag) {
    alert(`Product '${productName}' not found.`);
}
}