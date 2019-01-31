import React from 'react';
import axios from 'axios';


class ResultItem extends React.Component {
  constructor(props) {
    super(props);
    const { result } = this.props;
    this.state = {
      editMode: false,
      date: result.date,
      description: result.description,
      lang: result.lang,
      unique: result.description,
    };
    this.onEditClick = this.onEditClick.bind(this);
    this.onEditChange = this.onEditChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onEditClick() {
    this.setState({
      editMode: !this.state.editMode,
    });
  }

  onEditChange(e) {
    const editField = e.target.name;
    const updatedValue = e.target.value;

    if (editField === 'date') {
      this.setState({
        date: updatedValue,
      });
    } else if (editField === 'description') {
      this.setState({
        description: updatedValue,
      });
    } else {
      this.setState({
        lang: updatedValue,
      });
    }
  }

  onSubmit() {
    const { date, description, lang } = this.state;
    let { unique } = this.state;
    unique = unique.split(' ').join('+');
    const data = {
      date,
      description,
      lang,
    };
  }

  render() {
    const read = {
      display: this.state.editMode ? 'none' : 'inline',
    };
    const edit = {
      display: this.state.editMode ? 'inline' : 'none',
    };
    const { date, lang, description } = this.state;
    return (
      <div className="result">
        <div className="content">
          <label>Date: </label>
          <span style={read}>{date}</span>
          <input style={edit} name="date" type="text" value={date} onChange={this.onEditChange}/>
        </div>
        <div className="content">
          <label>Description: </label>
          <span style={read}>{description}</span>
          <textarea style={edit} name="description" cols="30" rows="10" value={description} onChange={this.onEditChange} />
        </div>
        <div className="content">
          <label>Language: </label>
          <span style={read}>{lang}</span>
          <input style={edit} type="text" name="lang" value={lang} onChange={this.onEditChange}/>
        </div>
        <button type="button" onClick={this.onEditClick} style={read}>Edit</button>
        <button type="button" onClick={()=> {this.onEditClick(); this.onSubmit();}} style={edit}>Save</button>
      </div>
    );
  };
}

export default ResultItem;
