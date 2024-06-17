import { auth, facebookProvider, googleProvider } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, UserCredential } from 'firebase/auth';

export const doCreateUserWithEmailAndPassword = async (email: string, password: string): Promise<UserCredential> => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = async (email: string, password: string): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async (): Promise<UserCredential> => {
  return signInWithPopup(auth, googleProvider);
};

export const doSignInWithFacebook = async (): Promise<UserCredential> => {
    return signInWithPopup(auth, facebookProvider)
}

export const doSignOut = async (): Promise<void> => {
  return auth.signOut();
};