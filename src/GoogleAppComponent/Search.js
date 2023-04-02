import GoogleLogo from './GoogleLogo'
import MenuItem from './MenuItem'
import InputBox from './InputBox';
import "../style/styles.css"

function Search(){
    return(
        <div >
            <div className="search-section">
                <GoogleLogo/>
                <InputBox/>
                <MenuItem name='Google Search'/>
                <MenuItem name='I am feeling lucky'/>
                <p> Google lang: <strong>Igbo</strong><strong>Yoruba</strong><strong>English</strong></p>
                    
            </div>
            
        </div>
    )
}
export default Search;