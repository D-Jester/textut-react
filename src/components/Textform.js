import React, { useState } from "react";
import PropTypes from "prop-types";
export default function Textform(props) {
  //functions

  //function to count no of words
  const countWords=(text)=>{
    const arr=text.split(" ")
    let l=0;
    for(let i=0;i<arr.length;i++){
      if(arr[i]=="")continue;
      l++;
    }
    return l;
  }

  // To handle the text field input
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // to convert to upper case
  const handleUpClick=()=>{
    if(text===""){
      return;
    }
    setText(text.toUpperCase())
    props.showAlert("Changed to upper Case","success")
  }

  //to convert to lower case
  const handleLowClick=()=>{
    if(text===""){
      return;
    }
    setText(text.toLowerCase())
    props.showAlert("Changed to lower Case","success")
  }

  //to count the numbewr of vowels
  const countVowels=()=>{
    if(text===""){
      return;
    }
    let count=0;
        for(let i=0;i<text.length;i++){
            let ch=text[i]
            if(ch==="a"||ch==="e"||ch==="i"||ch==="o"||ch==="u"||ch==="A"||ch==="E"||ch==="I"||ch==="O"||ch==="U"){
                count++;
            }            
        }
        alert(count)
  }

  //to count number of special characters
    const countSp=()=>{
      if(text===""){
        return;
      }
      let count=0;
      for(let i=0;i<text.length;i++){            
          let a=text.charCodeAt(i)
          if(!((a>=65&&a<=90)||(a>=97&&a<=122))){
              count++;
          }            
      }
      alert(count)
      
  }

  //to clear text
  const clearText=()=>{
    if(text===""){
      return;
    }
    setText("")
    props.showAlert("Cleared text","info")
  }

  //to copy text
  const handleCopy=()=>{
    if(text===""){
      return;
    }
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied","info")
  }

  //remove spaces function
  const handleSpaces=()=>{
    let words=text.split(" ")
    let arr=[]
    for(let i=0;i<words.length;i++){
      if(words[i]!==""){
        arr.push(words[i])
      }
    }
    let str="";
    for(let i=0;i<arr.length;i++){
      if(i+1<arr.length&&arr[i+1].length===1){
        let n=arr[i+1].charCodeAt(0)
        if(!((n>=65&&n<=90)||(n>=97&&n<=122))){
          str+=arr[i];
        }
      }
      else if(i+1===arr.length){
        str+=arr[i]
      }else{
        str+=arr[i]+" "
      }
    }
    setText(str)
  }

  //declaring use state variable
  const [text, setText] = useState("");

  //styles
  const [style,setstyle]=useState({
    backgroundColor:"#6c757d"
  })

  return (
    <div className={`container text-${(props.mode==="dark")?"light":"dark"}`}>
      <div className="mb-3">
        <label htmlFor="textArea" className="form-label">
          <b>{props.header}</b>
        </label>
        <textarea
          className="form-control"
          id="textArea"
          value={text}
          onChange={handleOnChange}
          rows="10"
          placeholder={props.message}
          style={{backgroundColor:(props.mode==="dark")?"#6c757d":"white",color:(props.mode==="dark")?"white":"black"}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
        Convert to Upper Case
      </button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
        Convert to Lower Case
      </button>
      <button className="btn btn-primary mx-1 my-1" onClick={countVowels}>
        Number of vowels
      </button>
      <button className="btn btn-primary mx-1 my-1" onClick={countSp}>
        Number of special characters
      </button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleSpaces}>
        Remove extra spaces
      </button>
      <button className="btn btn-primary mx-1 my-1" onClick={clearText}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
        Copy
      </button>
      <div >
        <h2>Your text summary</h2>
        <p>{countWords(text)} words and {text.length} charcaters</p>
        <p>{0.008*countWords(text)}minutes to read the content or</p>
        <p>{0.008*countWords(text)*60}seconds to read the content</p>
        <h2>Preview:</h2>
        <p>{
          (text==="")?"Nothing to preview":text
          }</p>
      </div>
    </div>
  );
  
}

Textform.propTypes = {
  header: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

Textform.defaultProps = {
  header: "This will be the header",
  message: "Enter your text here..."
};