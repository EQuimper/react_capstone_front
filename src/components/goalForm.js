import React from 'react';

const goalForm = (props) => {
  return (
      <div>
      <p>hello</p>
        <form action="">
          <input type="text" placeholder="name your goal"/>
          <button onClick={props.onClick} type="submit">Submit your goal</button>
        </form>
      </div>
    )
} 

export default goalForm;

