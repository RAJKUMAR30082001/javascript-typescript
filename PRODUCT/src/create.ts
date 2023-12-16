 
 type ProductType = {
    name: string;
    price: number;
    type: string;
  };
 console.log(localStorage.length)
 // Get the form elements defined in your HTML above.
 let productName = document.getElementById("productName") as HTMLInputElement;
 let productPrice = document.getElementById("productPrice")as HTMLInputElement;
 let productType = document.getElementById("productType") as HTMLSelectElement;
 let form=document.querySelector('form') as HTMLFormElement
 // Handle the submit event of the form to send data to server using AJAX.
 form.addEventListener('submit', function(event) {
     event.preventDefault();
     let product:string=productName.value
     let price:number=parseInt(productPrice.value)
     let type:string=productType.value
     
     let array:ProductType[]=[]
     let obj: ProductType = {
        name: product, // Assuming product is of type string
        price: price,  // Assuming price is of type number
        type: type,    // Assuming type is of type string
      };
     array.push(obj)
     // console.log(array)
     let s=JSON.stringify(array)
     localStorage.setItem('details',s)
     
     window.location.href = "../html/cab.html";
     // alert("Data has been added")
     


 })
