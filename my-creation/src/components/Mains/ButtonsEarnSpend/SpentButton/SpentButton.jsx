import React from 'react';

const SpentButton = ({ count, setCount, resetEarnButton, addSpentClick }) => {
  const handleClick = () => {
    setCount(count - Math.random() * 2); 
    resetEarnButton(); 
    addSpentClick(); // Call addSpentClick
  };

  return (
    <button className="buttonMoney" onClick={handleClick}>
      Spend
    </button>
  );
};

export default SpentButton;
