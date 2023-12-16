let number:number=100
findOddOrEven(number)
findOddOrEven(71)
function findOddOrEven(num:number){
    if (num % 2 == 0){
        console.log(`${num} is even`)
    }
    else
    console.log(`${num} is odd`)
}