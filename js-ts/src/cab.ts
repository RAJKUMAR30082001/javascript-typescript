const input=document.querySelector("#form") as HTMLFormElement


    function console2(){
       
        const type=document.getElementById("productType") as HTMLSelectElement
        // console.log(type.value)
        const val=document.getElementById("agree") as HTMLInputElement//input[name="gender"]:checked
        // console.log(val.value)
        const km=document.getElementById("kilo") as HTMLInputElement
        // if(isNaN(km!.value)) throw "enter km in numbers"
        let totamount:number=0
        switch(type.value){
            case 'mini':
                totamount=parseInt(km.value)*15
                break
            case 'macro':
                totamount=parseInt(km.value)*10
                break
            case 'prime':
                totamount=parseInt(km.value)*20
                break
            default:
                alert("enter correct choice")


        }
        console.log(val.value)
        if (val.checked){
            totamount-=totamount*0.20
        }
      const final=document.getElementById("final") as HTMLSpanElement
      final.innerHTML=`${totamount}`

   
    // catch(err){alert(`error ${err}`)}
}
    