import React, { useState } from "react";
import logo from "../assets/City-wide.png";
import { Menu, X,ChevronDown,ChevronUp,Search } from 'lucide-react';

const navLinks = [
  { id: 1, name: "Home" },
  { id: 2, name: "Projects" },
  { id: 3, name: "Materials", icon: <ChevronDown />, subLinks: ["Concrete & Masonry","Roofing","Hardware & Fasteners","Plumbing Supplies","Tools"] },
];

const NavBar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<number | null>(null);
  const [isMaterialOpen, setIsMaterialOpen] = useState<boolean>(false)
  const [isMobileOpen, setIsMobileOpen] =  useState<boolean>(false)
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false)

  const toggleMobile = ()=>{
    setIsMobileOpen(!isMobileOpen)
  }
  
 
  return (
    <div className="w-full md:p-4 p-2 bg-charcoal ">
      <div className="flex flex-row items-center justify-between md:max-w-[1250px] max-w-[350px] mx-auto font-poppins">
        
        
        <div className="flex items-center gap-2">
        <img src={logo} alt="Logo Image" className="md:w-32 md:h-8 w-16 h-4" />
        <button 
        className="md:hidden flex"
        onClick={() => setIsSearchOpen(true)}
        >
        {isSearchOpen ? <input type="text" name="" id="" className="md:w-[500px] w-[200px] md:flex md:h-8 h-2 p-3 outline-none bg-transparent border-2 border-[#E9ECEF] text-white text-[15px] rounded-lg focus:ring-2 ring-sunshineYellow" placeholder="Search here..."/>
        : <div className="text-white p-1 bg-teal rounded-full"><Search className = "w-3 h-3"/></div>
        }
        </button>
        </div>
        <input type="text" name="" id="" className="md:w-[500px] md:flex hidden md:h-8 p-3 outline-none bg-transparent border-2 border-[#E9ECEF] text-white text-[15px] rounded-lg focus:ring-2 ring-sunshineYellow" placeholder="Search here..."/>

        <div className="flex flex-row text-white gap-10">

            <button 
            onClick={toggleMobile}
            className="md:hidden"
            >
                {isMobileOpen ? <X /> : <Menu />}
            </button>

          {navLinks.map((link) => (
            <div
              key={link.id}
              className={`md:flex hidden relative justify-center items-center space-x-1 cursor-pointer hover:text-terracotta ${
                activeLink === link.id ? "text-terracotta" : ""
              }`}
              onClick={() => {
                setActiveLink(link.id);
                if(link.subLinks){
                    setIsMaterialOpen((prev)=> !prev)
                }else{
                    setIsMaterialOpen(false)
                }
              }}

            >
              <span>{link.name}</span>
              {link.subLinks && (
                <span className="flex items-center w-4 h-4">{isMaterialOpen ? <ChevronUp /> : <ChevronDown />}</span>
              )}

              {link.subLinks && isMaterialOpen && (
                <div className="absolute left-0 top-full mt-2 w-48 bg-charcoal rounded-lg shadow-lg">
                    {link.subLinks.map((sublink,index)=>
                        <div key={index} className="px-4 py-2 text-sm text-white hover:bg-sunshineYellow">
                            {sublink}
                        </div>
                    )}
                </div>
              )}
            </div>
          ))}
          <button className="md:flex hidden p-[5px] bg-teal hover:bg-terracotta rounded-md">Contact us</button>
        </div>
        

        {isMobileOpen && (
            <div className="block md:hidden absolute right-5 top-10 bg-charcoal w-36 p-3 rounded-b-md text-white">
                {navLinks.map((link)=>
                <div key={link.id}
                className={`p-2 flex relative${
                    activeLink === link.id ? "text-sunshineYellow" : ""
                }`}
                onClick={()=>{
                    setActiveLink(link.id);
                    if(link.subLinks){
                       setIsMaterialOpen((prev)=> (!prev)) 
                    }else{
                        setIsMaterialOpen(false)
                    }
                }}
                >
                    <span>{link.name}</span>
                    {link.icon && (
                        <span>{isMaterialOpen ? <ChevronUp/>: <ChevronDown />}</span>
                    )}

                    {link.subLinks && isMaterialOpen && (
                        <div className="absolute right-3 top-32 mt-2 bg-white rounded-lg shadow-lg border-[2px] border-teal">
                            {link.subLinks.map((sublink, index)=>
                                <div key={index} className="px-4 py-2 text-sm text-black hover:bg-sunshineYellow">
                                {sublink}
                                </div>
                            )}
                        </div>
                    )}
                </div>
                )}
            </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
