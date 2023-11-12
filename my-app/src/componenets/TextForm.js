import React, { useState } from "react";

export default function TextForm(props) {
  const oncahngehandler = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
    //uppercase function
  const handleupclick = () => {
    console.log("onclick handler run" + text);

    let newText = text.toUpperCase();
    setText(newText);

    props.showAlert('text is converted to upperCase','success')
  };
     //lowercase function
  const handleloclick = () => {
    console.log("onclick handler run" + text);

    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('text is converted to lowerCase','success')

  };
   //clear function
  const handleclearclick = () => {
    console.log("onclick handler run" + text);

    let newText = " ";
    setText(newText);
    props.showAlert('text is cleared','success')

  };

  //copy function
  const handlecopy = () => {
    console.log("iam copy");
    var copyText = document.getElementById("my-box");
    //select text field
    copyText.select();
    // for mobile devices
    copyText.setSelectionRange(0, 99999);

    // copy text inside the text field
    //navigator:js navigator object is used for browser detection.it can be use to get browser information such as app name,appcodename
    //clipboard : is used for short term to store data
    navigator.clipboard.writeText(copyText.value);
    // setText(copy)
    //alert
    props.showAlert('text is copied','success')
    
  };
    

  //handleremovespaces
   const handleremovespaces=()=>{

      let newstring = text.split(/[ ]+/)
      setText(newstring.join(" "))
      props.showAlert('text spaces are removed','success')

        

   }
//use state

  const [text, setText] = useState("Enter value here ");

  return (
    <>
      <div disabled={text.length===0} className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>

        <div disabled={text.length===0} className="mb-3"> <textarea disabled={text.lenght===0} className="form-control" style={{backgroundColor:props.mode==='dark'?'#5fdb34':'white',color:props.mode==='dark'?'white':'black'}}  id="my-box" value={text}   onChange={oncahngehandler}  rows="8" ></textarea>
        </div>

        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleupclick}>
          {" "}
          UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleloclick}>
          {" "}
          LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclearclick}>
          {" "}
          ClearData
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecopy}>
          {" "}
          Copy Data
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleremovespaces}>
          {" "}
          RemoveSpaces
        </button>


        <div disabled={text.length===0} className="conatiner my-3" style={{color:props.mode==='dark'?'white':'black'}} >
        <h2>your text summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}words and {text.length}character
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something In Textbox to Preview'}</p>
      </div>

      </div>

      
    </>
  );
}
