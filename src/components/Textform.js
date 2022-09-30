import React,{useState} from 'react'

export default function Textform(props) {
  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText)
  }

  const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText)
  }

  const handleOnChange=(event)=>{
    console.log("On change");
    setText(event.target.value)
  }

  const[text,setText]=useState("Enter text here");
  return (
    <>
    <div className="container" style={{color:props.mode==='dark' ? 'white' : '#042743'}}>   
    <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light' ? 'white' : 'grey'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark' ? 'white' : '#042743'}}>
      <h1>Your text Summary</h1>
      <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length}words and {text.length} characters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}minutes taken</p>
    </div>
    </>
  )
}
