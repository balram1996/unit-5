import { useState,useEffect, useReducer } from "react";

const reducer=(state=initialState,{type,payload})=>{

    switch(type){
        case "ADD_TODO":
            return{
                ...state,
                todo:{
                    ...state.todo.payload,
                    
                }
            }
            default:
                return{...state}
    }

}

const handleChange=(e)=>{
    return e.target.value
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
          <input type="text" onChange={handleChange}></input>
          <button onClick={()=>{
              dispatch({type:"ADD_TODO",payload:handleChange() })
          }}>Add Todo</button>
        </div>
        </>
    );
}

export default Todo