import React, { useState } from "react";

function InputBox() {
    const [inputValue,setInputValue]=useState("")
    const [message,setMessage]=useState("")

    function handleSubmit(event){
        event.preventDefault();
        setMessage(`${inputValue}`)

    }

    function handleInputWord(event){
     setInputValue(event.target.value)
        
    }
  return (
    <div>
         <form onSubmit={handleSubmit}>
            <input type="text" className="inputBox" onChange={handleInputWord} />
        </form>
      <h2 className="msg">{message}</h2>
    </div>
  )
}

export default InputBox;