import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAiPOR7ssyVEGiGG4s_HgHDVH7iQvnV5C8",
  authDomain: "kamachasi-blog-app.firebaseapp.com",
  projectId: "kamachasi-blog-app",
  storageBucket: "kamachasi-blog-app.appspot.com",
  messagingSenderId: "436214791287",
  appId: "1:436214791287:web:2346f8732733b10e251a72",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
