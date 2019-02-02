import React from 'react';
import PinButtonItem from './PinButtonItem.jsx';

class PinButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frame: 1,
      firstBowl: true,
      pinsLeft: 10,
      allPins: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      pinsButton: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(e) {
    let { allPins, pinsLeft, firstBowl, pinsButton } = this.state;
    const { bowl } = this.props;
    const pinsHit = Number(e.target.id);
    bowl(pinsHit);
    if (firstBowl) {
      if (pinsHit === 10) {
        return;
      }
      pinsLeft -= pinsHit;
    } else {
      pinsLeft = 10;
    }
    this.setState({
      pinsLeft,
      firstBowl: !firstBowl,
    }, () => {
      pinsButton = allPins.slice(0, pinsLeft + 1);
      this.setState({
        pinsButton,
      });
    });
  }

  render() {
    const { pinsButton } = this.state;
    return (
      <div>
        {pinsButton.map((button) => {
          return <PinButtonItem pin={button} key={button} click={this.onButtonClick} />
        })}
      </div>
    );
  }
}

export default PinButtons;
