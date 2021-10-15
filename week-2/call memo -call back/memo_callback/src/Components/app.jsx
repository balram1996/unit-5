import React, { memo } from "react"
const User = ({name})=>{
    console.log("render")
    return(
        <>
        <p>my name is {name}</p>
        </>
    )
}

const MemUser = React.memo(User)
    

export default MemUser