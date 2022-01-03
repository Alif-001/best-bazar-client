const firebaseConfig = {
  // apiKey: "AIzaSyDInJIJw1C5kDHFlKQHZLTCY5ekJMN-U2Y",
  // authDomain: "fir-test-f43b3.firebaseapp.com",
  // projectId: "fir-test-f43b3",
  // storageBucket: "fir-test-f43b3.appspot.com",
  // messagingSenderId: "272734522738",
  // appId: "1:272734522738:web:58caeaaaccffddcd79a1eb",
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export default firebaseConfig;
