// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBQAWxYvx8HKXtmhwyDJpgD7M8l1eol130",

  authDomain: "testlogin-8fdbe.firebaseapp.com",

  projectId: "testlogin-8fdbe",

  storageBucket: "testlogin-8fdbe.firebasestorage.app",

  messagingSenderId: "858039360960",

  appId: "1:858039360960:web:235dd75d8e960872173c25",

  measurementId: "G-4J7EBGKLKY"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
