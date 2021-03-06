import React, {useState} from 'react';
import style from './style/style1';

const Contact=()=>{
  const [hover, setHover] = useState(false);
    return (
      <div className="flex" style={{
        backgroundColor:"#96D2AA",
        marginTop:"0px",
        marginBottom:"0px",
        width:"100%"
    }} 
        >
        <div className="ml-24 mt-20 text-justify w-6/12 h-24 font-medium non-italic text-6xl leading-none" 
        style={{
          marginLeft:"5.625rem",
          marginTop:'5.5625rem',
          color:"#0100CD"
         }}>
        Want to know more?
        Get in touch. 
        </div>
        <button className="border-b-2 border-blue-900 text-blue-600 border-2 border-blue-600 text-center mt-96 ml-32 mb-28 w-44 h-12 hover:text-gray-50 hover:bg-green-300"
        
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
    )
}

export default Contact;