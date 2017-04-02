import React from 'react';
import { Checkbox, CheckboxGroup } from 'react-checkbox-group';


class AddDatePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { item: { title: '', fruits: [ 'watermelon'] } };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fruitsChanged = this.fruitsChanged.bind(this);
  }
  fruitsChanged(newFruits) {
    this.setState({item:{ ...this.state.item, fruits: newFruits }});
  }
  clearInput() {
    this.setState({ item: { title: '', fruits: [] } });
  }
  handleChange(event) {
    this.setState({ item: { ...this.state.item, title: event.target.value } });
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
        <input
          autoComplete="off"
          autoFocus
          className="task-form__input"
          maxLength="64"
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          placeholder="What needs to be done?"
          type="text"
          value={this.state.item.title}
        />
        <CheckboxGroup
          name="fruits"
          value={this.state.item.fruits}
          onChange={this.fruitsChanged}>

          <label><Checkbox value="apple" /> Apple</label>
          <label><Checkbox value="orange" /> Orange</label>
          <label><Checkbox value="watermelon" /> Watermelon</label>
        </CheckboxGroup>
      </form>
    );
  }
}

export default AddDatePage;