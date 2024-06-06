import { Observable,Subject, last } from "rxjs";

// observable for new messages
// this observable will emit new message every 3 seconds


const newMessageSubject = new Subject<[string,number,number[]]>()

const Message = newMessageSubject.asObservable()


let lastThreeRandomNumbers : number[] = []
function emitNewMessages(){
    const randomNumber = Math.floor(Math.random()*100)
    lastThreeRandomNumbers.push(randomNumber)
    if(lastThreeRandomNumbers.length > 3){
        lastThreeRandomNumbers.shift()
    }
    newMessageSubject.next(['New message arrived',randomNumber,lastThreeRandomNumbers])
}
setInterval(emitNewMessages,3000)

Message.subscribe(([message,randomNumber])=>{
    console.log(`${message} : ${randomNumber}`)
})


let sum = 0
Message.subscribe(([,randomNumber])=>{
    sum += randomNumber
    console.log(sum)
})

let numbers: number[] = []
let avg = 0
Message.subscribe(([ , ,lastThreeRandomNumbers])=>{
    numbers = lastThreeRandomNumbers
    avg = numbers.reduce((acc,curr)=>acc+curr,0)/numbers.length
    console.log(avg)
})
