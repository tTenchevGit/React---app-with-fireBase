import React from 'react';


const SpentButton = ({ count, setCount, resetEarnButton }) => {
  
  const handleClick = () => {
    setCount(count - Math.random() * 2); 
    resetEarnButton(); 
  };

  return (
    <button className="buttonMoney" onClick={handleClick}>
      Spend
    </button>
  );
};

export default SpentButton;
