const val=document.getElementById("valid") as HTMLInputElement
const btn4=document.getElementById("btn") as HTMLButtonElement

btn4.addEventListener("click",()=>{
    if (4<val.value.length && val.value.length<16){
        const regex=/^[a-zA-Z_.0-9]+$/
        if(regex.test(val.value))
        alert("valid username")
        else
        alert("invalid username")

    }
    else
    alert("enter valid username")
})