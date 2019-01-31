import React from 'react';
import axios from 'axios';

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '',
      endDate: '',
      currency: 'USD',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    const inputValue = e.target.value;
    if (e.target.name === 'startDate') {
      this.setState({
        startDate: inputValue,
      });
    } else if (e.target.name === 'endDate') {
      this.setState({
        endDate: inputValue,
      });
    } else {
      this.setState({
        currency: inputValue,
      });
    }
  }
  
  onSubmit(e) {
    e.preventDefault();
    const { startDate, endDate, currency } = this.state;
    
    axios.get(`/prices/${startDate}/${endDate}/${currency}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        if (err) {
          throw err;
        }
      });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>Start Date: </label>
        <input name="startDate" type="date" onChange={this.onChange} />
        <label>End Date: </label>
        <input name="endDate" type="date" onChange={this.onChange} />
        <label>Currency: </label>
        <select name="currency" id="currency" onChange={this.onChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default Options;
