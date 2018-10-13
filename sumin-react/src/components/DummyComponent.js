import React from 'react';

export const DummyComponent = (props) =>(
    <div>
      <button onClick = {props.onOkButtonClick}  >Ok</button>
      <button>Cancel</button>
    </div>
  );