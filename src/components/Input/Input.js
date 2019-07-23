import React from 'react';

const input = (props) => (
  <div className='Input'>
    <input
      type='text'
      onChange={props.changed}
      value={props.value}
      // onKeyPress={props.keyPress}
      autoFocus />
  </div>
)

export default input;