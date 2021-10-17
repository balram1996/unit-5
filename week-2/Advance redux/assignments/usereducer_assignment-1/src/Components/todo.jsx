import { useState,useEffect, useReducer } from "react";

const reducer=(state=initialState,{type,payload})=>{

    switch(type){
        case "ADD_TODO":
            return{
                 ...state,
                todos:[...state.todo,{payload}]
            }
            default:
                return{...state}
    }

}

const rend=(initialState)=>{
    return(
          <div>initialState
          </div>
    )
}

const initialState={
    todo:[]
}

const Todo=()=>{
    const [state,dispatch] = useReducer(reducer,initialState);
    const [text,setText] = useState("");
    const [loading,setLoading] = useState(false);
    const [error,serError] = useState(false);
    console.log(state)
    return (
        <>
        <div>
          <input type="text" value={text} onChange={(e)=>setText(e.target.value)}></input>
          <button onClick={()=>{
              dispatch({type:"ADD_TODO",payload:text})
          }}>Add Todo</button>
          
        </div>
        </>
    );
}

export default Todo