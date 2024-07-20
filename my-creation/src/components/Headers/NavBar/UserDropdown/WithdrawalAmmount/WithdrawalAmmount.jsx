import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const WithdrawalAmmount = () => {
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { count } = location.state || { count: 0 };

  const handleWithdraw = (e) => {
    e.preventDefault();
    // Implement the logic for withdrawal here
    console.log(`Withdrawing amount: ${amount}`);
    // Navigate to a confirmation page or back to home
    navigate('/');
  };

  return (
    <div className="withdrawal-container">
      <h2>Withdraw Funds</h2>
      <form onSubmit={handleWithdraw}>
        <div className="form-group">
          <label htmlFor="amount">Amount to Withdraw</label>
          {/* <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          /> */}
          <div>{count}</div>
        </div>
        <button type="submit">Withdraw</button>
      </form>
      {/* <div style={{color: 'red'}}>{count}</div> */}
      <style>
        {`
          .withdrawal-container {
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

          .withdrawal-container h2 {
            margin-bottom: 20px;
            color: #333;
          }

          .form-group {
            margin-bottom: 20px;
            width: 100%;
          }

          .form-group label {
            display: block;
            margin-bottom: 8px;
            color: #666;
          }

          .form-group input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
          }

          button {
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
          }

          button:hover {
            background-color: #0056b3;
          }
        `}
      </style>
    </div>
  );
};

export default WithdrawalAmmount;
