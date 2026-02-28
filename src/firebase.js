// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp0WKZw76p3i6gc3mv9HLFzb3XHIqWQp8",
  authDomain: "facebook-clone-a5f24.firebaseapp.com",
  projectId: "facebook-clone-a5f24",
  storageBucket: "facebook-clone-a5f24.firebasestorage.app",
  messagingSenderId: "63088479294",
  appId: "1:63088479294:web:0ff6a8a2b03da07b0c556f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        
        // Update the user's displayName
        await updateProfile(user, {
            displayName: name
        });
        
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
        console.log("Account created successfully!");
        return true;
    } catch (error) {
        console.error("Error signing up:", error);
        throw error; // Re-throw to handle in component
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("Login successful!");
        return true;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error; // Re-throw to handle in component
    }
}

const logout = () => {
    signOut(auth);
}

export { auth, db, login, signup, logout };
