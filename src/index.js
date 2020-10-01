import React from 'react';
import ReactDOM from 'react-dom';

// Create Component
const App = () => {
  const buttonText = { text: 'Touch Me' };

  return (
    <div>
      <h1 style={{ color: 'skyblue' }}>Hello World!</h1>
      <label className='label' htmlFor='name'>
        Enter Name:
      </label>
      <input id='name' type='text'></input>
      <button
        style={{
          backgroundColor: 'skyblue',
          color: 'white',
          border: 'gray',
          width: '100px',
          height: '25px',
          borderRadius: '5px'
        }}
      >
        {buttonText.text}
      </button>
    </div>
  );
};

// Show on screen
ReactDOM.render(<App />, document.querySelector('#root'));
