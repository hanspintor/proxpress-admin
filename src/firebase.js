import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    // apiKey: process.env.APP_FIREBASE_APP_ID,
    // authDomain: process.env.APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.APP_FIREBASE_APP_ID,
    apiKey: 'AIzaSyD5uXWSGt2uIXHixz51hP2URf3D59ieTyw',
    authDomain: 'proxpress-629e3.firebaseapp.com',
    projectId: 'proxpress-629e3',
    storageBucket: 'proxpress-629e3.appspot.com',
    messagingSenderId: '744530570009',
    appId: '1:744530570009:web:509e5bc733679d29f37388',
}
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
