import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence, setPersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';



const firebaseConfig = { // Have the firebase config here
    apiKey: "AIzaSyDI-ZdOq0srwmtG2-rvnc3tNGREoUSgeXw",
    authDomain: "freviapp-77c93.firebaseapp.com",
    projectId: "freviapp-77c93",
    storageBucket: "freviapp-77c93.appspot.com",
    messagingSenderId: "894938225802",
    appId: "1:894938225802:web:c66971310050017e2ce173"
};


const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with persistence
const auth = initializeAuth(app);
const persistencePromise = setPersistence(auth, getReactNativePersistence(AsyncStorage));

export { auth, persistencePromise };
export default app;