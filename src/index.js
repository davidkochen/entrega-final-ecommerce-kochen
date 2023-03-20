import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdCngkMukcMdcuypt_ajBPUCav9ynBNW4",
  authDomain: "entrega-ecommerce.firebaseapp.com",
  projectId: "entrega-ecommerce",
  storageBucket: "entrega-ecommerce.appspot.com",
  messagingSenderId: "555401588674",
  appId: "1:555401588674:web:a7b029aca0e02f3d66705b"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

