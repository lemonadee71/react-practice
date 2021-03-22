import React from 'react';
import Task from './Task';

const Overview = ({ children, editChild, deleteChild }) => {
  return (
    <div>
      <h1>My Tasks</h1>
      <ul>
        {children.map((child) => (
          <Task
            key={child.id}
            info={child}
            editHandler={editChild}
            deleteHandler={deleteChild}
          />
        ))}
      </ul>
    </div>
  );
};

export default Overview;
