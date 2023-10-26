import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"


const firebaseConfig = {
   apiKey: "AIzaSyB-qg4Ld6TQuTcfJRKWxNEG4aK2l4pCxHQ",
  authDomain: "wad-project-dc77e.firebaseapp.com",
  projectId: "wad-project-dc77e",
  storageBucket: "wad-project-dc77e.appspot.com",
  messagingSenderId: "831406235846",
  appId: "1:831406235846:web:2ebb78ed7309bd5b9ab7c7",
  measurementId: "G-1M8B3BKT2D"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth=getAuth(app);

export {auth};
