import React from 'react'

const footerstyle = {
  color: "white",
  padding: "5px"
}

export default function Footer(props) {



  return (
    <div className="container">
       {props.footer ? <div className='fixed-bottom text-center bg-dark'>
        <p style={footerstyle}>copyrights @ : Copy</p>

      </div> :<p style={{"color":"black","backgroundColor":"red"}}>copyrights @ : Copy</p>}

    </div>

   

  )
}

// Footer.defaultProps={

//   footer:true

// }