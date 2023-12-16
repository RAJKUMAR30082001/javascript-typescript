const info=document.getElementById("dept")as HTMLSelectElement
const btn=document.getElementById("btn")as HTMLButtonElement

let stu_info:Record<string, string[]>={
    mca:['raj','kumar','raina'],
    ece:['sai','ram', 'krishna'],
    eee:['john','mark','jack'],
    mech:['bob','tim','joan']
}
btn.addEventListener('click',()=>{
const para=document.querySelector('.details')as HTMLDivElement
// const paragraph=para.getElementsByTagName("p")
// while (para.firstChild) {
//     para.removeChild(para.firstChild);
// }
para.innerHTML = "";
let val:string=info.value
let student:string[]=stu_info[`${val}`]
for (let i of student){
    para.innerHTML +=`<p>${i}</p>`;
}
})