import React from 'react';

const CaseStudies=()=>{
    return (
        <div 
        style={{
            backgroundColor:"#96D2AA",
            marginTop:"0px",
            marginBottom:"0px"
        }}>
           <div className="font-semibold  text-3xl tracking-wider leading-tight mt-20 ml-24 mr-14 w-4/12"
           style={{
            marginTop:"5rem",
            marginLeft:"5.625rem",
            color:"#0100CD"
           }}>
           We have successfully partnered with a variety of companies from all over the world.
           </div>
           <div className="grid grid-cols-3 gap-2 place-items-center ml-64 mt-24"
           style={{
            marginTop:"7rem",
            marginRight:"15rem",
            marginLeft:"45rem"
        }}>
               <img alt="coffe-circle" src="../../../images/CoffeeCircle.png" ></img>
               <img alt="global-excel" src="../../../images/GlobalExcel_white11.png" ></img>
               <img alt="jibu" src="../../../images/Jibu.png" ></img>
               <img alt="dalia" src="../../../images/Dalia-Logo-1-white.png" ></img>
               <img alt="coformatique" src="../../../images/Coformatique.png" ></img>
               <img alt="folks" src="../../../images/FOLKDAYS_Logo_2-zeilig_Quadrat_b.png" ></img>
           </div>
        </div>
    )
}

export default CaseStudies;