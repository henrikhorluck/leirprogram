import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAJ1b7ZHkkegzVZ0m0tynZXgTuakynFReQ",
  authDomain: "leirprogram.firebaseapp.com",
  databaseURL: "https://leirprogram.firebaseio.com",
  projectId: "leirprogram",
  storageBucket: "leirprogram.appspot.com",
  messagingSenderId: "506598439556"
};

firebase.initializeApp(firebaseConfig);

const App = () => (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Dette er en start, kom tilbake senere.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );

export default App;
