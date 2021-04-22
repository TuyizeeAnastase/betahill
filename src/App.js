import React from 'react';
import Header from './components/header';
import About from './components/about';
import Process from './components/processSection';
import Solution from './components/solutionProcess';
import CaseStudies from './components/caseStudies';
import Impacts from './components/Impacts';
import Contact from './components/Contacts';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

const App=()=>{
  return (
    <BrowserRouter>
    <div className="-mr-14">
      <Header />
      <About />
      <Process />
      <Solution />
      <CaseStudies />
      <Impacts />
      <Contact />
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
