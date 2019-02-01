import React from 'react';
import ReactDOM from 'react-dom';
import PinButtons from './components/PinButtons.jsx';

class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h2>Bowling Scorecard</h2>
        <PinButtons />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
