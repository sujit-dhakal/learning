import { newMessage } from "./observable";

newMessage.subscribe(([message,randomNumber])=>{
    console.log(`Notification : ${message} RandomNumber : ${randomNumber}` )
})

let sum = 0
newMessage.subscribe(([,randomNumber])=>{
    sum = sum + randomNumber
    console.log(sum);
})

let numbers : number[] = []
let avg = 0
newMessage.subscribe(([,,lastThreeRandomNumbers])=>{
    numbers = lastThreeRandomNumbers
    avg = lastThreeRandomNumbers.reduce((acc,curr)=>acc+curr,0)
    console.log(avg)
})


