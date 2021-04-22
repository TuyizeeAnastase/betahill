import React, {useState} from 'react';
import style from './style/style1';

const Contact=()=>{
  const [hover, setHover] = useState(false);
    return (
        <div style={{backgroundColor:"#96D2AA"}}>
      <div className="flex">
        <div className="flex ml-24 mt-20 text-justify w-5/12 h-24 font-medium non-italic text-6xl leading-none "
        style={{
          marginLeft:"5.625rem",
          marginTop:'15.5625rem',
          color:"#0100CD"
         }}>
        Want to know more?
        Get in touch. 
        </div>
        <button className="relative text-blue-600 border-2 border-blue-600 text-center mt-96 ml-32 mb-28 w-44 h-12 hover:text-gray-50 hover:bg-green-300"
        style={{
          border:"#0100CD",
        }}
        
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
        info@betahills.com
        </button>
      </div>
      </div>
    )
}

export default Contact;