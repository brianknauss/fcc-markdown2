import React, { Component } from 'react';
import './App.css';
import TextInput from './TextInput';
import TextOutput from './TextOutput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(e) {
    this.setState({
      userInput: e.target.value
    });
    console.log(this.state.userInput);
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Markdown Previewer</h1>
        </header>

        <div className="container">
          <TextInput handleInput={this.handleUserInput} value={this.state.userInput} />
          <TextOutput input={this.state.userInput} />
        </div>

        <footer>
          Yo
        </footer>

      </div>
    );
  }
}

export default App;
