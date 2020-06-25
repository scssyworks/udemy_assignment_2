import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './components/ValidationComponent';
import CharComponent from './components/CharComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ''
    };
  }

  removeChar = (charIndex) => {
    const { inputText } = this.state;
    const firstPart = inputText.substring(0, charIndex);
    const remainingPart = inputText.substring(charIndex + 1);
    this.setState({
      inputText: `${firstPart}${remainingPart}`
    });
  }

  render() {
    const { inputText } = this.state;
    return (
      <div className="App">
        <input type="text" onChange={(e) => this.setState({
          inputText: e.target.value
        })} value={inputText} />
        <p>{inputText.length}</p>
        <ValidationComponent length={inputText.length} />
        {inputText.split('').map((char, index) => <CharComponent key={index} char={char} index={index} onClick={this.removeChar} />)}
      </div>
    );
  }
}

export default App;
