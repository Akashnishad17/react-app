import React, { useState } from 'react';

export default function TextForm(props) {

    const handleUpClick = () => {
        setText(text.toUpperCase());
    };

    const handleLoClick = () => {
        setText(text.toLowerCase());
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleClearClick = () => {
        setText('');
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                    <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
                    <button className="btn btn-primary my-3 mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
                    <button className="btn btn-primary my-3 mx-1" onClick={handleClearClick}>Clear Text</button>
                </div>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minute read</p>

                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}
