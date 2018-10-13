import React from 'react';

export const ToDoItem = (props) => (
    <div>
        <input type='checkbox' value={props.isComplete}
            onClick={props.onComplete} />
        {props.text}
    </div>
)

