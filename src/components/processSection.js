import React from 'react';

const Process=()=>{
    return (
        <div className=" flex" style={{
            backgroundColor:"#96D2AA",
            marginTop:"0px",
            marginBottom:"0px"
        }}>
           <div className="font-semibold text-blue-500 text-4xl tracking-wider leading-relaxed mt-24 ml-24 mr-14 w-2/6"
           style={{
            marginTop:"5rem",
            marginLeft:"5.625rem",
            color:"#0100CD"
           }}>
           Seamless integration. Thorough testing. Better results.
           </div>
           <div className="text-blue-500 ml-96 center mt-8 mr-14 text-base mb-20 font-normal not-italic w-1/2"
           style={{
            marginTop:"20rem",
            marginRight:"10rem",
            marginLeft:"15rem",
            color:"#0100CD"
        }}
           >
           <p>Our software testers are led by project managers and lead developers from the US, Canada and Europe with more than 10 years of experience in QA and software testing. 
           This guarantees clear communication and a team with an in-depth understanding of your business and testing needs. 
           After an initial assessment, we tailor our workflow to seamlessly integrate into your current processes. 
           We can use your preferred tools and adapt our services based on your communication models, timeline, and more.
           </p>
           </div>
        </div>
    )
    }

export default Process;