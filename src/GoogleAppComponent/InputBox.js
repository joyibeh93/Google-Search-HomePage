import React,{useState} from "react";

const InputBox = () =>{
    const [message,setMessage]=useState("")
    return (
        <>
        <form onSubmit={()=>setMessage(message)}>
            <input type="text" s className="inputBox"/>
            <p>{message}</p>
        </form>
           
        </>
    )
}

export default InputBox;