import React, { useState } from 'react'



export default function TextForm(props) {
    // text is a state variable whose default value is 'Enter the Text Here'
    //setText is a function which can change the value of text variable
    const [text, setText] = useState('Enter the Text Here');

    const handleUpClick = () => {
        console.log("Uper case is clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleDownClick = () => {
        console.log("Lowercase is clicked");
        let newText1 = text.toLowerCase();
        setText(newText1);
        props.showAlert("Converted to LowerCase","success");

    };
    const handleClearClick = () => {
        console.log("Clear the text");
        let newText2 = "";
        setText(newText2);
        props.showAlert("Text is Cleared","success");

    }
    const handleSpaces = () => {
        console.log("I am remove the spaces");
        let newText3 = text.split(/[ ]+/);
        setText(newText3.join(" "));
        props.showAlert("Extra space is removed","success");


    }

    const handleCopy = () => {
        console.log("I am Copy");
        var text4 = document.getElementById("myBox");
        text4.select();
        navigator.clipboard.writeText(text4.value);
        props.showAlert("Text is Copied","success");

    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }



    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="8" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                </div>
                <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-3" onClick={handleDownClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-3" onClick={handleSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-3" onClick={handleCopy}>CopyText</button>

            </div>

            <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length-1} words and {text.length} charactes </p>
                <p>{0.008 * text.split(" ").length} Minute to read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter your text to preview it here"}</p>
            </div>
        </>
    )
}
