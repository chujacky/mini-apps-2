import React from 'react';
import axios from 'axios';

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '',
      endDate: '',
      currency: 'USD',
      invalid: false,
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
    const { getPrices } = this.props;
    e.preventDefault();
    const { startDate, endDate, currency } = this.state;
    if (startDate > endDate) {
      this.setState({
        invalid: true,
      });
      return;
    } 
    this.setState({
      invalid: false,
    });  
    axios.get(`/prices/${startDate}/${endDate}/${currency}`)
      .then((response) => {
        console.log(response.data);
        getPrices(response.data.bpi)
      })
      .catch((err) => {
        if (err) {
          throw err;
        }
      });
  }

  render() {
    const errorDisplay = {
      display: this.state.invalid ? 'block' : 'none',
      color: 'red',
    };
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Start Date: </label>
          <input name="startDate" type="date" onChange={this.onChange} required />
          <label>End Date: </label>
          <input name="endDate" type="date" onChange={this.onChange} required />
          <label>Currency: </label>
          <select name="currency" id="currency" onChange={this.onChange}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
          <button type="submit">Search</button>
        </form>
        <p style={errorDisplay}>Sorry, but your specified end date is before your start date.  Please check and try again.</p>
      </div>
    );
  }
}

export default Options;
