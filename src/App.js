import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormattedMessage id="about.header" />
        <br />
        <FormattedMessage id="certifications.text" />
      </div>
    );
  }
}

export default App;
