import React from 'react';
import './App.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import Nav from './component/Nav';
import Start from './component/inicio';
import Proyect from './component/proyect';
import Aboutme from './component/Aboutme';
import Skill from './component/Skill';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <Nav/>
      <Start/>
      <Proyect/>
      <Aboutme />
      <Skill/>
      <Footer/>
    </>
  );
}

export default App;
