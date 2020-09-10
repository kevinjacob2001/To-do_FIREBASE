import firebase from 'firebase';


firebase.initializeApp({

    apiKey: "AIzaSyBV0BaJaiRTvHDU4B4MorWm0eRsv9tRxMo",
    authDomain: "todo-app-kevinjacob.firebaseapp.com",
    databaseURL: "https://todo-app-kevinjacob.firebaseio.com",
    projectId: "todo-app-kevinjacob",
    storageBucket: "todo-app-kevinjacob.appspot.com",
    messagingSenderId: "614438011480",
    appId: "1:614438011480:web:0ef489c68c7d4d137f002d",
    measurementId: "G-SXTS7MV92V"

})

const db=firebase.firestore();

export default db;