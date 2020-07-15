import firebase from "firebase";

const firebaseApp = firebase.initialzeApp({
        apiKey: "AIzaSyAYeInjdy3LJfnE2rKLx4MSPYhbjTm__7A",
        authDomain: "clone-ccbaa.firebaseapp.com",
        databaseURL: "https://clone-ccbaa.firebaseio.com",
        projectId: "clone-ccbaa",
        storageBucket: "clone-ccbaa.appspot.com",
        messagingSenderId: "212309819411",
        appId: "1:212309819411:web:52c1065a309dd0afd9ffe6",
        measurementId: "G-E4K8T1RP2J",
});


const auth = firebase.auth();

export { auth };