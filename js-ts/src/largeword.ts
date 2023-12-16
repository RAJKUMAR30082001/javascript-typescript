let wordd:string="the quick brown fox jumps overs the lazy dog"
let words:string[]=wordd.split(" ")
let max:number=0
let worddd:string[]=[]
for (let i of words){
    if(i.length>max){
        max=i.length;
        worddd.splice(0,1)
        worddd.push(i)
        
    }
   
}
console.log(worddd)