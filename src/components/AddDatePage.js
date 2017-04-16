import React from 'react';
import { Button, Checkbox, DatePicker } from 'antd';
const CheckboxGroup = Checkbox.Group;
import moment from 'moment';

import 'moment/locale/en-gb';
moment.locale('en-gb');

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
    this.setState({ item: { ...this.state.item, date: dateString } });
  }

  handleKeyUp(event) {
    if (event.keyCode === 27) this.clearInput();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.state.item);
    this.clearInput();
  }
  render() {
    const pickerValue = this.state.item.date? moment(this.state.item.date):null;
    return (
      <div>
        <DatePicker value={pickerValue} onChange={this.dateChange} />
        <input autoFocus onChange={this.titleChange} onKeyUp={this.handleKeyUp} placeholder="Title" type="text" value={this.state.item.title} />
        <CheckboxGroup options={this.options} defaultValue={this.state.item.fruits} onChange={this.fruitsChanged} />
        <Button onClick={this.handleSubmit} >Submit</Button>
      </div>
    );
  }
}

export default AddDatePage;