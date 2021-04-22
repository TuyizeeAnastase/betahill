import React from 'react';
import Header from './components/header';
import About from './components/about';
import Process from './components/processSection';
import Solution from './components/solutionProcess';

const App=()=>{
  return (
    <div >
      <Header />
      <About />
      <Process />
      <Solution />
    </div>
  );
}

export default App;
