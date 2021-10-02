import React, { useState } from 'react';

// Buttons Style
const btnStyle = {
    backgroundColor: "#0d6efd",
    color: "white",
    padding: "12px",
    borderRadius: "8px",
    marginRight: "10px",
    cursor: "pointer"    
}

// TextArea Style
const TextAreaStyle = {
    backgroundColor: "white", 
    color:"black", 
    width: "715px", 
    resize:"none",
    borderRadius: "6px",
    fontSize: "20px",
    marginBottom: "7px"
}

// Alert Component
function Alert(props) {
    const capitalize =(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}role="alert" >
            <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg} 
        </div>
    );
}

// TextForm Component
function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPERCASE","success");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleard!","success");
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!","success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces Removed!","success");
    }
    
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    
    const [text,setText] = useState('')
    
    return (
        <>
            <div>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={TextAreaStyle} id="myBox" rows="8"></textarea>
                </div>
                <button style={btnStyle} onClick={handleUpClick}>Convert to UpperCase</button>
                <button style={btnStyle} onClick={handleLowClick}>Convert to LowerCase</button>
                <button style={btnStyle} onClick={handleClearClick}>Clear Text</button>
                <button style={btnStyle} onClick={handleCopy}>Copy Text</button>
                <button style={btnStyle} onClick={handleExtraSpaces}>Remove Extra Space</button>
            </div>
            <div className="container my-3" style={{color:props.mode ==='dark'?'white':'#042743'}}>
                <h2 style={{color: "yellow", marginTop: "9px"}}>Your Text Summary</h2>
                <p style={{color: "white", fontSize: "15px"}}>{text.split(" ").length} Words and {text.length} Characters</p>
                <p style={{color: "white", fontSize: "15px"}}>{0.008 * text.split(" ").length} Minutes read </p>
                <h2 style={{color: "yellow"}}>Preview</h2>
                <p style={{color: "white", fontSize: "20px"}}>{text.length>0 ? text:"Enter Something in the Text Box Above To Preview It Here ..."}</p>
            </div>    
        </>
      );
    }

const TextUtils = () => {

    const [alert, setAlert] = useState(null);

    const showAlert=(message,type)=>{
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    }

    return (
        <>
            <h1>TextUtils : A Way To Analyze Your Text Quickly And Efficiently.</h1>
            <Alert alert={alert} />
            <TextForm showAlert={showAlert} heading="Enter The Text To Analyse Below" />
        </>
    );
}

export default TextUtils;