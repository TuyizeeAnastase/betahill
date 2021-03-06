import React from 'react';

const CaseStudies=()=>{
    return (
        <div className="flex"
        style={{
            backgroundColor:"#96D2AA",
            marginTop:"0px",
            marginBottom:"0px"
        }}>
           <div className="font-semibold text-blue-500 text-4xl  leading-relaxed mt-24 ml-24 mr-2 w-full"
           style={{
            marginTop:"5rem",
            marginLeft:"5.625rem",
            color:"#0100CD"
           }}>
           We have successfully partnered with a variety of companies from all over the world.
           </div>
           <div className="grid grid-cols-3 gap-2 place-items-center ml-4 mt-24"
           style={{
            marginTop:"25rem",
            marginRight:"10rem",
            marginLeft:"10rem",
            marginBottom:"10rem"
        }}>
               <img className="mr-14 " alt="coffe-circle" src="../../../images/CoffeeCircle.png" ></img>
               <img className="mr-14 ml-14" alt="global-excel" src="../../../images/GlobalExcel_white11.png" ></img>
               <img className="mr-14 ml-14" alt="jibu" src="../../../images/Jibu.png" ></img>
               <img className="mr-14 ml-14" alt="dalia" src="../../../images/Dalia-Logo-1-white.png" ></img>
               <img className="mr-14 ml-14" alt="coformatique" src="../../../images/Coformatique.png" ></img>
               <img className="mr-14 ml-14" alt="folks" src="../../../images/FOLKDAYS_Logo_2-zeilig_Quadrat_b.png" ></img>
           </div>
        </div>
    )
}

export default CaseStudies;