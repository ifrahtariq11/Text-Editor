// react's function based component: rfc
import React, {useState} from 'react'
export default function TextForm(props) {
  const handleUpClick=()=>{
    console.log('Upper Case was clicked' + text )
    let newText=text.toUpperCase();

    setText(newText)
    props.showAlert('Converted to upper case','Success')
  }
  const handleLowClick=()=>{
    console.log('Lower Case was clicked' + text )
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert('Converted to low case','Success')
  }
  const handleClearClick=()=>{
    let newText='';
    setText(newText)
    props.showAlert('Text cleared','Success')
  }
  const handleOnChange=(event)=>{
    console.log('On change')
    setText(event.target.value)
  }
  const handleCopy =()=>{
    var text= document.getElementById('exampleFormControlTextarea1')
    text.select()
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges()
    props.showAlert('Text copied','Success')
    

  }
  const handleExtraSpaces=()=>{
    let newText= text.split(/[ ]+/);
    setText(newText.join(' '))
    props.showAlert('Extra spaces removed','Success')
  }
 
  const [text, setText] = useState('Enter Text here');
  return (
    <>
  <div className="container" style={{color: props.mode==='dark'?'white':'black'}} >
  <h1 className='mb-4'>{props.logic}</h1> 
  <div className="mb-3">
    {/* first curly brace for javascript other for object */}
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'rgb(21 12 44)':'white' , color: props.mode==='light'?'black':'white'}} id="exampleFormControlTextarea1" rows="8"></textarea>
  </div> 
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick} >Convert to upper case</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick} >Convert to lowerCase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick} > Clear Text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy} > Copy Text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={ handleExtraSpaces} > Remove Extra Spaces</button>
  </div>
  <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>Your text summary</h1>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
    <p> {0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:'Nothing to preview!'}</p>
  </div>
 </>
 
 )
  }
