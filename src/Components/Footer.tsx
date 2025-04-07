import React from 'react'
import { footerLinks } from '../Data/Data'

const Footer:React.FC = () => {
  return (
    <div className='white relative'>
        <div className='container mx-auto px-4 md:px-8 lg-px-40 font-poppins'>
        <div className="bg-softCream flex flex-col md:flex-row justify-between max-w-[1250px] m-auto md:mt-5 p-5 ">
        {footerLinks.map((footerLink, index)=>
          <div 
          key={index}
          className="flex flex-col gap-1 md:gap-2"
          >
            <h1 className="text-charcoal font-bold text-[20px] mb-2 md:mb-3">{footerLink.title}</h1>
            {footerLink.links.map((link, index)=>
              <div 
              key={index}
              className="flex flex-col text-[13px] text-lightGray font-thin hover:underline hover:text-terracotta"
              >
                <a href="">{link}</a>
              </div>
            )}
          </div>
        )}
      </div>

        {/* Line Part */}
      <div className="w-full h-[1px] bg-[#a2a2a2] mt-2 md:mt-10"/>

        {/* Footer Part */}
      <div className="flex flex-col mt-3 max-w-[1250px] m-auto pb-3 md:pl-0 pl-5">
        <div className="flex flex-col justify-start md:justify-between gap-2">
          <p className="text-[13px] text-charcoal">&copy;{new Date().getFullYear()} CWM CITY WIDE MARKET. All rights reserved</p>
          <div className="flex flex-row gap-5 text-[13px] text-charcoal">
            <p className="hover:text-terracotta underline cursor-pointer">Terms</p>
            <p className="hover:text-terracotta underline cursor-pointer">Privacy</p>
            <p className="hover:text-terracotta underline cursor-pointer">Cookies</p>
          </div>
        </div>
      </div>
        </div>
      
    </div>
  )
}

export default Footer
