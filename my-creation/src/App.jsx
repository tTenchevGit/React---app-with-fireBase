// import React from 'react';
// import Footer from "./components/Footer";
// // import Mains from "./components/Mains";
// import NavBar from "./components/Headers/NavBar";
// import { Outlet } from 'react-router-dom';

// const App = () => {
//   console.log('Rendering App Component');
//   return (
//     <>
//       <NavBar />
//       <div style={{ flex: 1 }}>
//         <Outlet />
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react';
import Footer from "./components/Footer";
import NavBar from "./components/Headers/NavBar";
import { Outlet } from 'react-router-dom';
import { useAuth } from "./context/AuthContext";
import { setUserEarnings, getUserEarnings } from "./services/realtimeDatabaseService";

const App = () => {
  console.log('Rendering App Component');
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchEarnings = async () => {
      if (user) {
        try {
          const earnings = await getUserEarnings(user.uid);
          setCount(earnings);
        } catch (error) {
          console.error("Error fetching earnings: ", error);
        } finally {
          setLoading(false); 
        }
      }
    };
    fetchEarnings();
  }, [user]);

  useEffect(() => {
    if (user && !loading) {
      try {
        setUserEarnings(user.uid, count);
      } catch (error) {
        console.error("Error setting earnings: ", error);
      }
    }
  }, [count, user, loading]);

  return (
    <>
      <NavBar count={count} />
      <div style={{ flex: 1 }}>
        <Outlet context={{ count, setCount }} /> {/* Pass count and setCount through Outlet context */}
      </div>
      <Footer />
    </>
  );
};

export default App;
