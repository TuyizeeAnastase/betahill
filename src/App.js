import React from 'react';
import Header from './components/header';
import About from './components/about';
import Process from './components/processSection';
import Solution from './components/solutionProcess';
import CaseStudies from './components/caseStudies'

const App=()=>{
  return (
    <div >
      <Header />
      <About />
      <Process />
      <Solution />
      <CaseStudies />
    </div>
  );
}

export default App;
