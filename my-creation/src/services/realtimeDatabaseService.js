// import { ref, set, get, child } from "firebase/database";
// import { realtimeDb } from "../config/firebaseConfig";

// export const getUserEarnings = async (uid) => {
//   try {
//     const dbRef = ref(realtimeDb);
//     const snapshot = await get(child(dbRef, `users/${uid}/earnings`));
//     if (snapshot.exists()) {
//       return snapshot.val();
//     } else {
//       return 0; // Default to 0 if no earnings are found
//     }
//   } catch (error) {
//     console.error("Error getting user earnings:", error);
//     return 0; // Default to 0 in case of error
//   }
// };

// export const setUserEarnings = async (uid, earnings) => {
//   try {
//     await set(ref(realtimeDb, `users/${uid}/earnings`), earnings);
//     console.log(`Earnings set for user: ${uid}`);
//   } catch (error) {
//     console.error("Error setting user earnings:", error);
//   }
// };


// import { ref, get, set } from "firebase/database";
// import { realtimeDb } from "../config/firebaseConfig"; // Correct import path

// export const getUserEarnings = async (userId) => {
//   try {
//     const userRef = ref(realtimeDb, `users/${userId}/earnings`);
//     const snapshot = await get(userRef);
//     if (snapshot.exists()) {
//       return snapshot.val();
//     } else {
//       console.error('No earnings found for user!');
//       return 0;
//     }
//   } catch (error) {
//     console.error('Error getting user earnings:', error);
//     throw error;
//   }
// };

// export const setUserEarnings = async (userId, earnings) => {
//   try {
//     const userRef = ref(realtimeDb, `users/${userId}/earnings`);
//     await set(userRef, earnings);
//     console.log('Earnings set for user:', userId, earnings);
//   } catch (error) {
//     console.error('Error setting user earnings:', error);
//     throw error;
//   }
// };



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
