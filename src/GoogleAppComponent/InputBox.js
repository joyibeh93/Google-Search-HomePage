import React,{useState} from "react";

const InputBox = () =>{
    const[value,setValue]=useState("")
    const [message,setMessage]=useState("");
    function handlesubmit(event){
        event.preventDefault();
        setMessage({value})
    }
    
    function updateValue(event){
        setValue(event.target.value)
    }
   
    return (
        <>
        <form onSubmit={{handlesubmit}}>
            <input type="text" className="inputBox" onChange={updateValue}/>
           
        </form>
        <p>{message}</p>
           
        </>
    )
}

export default InputBox;