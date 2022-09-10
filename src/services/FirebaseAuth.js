import { auth,firestore, storage } from "../utils/firebase-config";
import {
  AccessToken,
  AuthenticationToken,
  LoginButton,
  LoginManager
} from 'react-native-fbsdk-next';

export const SignupEmailPassword = async (email, password) => {
    try {
      const userCredentials = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
  
  
      return userCredentials;
    } catch (error) {
      throw error;
    }
  };

  export const signInWithFB = async () => {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    const auth = getAuth(auth, firestore, storage);

    const credential = FacebookAuthProvider.credential(data.accessToken);
    const user = await signInWithCredential(credential);
    console.log(user);
 

    // const facebookAuthProvider = facebookAuthProvider.credential(data.accessToken);
    // // console.log("provider ",facebookAuthProvider);
    // // const credential = facebookAuthProvider.credential(data.accessToken);
    // // Sign-in with credential from the Facebook user.
    // signInWithCredential(auth, facebookAuthProvider)
    
  }