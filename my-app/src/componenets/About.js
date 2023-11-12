// import React, { useState } from 'react'



export default function About(props) {

// const [mystyle,setmystyle]=useState({
//     color:'black',
//     backgroundColor:'white'

// })

let mystyle = {
  color:props.mode==="dark"?"white":"black",
  backgroundColor:props.mode==="dark"?"#816565":"white",
 
  // borderColor:props.mode==="dark"?"white":"black",
  // border:'0.5px solid',
  

}
  return (
    <div className="container" style={mystyle}>
        <h1 className="my-3" style={{color:props.mode==="dark"?"white":"black"}}>About Us</h1>
     <div className="accordion accordion-flush" id="accordionFlushExample"  style={mystyle} >
  <div className="accordion-item" style={mystyle} >
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" style={mystyle}  type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={mystyle} >Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle} >
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={mystyle} >Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item" style={mystyle} >
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={mystyle} >Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>


    </div>
  )
}
