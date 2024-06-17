import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCEIBMRzDcJ9wBJT7hrcUQlaV0QOxTUKk4",
  authDomain: "furniro-challenge3compass.firebaseapp.com",
  projectId: "furniro-challenge3compass",
  storageBucket: "furniro-challenge3compass.appspot.com",
  messagingSenderId: "965777865470",
  appId: "1:965777865470:web:87350c4d20a654a942c3af",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { app, auth, googleProvider, facebookProvider };
