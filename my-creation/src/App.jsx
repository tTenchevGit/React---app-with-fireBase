import React from 'react';
import Footer from "./components/Footer";
// import Mains from "./components/Mains";
import NavBar from "./components/Headers/NavBar";
import { Outlet } from 'react-router-dom';

const App = () => {
  console.log('Rendering App Component');
  return (
    <>
      <NavBar />
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;
