import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';
import { getUserEarnings } from '../services/realtimeDatabaseService'; 

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [earnings, setEarnings] = useState(0);
  const [spentClicks, setSpentClicks] = useState(() => {
    const savedClicks = localStorage.getItem('spentClicks');
    return savedClicks ? JSON.parse(savedClicks) : [];
  });
  const [withdrawVisibleUntil, setWithdrawVisibleUntil] = useState(() => {
    const savedVisibility = localStorage.getItem('withdrawVisibleUntil');
    return savedVisibility ? new Date(savedVisibility) : null;
  });

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

  const addSpentClick = () => {
    const now = Date.now();
    const updatedSpentClicks = [...spentClicks, now];
    setSpentClicks(updatedSpentClicks);
    localStorage.setItem('spentClicks', JSON.stringify(updatedSpentClicks));

    // Check if we need to set the withdrawVisibleUntil date
    const thirtyDaysAgo = now - (30 * 24 * 60 * 60 * 1000);
    const recentClicks = updatedSpentClicks.filter(click => click > thirtyDaysAgo);
    if (recentClicks.length >= 30 && !withdrawVisibleUntil) {
      const visibilityUntil = new Date(now + 30 * 24 * 60 * 60 * 1000);
      setWithdrawVisibleUntil(visibilityUntil);
      localStorage.setItem('withdrawVisibleUntil', visibilityUntil);
    }
  };

  useEffect(() => {
    localStorage.setItem('withdrawVisibleUntil', withdrawVisibleUntil);
  }, [withdrawVisibleUntil]);

  return (
    <AuthContext.Provider value={{ user, earnings, setEarnings, spentClicks, addSpentClick, withdrawVisibleUntil }}>
      {children}
    </AuthContext.Provider>
  );
};
