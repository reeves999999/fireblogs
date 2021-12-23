import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvt07xl7BKMFt4Ud0DoxuBfGC5thRUeBA",
  authDomain: "fireblogs-6fcca.firebaseapp.com",
  projectId: "fireblogs-6fcca",
  storageBucket: "fireblogs-6fcca.appspot.com",
  messagingSenderId: "340048671524",
  appId: "1:340048671524:web:4d6012a91ecea67c2779b1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
