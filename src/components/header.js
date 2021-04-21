import React from 'react';

const Header=()=>{
    return (
        <div className="flex items-center justify-between bg-green-300 h-12 ">
          <div className="flex flex-row ml-9 mt-3.5 mb-3.5">
            <a href="/#">
              <img alt="logo" src="../../../images/logo.png" className="h-6 w-6"></img>
            </a>
            <h2 className="text-blue-600 ml-3.5">betahills</h2>
          </div>
          <div className="flex flex-row-reverse mt-3.5 mb-3.5 text-base leading-5 tracking-widest non-italic  font-normal mr-5 h-5 text-blue-600">
            <a href="/#" className="mx-5">About</a>
            <a href="/#" className="mx-5">Process</a>
            <a href="/#" className="mx-5">Solutions</a>
            <a href="/#" className="mx-5">Case studies</a>
            <a href="/#" className="mx-5">Impact</a>
            <a href="/#" className="mx-5">Contact</a>
          </div>
        </div>
    )
}

export default Header;