import React from 'react';
import axios from 'axios';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
    this.onType = this.onType.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onType(e) {
    const search = e.target.value;
    this.setState({
      search,
    }, () => {console.log(this.state)});
  }

  onSearch(e) {
    e.preventDefault();
    e.target.reset();
    const { search } = this.state;
    axios.get(`/events?q=${search}`)
      .then((events) => {
        console.log(events);
        this.setState({
          search: '',
        })
      })
      .catch((err) => {
        throw err;
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSearch}>
          <input type="text" onChange={this.onType}/>
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
};

export default Search;