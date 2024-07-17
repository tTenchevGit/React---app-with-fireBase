import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import About from './components/About';
import Mains from './components/Mains';
import SignUpPage from './components/SignUpPage'; 
import LoginPage from './components/LoginPage'; 
import './index.css';
import { AuthProvider } from './context/AuthContext.jsx'; // Ensure the correct import path

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> {/* Wrap the entire application with AuthProvider */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Mains />} />
            <Route path="about" element={<About />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
);
