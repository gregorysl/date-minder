import React, { Component, PropTypes } from 'react';


export class Item extends Component {
  constructor() {
    super(...arguments);
  }

  render() {
    const { task } = this.props;
const f = task.fruits.reduce((a,b) => a +' '+ b,'');
    return (
      <div>
        <h2>
          {task.title}
        </h2>
        {f}
      </div>
    );
  }
}


export default Item;