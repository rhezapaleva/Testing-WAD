 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";

 import { getAuth , createUserWithEmailAndPassword,connectAuthEmulator} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js';

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyD8jNipNLpSjTmXQpIysHKjy9ilPmo_Sbw",
   authDomain: "pro-planet-389805.firebaseapp.com",
   projectId: "pro-planet-389805",
   storageBucket: "pro-planet-389805.appspot.com",
   messagingSenderId: "902798693986",
   appId: "1:902798693986:web:300bc3214a5b63a015e33b",
   measurementId: "G-E6C6MR8WE2"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 


 
 const auth = getAuth(app);
//  const db = getFirestore();
//  export default db;
 export default auth