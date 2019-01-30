import React from 'react';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
    }
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" />
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
};

export default Search;