import React, { Component } from 'react';
import './App.css';
import Text from './Text';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello, <Text color="green">KenzZie</Text></h1>
          <Text color="yellow">Carl</Text>
        </header>
      </div>
    );
  }
}

export default App;
