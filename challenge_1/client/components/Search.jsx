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
    });
  }

  onSearch(e) {
    e.preventDefault();
    // e.target.reset();
    const { search } = this.state;
    const { response } = this.props;
    axios.get(`/events?q=${search}`)
      .then((results) => {
        const { data } = results;
        return data;
      })
      .then((data) => {
        axios.get(`/events?q=${search}&_limit=10&_page=1`)
          .then((events) => {
            response(events.data, data.length, search);
            this.setState({
              search: '',
            });
          });
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