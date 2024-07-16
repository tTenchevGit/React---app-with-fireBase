import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebaseConfig"; // Adjust the path as necessary

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setSuccess("Sign up successful!");
      setError("");
    } catch (error) {
      setError(error.message);
      setSuccess("");
    }
  };

  return (
    <>
      <div className="sign-up-page">
        <div className="sign-up-page-item">
          <div className="sign-up-card">
            <div className="sign-up-card-body">
              <h5 className="card-title">Sign Up</h5>
              {error && <div className="error">{error}</div>}
              {success ? (
                    <>
                      <div className="success">{success}</div>
                      <Link to="/login" className="btn btn-primary">Log In</Link>
                    </>
                  ) : (
              <form onSubmit={handleSignUp}>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
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
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          .sign-up-page {
            display: flex;
            justify-content: center;
            align-items: center;
         
            background-color: #f8f9fa;
          }
          .sign-up-page-item {
            width: 100%;
            max-width: 400px;
            padding: 20px;
          }
          .sign-up-card {
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 20px;
          }
          .sign-up-card-body {
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
          .form-text {
            margin-top: 5px;
            font-size: 12px;
            color: #6c757d;
          }
          .form-check {
            display: flex;
            align-items: center;
          }
          .form-check-input {
            margin-right: 10px;
          }
          .form-check-label {
            margin: 0;
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
          .success {
            color: green;
            margin-bottom: 15px;
          }
        `}
      </style>
    </>
  );
};

export default SignUpPage;
