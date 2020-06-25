import React from 'react';

const ValidationComponent = ({ length }) => {
    if (length < 5) {
        return <p>Text too short</p>;
    }
    return <p>Text long enough</p>;
}

export default ValidationComponent;