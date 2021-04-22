import React from 'react';
import Hero from './heroSection';
import {  Link as Links} from "react-router-dom";

class Header extends React.Component{


    render(){
        return (
          <div >
          <div id="nav" >
            <div  className="border-b-2 border-blue-900 fixed flex items-center justify-between bg-green-300 static" style={{width:"100%",backgroundColor:"#96D2AA"}}>
            <Links to="/" > 
            <div className="flex flex-row ml-16 mt-3.5 mb-3.5" >
                <a href="/#">
                  <img alt="logo" src="../../../images/logo.png" className="h-6 w-6"></img>
                </a>
                <h2 className="ml-3.5" 
                style={{
                  color:"#0100CD"
                }}
                >betahills</h2>
              </div>
              </Links>
              <div className="flex-row-reverse ml-44 mt-3.5 mb-3.5 text-base leading-5 tracking-widest non-italic  font-normal mr-7 h-5 "
              style={{
                color:"#0100CD"
              }}>
                <a href="/#" className="mx-5">About</a>
                <a href="/#" className="mx-5">Process</a>
                <a href="/#" className="mx-5">Solutions</a>
                <a href="/#" className="mx-5">Case studies</a>
                <a href="/#" className="mx-5">Impact</a> 
                <a href="/#" className="mx-5">Contact</a>
              </div>
            </div>
            <Hero />
          </div>
          </div>
        )
    }
    
}

export default Header;