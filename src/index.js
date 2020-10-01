import React from 'react';
import ReactDOM from 'react-dom';

// Create Component
const App = function() {
  return <div>Hello World!</div>
}

// Show on screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)