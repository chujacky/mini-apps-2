import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }

  render() {
    return (
      <div>
        <h2>Histroical Events Finder</h2>
        <Search />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('body'));
