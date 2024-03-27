import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyAJmAQ2_mHseZxoirj-emtFEayJlzj6nvI",
    authDomain: "t2mfutweb.firebaseapp.com",
    projectId: "t2mfutweb",
    storageBucket: "t2mfutweb.appspot.com",
    messagingSenderId: "1012766328960",
    appId: "1:1012766328960:web:b6234a920061cae484fe65",
    measurementId: "G-S80LJ7Z6RX"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
