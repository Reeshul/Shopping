import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAerW2ZGF9d3d11UOrZ04duVG21TJj5doo',
  authDomain: 'shopping-1390d.firebaseapp.com',
  databaseURL: 'https://shopping-1390d.firebaseio.com',
  projectId: 'shopping-1390d',
  storageBucket: 'shopping-1390d.appspot.com',
  messagingSenderId: '557271238745',
  appId: '1:557271238745:web:e11366d87743c456150948'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creatuing user', error.message);
    }
  }

  return userRef;
  
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
