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
const analytics = getAnalytics(app);

export default {
  app,
  analytics
};