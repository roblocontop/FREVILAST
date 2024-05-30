import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = { // Have the firebase config here
    apiKey: "AIzaSyDI-ZdOq0srwmtG2-rvnc3tNGREoUSgeXw",
    authDomain: "freviapp-77c93.firebaseapp.com",
    projectId: "freviapp-77c93",
    storageBucket: "freviapp-77c93.appspot.com",
    messagingSenderId: "894938225802",
    appId: "1:894938225802:web:c66971310050017e2ce173"
};


const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});


export { auth }
export default app;