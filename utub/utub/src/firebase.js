import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Import Auth functions
import { getFirestore, doc, setDoc } from "firebase/firestore"; // Import Firestore functions (if needed)


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional




// This Will Change Acc To Different FireBase Project  -> 

// const firebaseConfig = {
//   apiKey: "AIzaSyDdnQFCZGr-MaNV-rpkz8G9DoOFsqWafPI",
//   authDomain: "finance-tracker-af410.firebaseapp.com",
//   projectId: "finance-tracker-af410",
//   storageBucket: "finance-tracker-af410.appspot.com",
//   messagingSenderId: "743352850082",
//   appId: "1:743352850082:web:5f21e1c2153a1cd70029fb",
//   measurementId: "G-4RZQDB0QYE",
// };





// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
