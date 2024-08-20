import { ref, get, set, update, getDatabase } from "firebase/database";
import { realtimeDb } from "../config/firebaseConfig"; // Ensure correct import path

const db = getDatabase();

export const getUserData = async (userId) => {
  const userRef = ref(db, `users/${userId}`);
  const snapshot = await get(userRef);
  return snapshot.exists() ? snapshot.val() : null;
};

export const setUserData = async (userId, data) => {
  const userRef = ref(db, `users/${userId}`);
  await update(userRef, data);
};

export const getUserEarnings = async (userId) => {
  try {
    const userRef = ref(realtimeDb, `users/${userId}/earnings`);
    const snapshot = await get(userRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.error('No earnings found for user!');
      return 0;
    }
  } catch (error) {
    console.error('Error getting user earnings:', error);
    throw error;
  }
};

export const setUserEarnings = async (userId, earnings) => {
  try {
    const userRef = ref(realtimeDb, `users/${userId}/earnings`);
    await set(userRef, earnings);
    console.log('Earnings set for user:', userId, earnings);
  } catch (error) {
    console.error('Error setting user earnings:', error);
    throw error;
  }
};
