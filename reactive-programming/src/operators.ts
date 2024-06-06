import { newMessage } from "./observable";
import {map,scan} from "rxjs"

//export const newNotification = newMessage.pipe(map(message=>`New message: ${message}`))

// pipe is used to create new observable based on newMessage

function randomNumber(){
    return Math.floor((Math.random()*10)+1)
}

export const newNotification = newMessage.pipe(
    map((message)=>({message:`${message}`,randomNumber:randomNumber()})),
    scan((acc,{message,randomNumber})=>{

        return acc
    },{count : 0,message:'',avg:0,sum:0,numbers:[]})
)