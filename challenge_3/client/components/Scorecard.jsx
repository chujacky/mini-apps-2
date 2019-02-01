import React from 'react';
import ScorecardFrame from './ScorecardFrame.jsx';

class Scorecard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { frame, scorecard } = this.props;
    console.log(scorecard)
    return (
      <div id="scorecard">
        {scorecard.map((frameScore, index) => {
          return <ScorecardFrame frameScore={frameScore} key={`frame${index}`} frame={index} />
        })}
      </div>
    );
  }

}

export default Scorecard;
