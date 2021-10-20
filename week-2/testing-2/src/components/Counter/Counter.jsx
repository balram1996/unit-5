import React from 'react'
import {useState} from "react";
import { Button } from '../Button/button';

export const Counter = () => {
    const [count,setCounter] = useState(0);

    const increment=()=>{
        return setCounter(count+1)
    }
    const decrement=()=>{
        return  setCounter(count-1)
    }

    return (
        <div>
            <h1>Counter</h1>
            <h1 data-testid="count">{count}</h1>
            <Button label="increment" onClick={increment}></Button>
            <Button label="decrement" onClick={decrement}></Button>
        </div>
    )
}


