// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCPRPTeJlNN60uwL2Z0FXD8lRQo3QxjpTQ",
    authDomain: "andersondias-c1fa9.firebaseapp.com",
    databaseURL: "https://andersondias-c1fa9-default-rtdb.firebaseio.com",
    projectId: "andersondias-c1fa9",
    storageBucket: "andersondias-c1fa9.appspot.com",
    messagingSenderId: "653622965495",
    appId: "1:653622965495:web:ffce5dc7d3d52f47c04ff2",
    measurementId: "G-RQ49QCFL0E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)

export default db
