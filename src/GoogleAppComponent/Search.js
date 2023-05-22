
import GoogleLogo from './GoogleLogo'
import MenuItem from './MenuItem'
import InputBox from './InputBox';
import "../style/styles.css"


function Search(){
    
  

    return(
        <div >
            <div className="search-section">
                <GoogleLogo/>
                <InputBox />
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