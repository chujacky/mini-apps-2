import React from 'react';
import ReactDOM from 'react-dom';
import PinButtons from './components/PinButtons.jsx';
import Scorecard from './components/Scorecard.jsx';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      frame: 1,
      scorecard: [
        {frameScore: 0, bowlScores: [0, 0]},
        {frameScore: 0, bowlScores: [0, 0]},
        {frameScore: 0, bowlScores: [0, 0]},
        {frameScore: 0, bowlScores: [0, 0]},
        {frameScore: 0, bowlScores: [0, 0]},
        {frameScore: 0, bowlScores: [0, 0]},
        {frameScore: 0, bowlScores: [0, 0]},
        {frameScore: 0, bowlScores: [0, 0]},
        {frameScore: 0, bowlScores: [0, 0]},
        {frameScore: 0, bowlScores: [0, 0]},
        {frameScore: 0, bowlScores: [0, 0, 0]},
      ],
    };
  }

  render() {
    const { frame, scorecard } = this.state;
    return (
      <div>
        <h2>Bowling Scorecard</h2>
        <PinButtons />
        <Scorecard 
          frame={frame}
          scorecard={scorecard}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
