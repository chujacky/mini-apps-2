import React from 'react';
import ReactDOM from 'react-dom';
import PinButtons from './components/PinButtons.jsx';
import Scorecard from './components/Scorecard.jsx';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      frame: 0,
      firstBowl: true,
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
        {frameScore: 0, bowlScores: [0, 0, 0]},
      ],
    };
    this.onBowl = this.onBowl.bind(this);
  }

  onBowl(score) {
    let { frame, firstBowl, scorecard } = this.state;
    if (firstBowl) {
      if (score === 10) {
        scorecard[frame].bowlScores[1] = 'X';
        frame += 1;
        firstBowl = true;
      } else {
        scorecard[frame].bowlScores[0] = score;
        firstBowl = false;
      }
    } else {
      if (scorecard[frame].bowlScores[0] + score === 10) {
        scorecard[frame].bowlScores[1] = '/';
      } else {
        scorecard[frame].bowlScores[1] = score;
      }
      frame += 1;
      firstBowl = true;
    }
    this.setState({
      frame,
      scorecard,
      firstBowl,
    });
  }

  render() {
    const { frame, scorecard } = this.state;
    return (
      <div>
        <h2>Bowling Scorecard</h2>
        <PinButtons bowl={this.onBowl} />
        <Scorecard
          frame={frame}
          scorecard={scorecard}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
