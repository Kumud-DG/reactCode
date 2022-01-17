import React from 'react';
import Navbar from "./components/Navbar/Navbar.js"
import './App.css';
import Footer from "./components/Footer.js";

function App() {
    return (
        <div className="page-container">
        <div className="content-wrap">
            <Navbar />
        </div>
            <Footer />
        </div>

    
  );
}

export default App;
