import React,{useState} from 'react';
import GoogleLogo from './GoogleLogo'
import MenuItem from './MenuItem'
import InputBox from './InputBox';
import "../style/styles.css"
import SearchKeyWord from './SearchKeyWord';

function Search(){
    const[searchvalue,setSearchValue]=useState("")
    const [message,setMessage]=useState([]);
    
    function updateValue(event){
        setSearchValue(event.target.value)
   }
   function handleSearchKeyDown(event){
    if(event.key==='Enter' && searchvalue !==''){
        setMessage([...message,searchvalue])
        setSearchValue('')
    }


   }

    return(
        <div >
            <div className="search-section">
                <GoogleLogo/>
                <InputBox
                onChange={updateValue}
                onKeyDown={handleSearchKeyDown} 
                
                />
                <SearchKeyWord keyword={setMessage[setMessage.length-1]}/>
                <div className=" app-header app-headers">
                    <MenuItem name='Google Search' className="app"/>
                    <MenuItem name='I am feeling lucky'/>
                </div>
                
                <p className="msg"> Google offered in: <strong>Hausa</strong> <strong>Igbo</strong><strong> Ede Yoruba </strong> <strong>Nigerian Pidgin</strong></p>
                    
            </div>
            
        </div>
    )
}
export default Search;