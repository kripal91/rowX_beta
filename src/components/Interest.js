import React, { useState } from 'react';
import './Interest.css';

const Interest = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleBoxPosition = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`box1 ${isActive ? 'active' : ''}`} onClick={toggleBoxPosition}>
      {/* Content of the box */}
    </div>
  );
};

export default Interest;
