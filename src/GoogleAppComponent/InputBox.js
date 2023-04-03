import React,{useState} from "react";

const InputBox = () =>{
    const [message,setMessage]=useState("")
    return (
        <>
        <form>
            <input type="text" s className="inputBox"/>
        </form>
           
        </>
    )
}

export default InputBox;