import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import App from './App.jsx';
import About from './components/About';
import Mains from './components/Mains';
import SignUpPage from './components/SignUpPage'; 
import LoginPage from './components/LoginPage'; 
import './index.css';
import { AuthProvider } from './context/AuthContext.jsx';
import PayBill from './components/Headers/NavBar/UserDropdown/PayBill';
import PrivateRoute from './Routes/PrivateRoute.jsx'
import WithdrawalAmmount from './components/Headers/NavBar/UserDropdown/WithdrawalAmmount/WithdrawalAmmount';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Mains />} />
            <Route path="about" element={<About />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="login" element={<LoginPage />} />
           
            <Route 
              path="paybill" 
              element={
                <PrivateRoute>
                  <PayBill />
                </PrivateRoute>
              } 
            /> 
             <Route 
              path="Withdrawal" 
              element={
                <PrivateRoute>
                  <WithdrawalAmmount />
                </PrivateRoute>
              } 
            /> {}
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
);
