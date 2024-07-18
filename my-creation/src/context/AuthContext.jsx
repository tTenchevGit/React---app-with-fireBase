
import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';
import { getUserEarnings } from '../services/realtimeDatabaseService'; 

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [earnings, setEarnings] = useState(0);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userEarnings = await getUserEarnings(currentUser.uid);
        setEarnings(userEarnings);
      } else {
        setEarnings(0);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, earnings, setEarnings }}>
      {children}
    </AuthContext.Provider>
  );
};
