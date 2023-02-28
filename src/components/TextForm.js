import React, { useState } from 'react';

export default function TextForm(props) {

    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to Upper Case", "success");
    };

    const handleLoClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to Lower Case", "success");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleClearClick = () => {
        setText('');
        props.showAlert("Text Cleared", "success");
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                    <button disabled={text.length === 0} className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>Convert to Upper Case</button>
                    <button disabled={text.length === 0} className="btn btn-primary my-1 mx-1" onClick={handleLoClick}>Convert to Lower Case</button>
                    <button disabled={text.length === 0} className="btn btn-primary my-1 mx-1" onClick={handleClearClick}>Clear Text</button>
                </div>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").filter((e) => e.length > 0).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((e) => e.length > 0).length} minute read</p>

                <h2>Preview</h2>
                <p>{text.length === 0 ? "Nothing to preview" : text}</p>
            </div>
        </>
    );
}
