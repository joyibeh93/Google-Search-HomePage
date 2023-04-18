import React from 'react'
import "../style/styles.css"

function SearchKeyWord({keyword}) {
  return (
    <>
        <div className='center'>search Keyword:</div>
        <p className='center'>{keyword}</p>
    </>
    
  )
}

export default SearchKeyWord