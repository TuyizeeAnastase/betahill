import React from 'react';

const About=()=>{
    return (
        <div className="flex"
        style={{
            backgroundColor:"#E5E5E5",
            marginTop:"0px",
            marginBottom:"0px"
        }}>
        <div className="font-semibold text-blue-500 text-3xl tracking-wider leading-tight  ml-24 mr-14 w-5/12"
          style={{
              marginTop:"5rem",
              marginLeft:"5.625rem",
              color:"#0100CD"
          }}
           >
           Our expert testers handle quality assurance so you can focus on building your ideas.
           </div>
           <div className="ml-96 center mt-8 mr-14 text-base mb-20 font-normal not-italic w-1/2"
           style={{
               marginTop:"20rem",
               marginRight:"10rem",
               marginLeft:"10rem",
               color:"#0100CD"
           }}>
           <p>Betahills was founded by Lena Simon in Berlin in 2019.
           We connect European businesses with a team of female software testers in Rwanda. Our team seamlessly integrates into your existing processes at no additional cost and makes sure your solution is flawless and ready for market. Our certified testers are part of Rwanda’s first and only QA and software testing team and work together with experienced technical leads and project managers from the US, Canada and Europe. Betahills connects these female tech professionals in Rwanda with an international client base.
           </p>
           </div>
        </div>
    )
}

export default About;