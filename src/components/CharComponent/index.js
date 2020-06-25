import React from 'react';

const CharComponent = ({ char, index, onClick }) => {
    const style = {
        textAlign: 'center',
        margin: '16px',
        border: '1px solid #000',
        display: 'inline-block',
        padding: '4px',
        cursor: 'pointer'
    };
    return (
        <p style={style} onClick={() => onClick(index)}>{char}</p>
    );
};

export default CharComponent;