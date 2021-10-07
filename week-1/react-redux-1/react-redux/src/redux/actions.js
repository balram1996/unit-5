//action creator;
import { ADD_COUNT,DEC_COUNT,ADD_TODO } from "./actionType.js"

export const addCount = (data)=>{
    return {type:ADD_COUNT,payload:data}
}
export const decCount = (data)=>{
    return {type:DEC_COUNT,payload:data}
}
export const addTodo = (data)=>{
    return{type:ADD_TODO, payload:data}
}
