
import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react';

// Define the EarnButton component using forwardRef to allow ref access from parent
const EarnButton = forwardRef(({ count, setCount }, ref) => {
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const lastClickTime = localStorage.getItem('earnButtonLastClick'); // Get the last click time from localStorage
    if (lastClickTime) {
      const remainingTime = getRemainingTime(parseInt(lastClickTime)); 
      if (remainingTime > 0) {
        setIsDisabled(true);
        setTimeout(() => {
          setIsDisabled(false); 
        }, remainingTime);
      }
    }
  }, []);

  const handleClick = () => {
    const currentTime = new Date().getTime();
    localStorage.setItem('earnButtonLastClick', currentTime.toString()); // Store current click time in localStorage
    setCount(count + Math.random() * 2); 
    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false); 
    }, 8 * 60 * 60 * 1000); 
  };

  // Use useImperativeHandle to expose the resetCooldown method to the parent component
  useImperativeHandle(ref, () => ({
    resetCooldown: () => {
      setIsDisabled(false); 
      localStorage.removeItem('earnButtonLastClick'); 
    }
  }));

  return (
    <button
      className="buttonMoney earnButton"
      onClick={handleClick}
      disabled={isDisabled} 
    >
      Earn
    </button>
  );
});


const getRemainingTime = (lastClickTime) => {
  const currentTime = new Date().getTime();
  const elapsed = currentTime - lastClickTime;
  const eightHoursInMs = 8 * 60 * 60 * 1000;
  return eightHoursInMs - elapsed;
};

export default EarnButton;
