const mybtn = document.getElementById("btn")as HTMLBRElement
const para = document.getElementById("color")as HTMLParagraphElement
mybtn.addEventListener('click',()=>{
    let number:number=Math.round(Math.random()*255)
    let number1:number=Math.round(Math.random()*255)
    let number2:number=Math.round(Math.random()*255)
    para.style.color=`rgb(${number},${number1},${number2})`
})