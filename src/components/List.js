import React, { PropTypes } from 'react';
import { Item } from './Item';


const ListData = (props) => {
    let taskItems = props.tasks.map((task, index) => {
        return (
            <Item key={index}
                task={task}
            />
        );
    });

    return (
        <div className="task-list">
            {taskItems}
        </div>
    );
};
ListData.propTypes = {
    tasks: PropTypes.array
};

export default ListData;