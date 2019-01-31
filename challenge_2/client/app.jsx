import React from 'react';
import ReactDOM from 'react-dom';
import Options from './components/Options.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h2>Bitcoin Tracker</h2>
        <Options />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));