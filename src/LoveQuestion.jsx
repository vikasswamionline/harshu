import React, { useState } from 'react';
import './LoveQuestion.css'; // Make sure to create this CSS file too.

const LoveQuestion = () => {
    const [response, setResponse] = useState('');
    const [bgColor, setBgColor] = useState('white'); // Initial background color

    const handleYes = () => {
        setResponse('😊'); // Happy smiley for "Yes"
        setBgColor('lavender'); // Change background color to green
    };

    const handleNo = () => {
        setResponse('😢'); // Sad smiley for "No"
        setBgColor('white'); // Change background color to red
    };

    return (
        <div className="love-question-container" style={{ backgroundColor: bgColor }}>
            <h1>Do you love me?</h1>
            <button onClick={handleYes}>Yes</button>
            <button onClick={handleNo}>No</button>
            <div className="response">{response}</div>
        </div>
    );
};

export default LoveQuestion;
