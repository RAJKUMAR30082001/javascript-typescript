type local={
    name:string
    id:number
    active:number
}

let newdetails:local[]=[]

let obj1:Record<string,local>={
    'raj':{name:'raj',id:2001,active:0},
    'tom':{name:'Tom',id:3456789,active:0}

}
localStorage.clear()
newdetails=Object.values(obj1)


localStorage.setItem('value',JSON.stringify(newdetails))
const newarray:local[]=getDetails()


function getDetails():local[]{  
    let data = JSON.parse(localStorage.getItem("value")!) || [];
    return data;
    }
findactive()
function findactive(){
for (let i:number=0;i<Object.values(newarray).length;i++){
    if(newarray[i].id==2001){
        newarray[i].active=1
        

    }
}
localStorage.setItem('value',JSON.stringify(newarray))

const newarra:local[]=getDetails()
console.log(newarra)
}


