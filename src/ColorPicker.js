import React, { useState } from 'react';
import './ColorPicker.css';

function ColorPicker({ colors }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setIsOpen(false);
  };

  return (
    <div className="color-picker">
      <button onClick={() => setIsOpen(!isOpen)}>Pick a color</button>
      {isOpen && (
        <ul className="color-list">
          {colors.map((color, index) => (
            <li
              key={index}
              className="color-item"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></li>
          ))}
        </ul>
      )}
      {selectedColor && <p>Selected Color: {selectedColor}</p>}
    </div>
  );
}

export default ColorPicker;