import { auth,firestore, storage } from "../utils/firebase-config";

export const SignupEmailPassword = async (email, password) => {
    try {
      const userCredentials = await auth.
      createUserWithEmailAndPassword(
        email,
        password
      );
      return userCredentials;
    } catch (error) {
      throw error;
    }
  };

  export const AuthLogin = async (email, password) => {
    try {
      const userCredentials = await auth.signInWithEmailAndPassword(
        email,
        password
      );
      return userCredentials;
    } catch (error) {
      throw error;
    }
  };
