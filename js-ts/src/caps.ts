let word:string="the quick brown fox jumps overs the lazy dog"

let list:string[]= word.split(" ")

let finalword:string =""

for(let i of list){
    finalword+=i[0].toUpperCase()+i.slice(1,i.length)
    finalword+=" "
}
console.log(finalword)