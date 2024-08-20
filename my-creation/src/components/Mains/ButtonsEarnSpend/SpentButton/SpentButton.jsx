import React from 'react';
import { useAuth } from '../../../../context/AuthContext';

const SpentButton = ({ count, setCount, resetEarnButton }) => {
  const { addSpentClick } = useAuth();

  const handleClick = () => {
    setCount(count - Math.random() * 2); 
    resetEarnButton(); 
    addSpentClick(); //
  };

  return (
    <button className="buttonMoney" onClick={handleClick}>
      Spend
    </button>
  );
};

export default SpentButton;
