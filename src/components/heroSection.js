import React, {useState} from 'react';
import style from './style/style';

const Hero=()=>{
  const [hover, setHover] = useState(false);
  return (
    <div style={{width:"100%",backgroundColor:"#96D2AA"}}>
      <div className="flex">
        <div className="ml-24 mt-20 text-justify w-6/12 h-24 font-medium non-italic text-6xl leading-none " 
        style={{
          marginleft:"5.625rem",
          marginTop:"15.5625rem",
          marginRight:"10rem",
          marginBottom:"20rem",
          color:"#0100CD"
        }}>
          We do software testing for flawless products. With a purpose.  
        </div>
        <div style={{
          marginTop:"5rem",
          marginleft:"25rem"
        }}>
        <button className="border-b-2 border-blue-900  text-blue-600 border-2 border-blue-600 text-center mt-96 ml-16 mb-28 w-32 h-12 hover:text-gray-50" 

        
        onMouseEnter={
          ()=>{
            setHover(true);
          }}
        onMouseLeave={
          ()=>{
            setHover(false)
          }}
        style={{
          ...style.normal,
          ...(hover?style.hover:null)
        }}
        >
          Get in touch
        </button>
        </div>
      </div>
      </div>
  )
}

export default Hero;