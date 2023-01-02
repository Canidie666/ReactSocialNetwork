import React from "react";
import './App.css';
import Header from './components/Header/Header.js'
import NavBar from './components/NavBar/NavBar.js';
import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer.js';

const App = () => {
  return (
    <div className="app-wrapper">
     <Header />
     <NavBar />
     <Main />
     <Footer />  
    </div>
  )
}

export default App;