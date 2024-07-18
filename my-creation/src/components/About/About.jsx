import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">Game Rules</h1>
      <p className="about-description">
        Welcome to our earning game! Below are the rules to get you started and help you understand how to play and win.
      </p>
      <div className="rules">
        <div className="rule">
          <h2>1. Login Requirement</h2>
          <p>To participate, you must be logged in to your account.</p>
        </div>
        <div className="rule">
          <h2>2. Earn Button Cooldown</h2>
          <p>You can press the <strong>Earn</strong> button once every 8 hours.</p>
        </div>
        <div className="rule">
          <h2>3. Spend Button Advantage</h2>
          <p>Pressing the <strong>Spend</strong> button gives you the right to click the <strong>Earn</strong> button again immediately.</p>
        </div>
        <div className="rule">
          <h2>4. Withdrawal Conditions</h2>
          <p>If you press the <strong>Spend</strong> button 30 times, you can withdraw your balance to your crypto wallet in our cryptocurrency, provided the balance is above 0.</p>
        </div>
        <div className="rule">
          <h2>5. Monthly Settlement</h2>
          <p>On the 1st of each month, if your balance is below 0, you must pay the amount in USD or USDT via credit/debit card or crypto deposit to continue playing.</p>
        </div>
      </div>
      <style>
        {
          `
          /* App.css or About.css */
.about-container {
  margin: 0 auto;
  padding: 20px;
  max-width: 800px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.about-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
}

.about-description {
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: #666;
}

.rules {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.rule {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.rule h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
}

.rule p {
  font-size: 1rem;
  color: #555;
}

.rule strong {
  color: #d9534f; /* Highlight important terms in red */
}

          `
        }
      </style>
    </div>
  );
}

export default About;
