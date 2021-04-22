import React from 'react';
import Header from './components/header';
import About from './components/about';
import Process from './components/processSection';
import Solution from './components/solutionProcess';
import CaseStudies from './components/caseStudies';
import Impacts from './components/Impacts';
import Contact from './components/Contacts';

const App=()=>{
  return (
    <div >
      <Header />
      <About />
      <Process />
      <Solution />
      <CaseStudies />
      <Impacts />
      <Contact />
    </div>
  );
}

export default App;
