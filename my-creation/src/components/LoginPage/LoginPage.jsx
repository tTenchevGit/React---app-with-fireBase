import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebaseConfig';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); 
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="login-page">
        <div className="login-page-item">
          <div className="login-card">
            <div className="login-card-body">
              <h5 className="card-title">Login</h5>
              {error && <div className="error">{error}</div>}
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
              <Link to="/create">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          .login-page {
            display: flex;
            justify-content: center;
            align-items: center;
            
         
          }
          .login-page-item {
            width: 100%;
            max-width: 400px;
            padding: 20px;
          }
          .login-card {
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 20px;
          }
          .login-card-body {
            display: flex;
            flex-direction: column;
          }
          .card-title {
            margin-bottom: 20px;
            font-size: 24px;
            font-weight: bold;
            color: #333;
          }
          .form-group {
            margin-bottom: 15px;
          }
          .form-group label {
            margin-bottom: 5px;
            font-weight: 500;
          }
          .form-control {
            width: 100%;
            padding: 10px;
            border: 1px solid #ced4da;
            border-radius: 4px;
          }
          .btn-primary {
            background-color: #007bff;
            border: none;
            padding: 10px 20px;
            color: white;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }
          .btn-primary:hover {
            background-color: #0056b3;
          }
          .error {
            color: red;
            margin-bottom: 15px;
          }
        `}
      </style>
    </>
  );
};

export default LoginPage;
