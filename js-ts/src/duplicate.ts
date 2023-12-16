function duplicate(a:number[]):number[]{
    let arr:number[]=[]
    for(let ele of a){
        if(!arr.includes(ele)){
            arr.push(ele)
        }
    }
    return(arr)
}

let array:number[]=[1,1,2,3,4,4,3]
console.log("unique elements are",duplicate(array))
