/** Components */
import React from 'react';
import Header from './components/Header'
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer'

/** Boostrap */
import 'bootstrap/dist/css/bootstrap.min.css';


/** import CSS */
import './App.css';
import './components/Features.css'
import './components/Testimonials.css'


function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Features />
        <Testimonials />
        <CallToAction />
        <Footer />
      </div>
    </>
  );
}

export default App;
