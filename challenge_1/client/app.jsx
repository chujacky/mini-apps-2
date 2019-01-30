import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/Search.jsx';
import Result from './components/Result.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      results: [],
      pageCount: 0,
      search: '',
    };
    this.onResponse = this.onResponse.bind(this);
    this.onPageClick = this.onPageClick.bind(this);
  }

  onResponse(results, totalResults, search) {
    // console.log(results, 'app');
    const pageCount = Math.ceil(totalResults / 10);
    this.setState({
      results,
      pageCount,
      search,
    });
  }

  onPageClick(page) {
    const pageCount = page.selected + 1;
    const { search } = this.state;
    axios.get(`/events?q=${search}&_limit=10&_page=${pageCount}`)
      .then((events) => {
        const { data } = events;
        console.log(data);
        this.setState({
          results: data,
        });
      })
      .catch((err) => {
        throw err;
      });
  }

  render() {
    const { results, pageCount, search } = this.state;
    return (
      <div>
        <h2>Histroical Events Finder</h2>
        <Search response={this.onResponse} />
        <Result
          results={results}
          pageCount={pageCount}
          search={search}
          pageClick={this.onPageClick}
        />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('body'));
