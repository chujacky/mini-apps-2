import React from 'react';
import ReactDOM from 'react-dom';
import Options from './components/Options.jsx';
import Chart from './components/Chart.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      prices: {},
    };
    this.onGetPrices = this.onGetPrices.bind(this);
  }

  onGetPrices(prices) {
    this.setState({
      prices,
    });
  }

  render() {
    return (
      <div>
        <h2>Bitcoin Tracker</h2>
        <Options getPrices={this.onGetPrices} />
        <Chart prices={this.state.prices} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));