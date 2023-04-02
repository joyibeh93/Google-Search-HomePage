function Countries(){
    const countries =['Namibia','kenya','Egypt']
    return(
        <ul>
            <li>Nigeria</li>
            <li>SouthAfrica</li>
            <li>Niger</li>
            <li>Ghana</li>
        
            {countries.map((countries,index)=>{
                return(
                    <li key={index}>{countries}</li>
                )

            })}
        </ul>
    )
}

export default Countries;