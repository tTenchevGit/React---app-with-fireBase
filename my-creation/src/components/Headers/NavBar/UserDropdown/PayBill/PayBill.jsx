import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const PayBill = () => {
  const location = useLocation();
  const { count } = location.state || { count: 0 };

  const [amount, setAmount] = useState('');

  const handlePayment = () => {
    // Implement the logic to process the payment here
    console.log(`Paying amount: ${amount}`);
  };

  return (
    <div className="pay-bill-container">
      <h2>Pay Your Balance</h2>
      <p>Your current balance is: <strong>{count.toFixed(4)}$</strong>. Please pay the required amount to continue.</p>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <button onClick={handlePayment}>Pay Now</button>
      <style>
        {`
          .pay-bill-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            max-width: 400px;
            margin: 0 auto;
          }

          .pay-bill-container h2 {
            margin-bottom: 10px;
            color: #333;
          }

          .pay-bill-container p {
            margin-bottom: 20px;
            color: #666;
            text-align: center;
          }

          .pay-bill-container input {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
          }

          .pay-bill-container button {
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
          }

          .pay-bill-container button:hover {
            background-color: #0056b3;
          }
        `}
      </style>
    </div>
  );
};

export default PayBill;
