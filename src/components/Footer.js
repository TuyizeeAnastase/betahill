import React from 'react';

const Footer=()=>{
    return (
        <div className="bg-blue-700">
          <div className="flex justify-between">
             <div className="flex h-24 ml-8 mt-8 flex-row ">
               <h3 className="mr-4 w-44">Musterstraße 1212345 Berlin</h3>
               <h3 className="w-36">info@betahills.com +49(0) 151 100 321</h3>
             </div>
             <div className="mt-8 flex-row-reverse">
              <h3 className="mr-8 w-32">© 2020 betahills Imprint / Privacy</h3>
             </div>
          </div>
        </div>
    )
}

export default Footer;