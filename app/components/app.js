import React from 'react';

const appStyle = {
  backgroundColor: '#eee',
  padding: '10px',
  border: '3px solid #ccc',
};

const catStyle = {
  width: '100%',
  height: 'auto',
};

const App = () =>
  (<div style={appStyle}>
    <h1>Hello World!</h1>
    <img src="resources/cats_in_hats.jpg" alt="cats in hats" style={catStyle} />
  </div>);

export default App;
