import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBId6sPicVAYAUjrk02_HfXjzC85YX3zVM',
  authDomain: 'spirit-animal-look-book-4841a.firebaseapp.com',
  databaseURL: 'https://spirit-animal-look-book-4841a.firebaseio.com',
  projectId: 'spirit-animal-look-book-4841a',
  storageBucket: 'spirit-animal-look-book-4841a.appspot.com',
  messagingSenderId: '64192000680'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
