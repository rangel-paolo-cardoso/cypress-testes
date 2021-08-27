import React, { useState } from 'react';

function App() {
  const [devName, setDevName] = useState('');

  const handleClick = () => setDevName('Rangel Paolo');

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <button onClick={handleClick}>
        Change the text value below
      </button>
      <p style={{ fontSize: '20px' }}>Developed by: {devName}</p>
    </div>
  );
}

export default App;
