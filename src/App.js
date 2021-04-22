import React from 'react';
import Header from './components/header';
import About from './components/about';
import Process from './components/processSection';
import Solution from './components/solutionProcess';
import CaseStudies from './components/caseStudies';
import Impacts from './components/Impacts';
import Contact from './components/Contacts';
import Footer from './components/Footer';

const App=()=>{
  return (
    <div className="w-full">
      <Header />
      <About />
      <Process />
      <Solution />
      <CaseStudies />
      <Impacts />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
