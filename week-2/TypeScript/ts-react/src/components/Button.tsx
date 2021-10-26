import React from 'react'

interface ButtonProps {
    label:string,
    colour:"red"|"blue",
    onClick:()=>void;
}
export const Button = ({label="",onClick=()=>{},colour:red}:ButtonProps) => {
    return (
        <>
          <button data-testid="button" onClick={onClick}>{label}</button>  
        </>
    )
}
