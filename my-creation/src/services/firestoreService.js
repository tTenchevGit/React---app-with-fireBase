import { doc, getDoc, setDoc } from "firebase/firestore";
// import { db } from "../config/firebaseConfig";

export const getUserEarnings = async (uid) => {
  try {
    const userDoc = doc("users", uid);
    const userSnapshot = await getDoc(userDoc);

    if (userSnapshot.exists()) {
      return userSnapshot.data().earnings;
    } else {
      return 0; // Default to 0 if no earnings are found
    }
  } catch (error) {
    console.error("Error getting user earnings:", error);
    return 0; // Default to 0 in case of error
  }
};

export const setUserEarnings = async (uid, earnings) => {
  try {
    const userDoc = doc( "users", uid);
    await setDoc(userDoc, { earnings }, { merge: true });
  } catch (error) {
    console.error("Error setting user earnings:", error);
  }
};
