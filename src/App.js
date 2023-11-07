import React from 'react';
import './App.css';
import ColorPicker from './ColorPicker';

function App() {
  const colors = ['#FF5733', '#FFC300', '#36D7B7', '#3399FF', '#B36DFF'];
  return (
    <div className="App">
      <h1>Color Picker App</h1>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
