import React, { useState } from 'react';
import Cards from './Cards';

const Mains = () => {
  const [count, setCount] = useState(0);
  return (
    <div className='mains'>
      <h1>{`${count.toFixed(4)}$`}</h1>
      <div className='buttonsWrapper'>
      <button className='buttonMoney earnButton' onClick={() => setCount(count + Math.random() * 2)}>
        Earn
      </button>
      <button className='buttonMoney' onClick={() => setCount(count - Math.random() * 2)}>
        Spend
      </button>
      </div>
      <Cards count={count} />
      <style>
        {`
       
          .buttonMoney {
            margin: 10px;
            padding: 10px 10px;
            font-size: 16px;
            cursor: pointer;
            background-color: lightgray; 
            border-radius: 4px;
          }
          .buttonMoney:hover {
            background-color: #f1f1f1;
          }
           
          .mains{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }


          .earnButton {
            display: inline-block;
            padding: 10px 20px;
            font-size: 16px;
            font-weight: bold;
            color: white;
            background-color: red;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            animation: pulse 1s infinite;
        }
  
        @keyframes pulse {
            0% {
                transform: scale(1);
                background-color: red;
                color: white;
            }
            50% {
                transform: scale(1.2);
                background-color: lightcoral;
                color: darkred;
            }
            100% {
                transform: scale(1);
                background-color: red;
                color: white;
            }
        }
        `}
      </style>
    </div>
  );
}

export default Mains;
