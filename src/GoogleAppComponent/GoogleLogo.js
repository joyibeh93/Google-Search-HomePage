import "../style/styles.css"

function GoogleLogo(){
    const image ="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"

    return(
    
         <img  className="googleimg"  src={image} alt="google-icon" />
    )
    

}
export default GoogleLogo;