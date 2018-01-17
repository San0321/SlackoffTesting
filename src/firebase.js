  // Initialize Firebase
import firebase from 'firebase'
var config = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
