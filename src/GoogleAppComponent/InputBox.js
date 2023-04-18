
const InputBox = ({value,onChange,onKeyDown}) =>{
    
    return (
        <>
            <input type="text" className="inputBox" onChange={onChange} onKeyDown={onKeyDown} value={value}/>
        </>
    )
}

export default InputBox;