import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HowItWorks from './components/HowItWorks'
import Download from './components/Download';
import './App.css';


function App() {
  return (
    <div className="App">
     <Header/>
     <div className='main-content'>
     <About/>
     <Features/>
     </div>
     <HowItWorks/>
     <Download/>
    
     <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
