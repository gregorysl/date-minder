import React from 'react';
import { connect } from 'react-redux';
import AddDatePage from './AddDatePage';
import ListData from './List';
import * as actions from '../actions/dateActions';

class DatesPage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount(){
    this.props.fetch();
  }
  render() {
    return (
      <div>
        <AddDatePage handleSubmit={this.props.add} />
        <ListData tasks={this.props.data} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.dates.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetch: () => dispatch(actions.fetchData()),
    add: (item) => dispatch(actions.addDate(item)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DatesPage);

