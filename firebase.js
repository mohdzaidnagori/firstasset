// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import {
    getAuth,connectAuthEmulator
} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBMD666YPlRPRAXUTmuquGCnNZG9HdthDo",
    authDomain: "first-asset-otp.firebaseapp.com",
    projectId: "first-asset-otp",
    storageBucket: "first-asset-otp.appspot.com",
    messagingSenderId: "515508807198",
    appId: "1:515508807198:web:b916d5d6d89a11ed34f00f"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app)




export {
    auth
}
