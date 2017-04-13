import React from 'react';
//import { Checkbox, CheckboxGroup } from 'react-checkbox-group';
//import DatePicker from 'react-datepicker';
import { Button, Checkbox, DatePicker } from 'antd';
const CheckboxGroup = Checkbox.Group;

//require('react-datepicker/dist/react-datepicker.css');

class AddDatePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { item: { title: '', fruits: [] } };
    this.options = ['Apple', 'Pear', 'Orange'];

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
  dateChange(date, dateString) {
    debugger;
    this.setState({ item: { ...this.state.item, date: dateString } });
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
      <div>
        <DatePicker value={this.state.item.date} onChange={this.dateChange} />
        <input autoFocus onChange={this.titleChange} onKeyUp={this.handleKeyUp} placeholder="Title" type="text" value={this.state.item.title} />
        <CheckboxGroup options={this.options} defaultValue={this.state.item.fruits} onChange={this.fruitsChanged} />
        <Button onClick={this.handleSubmit} >Submit</Button>
      </div>
    );
  }
}

export default AddDatePage;