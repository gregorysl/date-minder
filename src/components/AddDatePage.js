import React from 'react';
import { Checkbox, CheckboxGroup } from 'react-checkbox-group';
import DatePicker from 'react-datepicker';

require('react-datepicker/dist/react-datepicker.css');

class AddDatePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { item: { title: '', fruits: ['watermelon'] } };
    this.titleChange = this.titleChange.bind(this);
    this.dateChange = this.dateChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fruitsChanged = this.fruitsChanged.bind(this);
  }
  fruitsChanged(newFruits) {
    this.setState({ item: { ...this.state.item, fruits: newFruits } });
  }
  clearInput() {
    this.setState({ item: { title: '', fruits: [], date: null } });
  }
  titleChange(event) {
    this.setState({ item: { ...this.state.item, title: event.target.value } });
  }
  dateChange(date) {
    this.setState({ item: { ...this.state.item, date: date } });
  }

  handleKeyUp(event) {
    if (event.keyCode === 27) this.clearInput();
  }

  handleSubmit(event) {
    debugger
    event.preventDefault();
    this.props.handleSubmit(this.state.item);
    this.clearInput();
  }
  render() {
    return (
      <form className="task-form" onSubmit={this.handleSubmit} noValidate>
        <DatePicker selected={this.state.item.date} onChange={this.dateChange} />
        <input
          autoComplete="off"
          autoFocus
          className="task-form__input"
          maxLength="64"
          onChange={this.titleChange}
          onKeyUp={this.handleKeyUp}
          placeholder="What needs to be done?"
          type="text"
          value={this.state.item.title}
        />
        <CheckboxGroup name="fruits" value={this.state.item.fruits} onChange={this.fruitsChanged}>
          <label><Checkbox value="apple" />Apple</label>
          <label><Checkbox value="orange" />Orange</label>
          <label><Checkbox value="watermelon" />Watermelon</label>
        </CheckboxGroup>
        <button type="submit" >Submint</button>
      </form>
    );
  }
}

export default AddDatePage;