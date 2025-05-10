import { useState, useRef, useEffect,useContext} from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/City-wide.png";
import { Menu, X, ChevronDown, ChevronUp,Search,ShoppingCartIcon} from "lucide-react";
import Cart from "./Cart";
import {motion} from 'framer-motion'
import Footer from "./Footer";
import { SearchContext } from "../Context/SearchContext";
import { navLinks } from "../Data/Data";

interface NavProps{
  cartItems: any[];
  removeCart: (id: any) => void;
  deleteCart: () => void,
}

const NavBar = ({cartItems,removeCart, deleteCart}:NavProps) => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState<number | null>(null);
  const [isMaterialOpen, setIsMaterialOpen] = useState<boolean>(false);
  const [isDesignOpen, setIsDesignOpen] = useState<boolean>(false);
  const [isProjectOpen, setIsProjectOpen] = useState<boolean>(false);
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false)
  const storeTriggerRef = useRef<HTMLDivElement>(null);
  const designTriggerRef = useRef<HTMLDivElement>(null);
  const projectTriggerRef = useRef<HTMLDivElement>(null);
  const storeDropdownRef = useRef<HTMLDivElement>(null);
  const designDropdownRef = useRef<HTMLDivElement>(null);
  const projectDropdownRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null)
  const {setSearchQuery} = useContext(SearchContext)
  const searchRef = useRef<HTMLDivElement>(null)
  const toggleMobile = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const toggleCart =()=>{
    setIsCartOpen(!isCartOpen)
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isMaterialOpen &&
        storeTriggerRef.current &&
        !storeTriggerRef.current.contains(e.target as Node) &&
        storeDropdownRef.current &&
        !storeDropdownRef.current.contains(e.target as Node)
      ) {
        setIsMaterialOpen(false);
      }

      if (
        isDesignOpen &&
        designTriggerRef.current &&
        !designTriggerRef.current.contains(e.target as Node) &&
        designDropdownRef.current &&
        !designDropdownRef.current.contains(e.target as Node)
      ) {
        setIsDesignOpen(false);
      }

      if (
        isProjectOpen &&
        projectTriggerRef.current &&
        !projectTriggerRef.current.contains(e.target as Node) &&
        projectDropdownRef.current &&
        !projectDropdownRef.current.contains(e.target as Node)
      ) {
        setIsProjectOpen(false);
      } 
      
    };

    if (isMaterialOpen || isDesignOpen || isProjectOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMaterialOpen, isDesignOpen, isProjectOpen]);
  
  useEffect(()=>{
    const handleClickMobileOutside =(e: MouseEvent)=>{
      if(isMobileOpen && mobileRef.current && !mobileRef.current.contains(e.target as Node)){
        setIsMobileOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickMobileOutside)

    return ()=>{
      document.removeEventListener("mousedown",handleClickMobileOutside)
    }
  },[isMobileOpen])

  useEffect(() => {
    if (isMobileOpen || isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileOpen, isCartOpen]);

  const getRefForLink = (link: any) => {
    if (link.storeSubLinks) return storeTriggerRef;
    if (link.designSubLinks) return designTriggerRef;
    if (link.projectSubLinks) return projectTriggerRef;
    return null;
  };

  const handleClose =()=>{
    setIsCartOpen(false)
  }
  
  useEffect(()=>{
    const handleClickOutside =(e: MouseEvent) =>{
      if(searchRef.current && !searchRef.current.contains(e.target as Node)){
        setSearchQuery('')
      }
    } 

    document.addEventListener('mousedown',handleClickOutside)

    return ()=> {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  },[setSearchQuery])
  return (
    <div className="w-full md:p-4 p-2 bg-charcoal relative">
      <div className="flex flex-row items-center justify-between px-4 md:px-8 lg:px-32 mx-auto font-poppins">
        <div className="flex flex-row gap-16">
          <div className="flex items-center gap-2">
            <img
              onClick={() => navigate('/')}
              src={logo}
              alt="Logo Image"
              className="md:w-32 md:h-8 w-16 h-4 cursor-pointer"
            />

            <button
              className="md:hidden flex"
              onClick={() => setIsSearchOpen(true)}
            >
              {isSearchOpen ? (
                <input
                  type="text"
                  className="w-[200px] p-1 outline-none bg-transparent border-2 border-[#E9ECEF] text-white text-[12px] rounded-lg focus:ring-2 ring-sunshineYellow"
                  placeholder="Search here..."
                  onChange={(e)=> setSearchQuery(e.target.value)}
                />
              ) : (
                <div className="text-white p-1 bg-teal rounded-full">
                  <Search className="w-3 h-3" />
                </div>
              )}
            </button>
          </div>

          <div className="flex flex-row text-white gap-10">
            {navLinks.map((link) => (
              <div
                key={link.id}
                className={`md:flex hidden relative justify-center items-center space-x-1 cursor-pointer hover:text-terracotta z-50${
                  activeLink === link.id ? "text-terracotta" : ""
                }`}
                onClick={() => {
                  setActiveLink(link.id);
                  if (link.storeSubLinks) {
                    setIsMaterialOpen((prev) => !prev);
                    setIsDesignOpen(false);
                    setIsProjectOpen(false);
                  } else if (link.designSubLinks) {
                    setIsDesignOpen((prev) => !prev);
                    setIsMaterialOpen(false);
                    setIsProjectOpen(false);
                  } else if (link.projectSubLinks) {
                    setIsProjectOpen((prev) => !prev);
                    setIsDesignOpen(false);
                    setIsMaterialOpen(false);
                  } else {
                    setIsMaterialOpen(false);
                    setIsDesignOpen(false);
                    setIsProjectOpen(false);
                  }
                }}
                ref={getRefForLink(link)}
              >
                <p className="flex flex-row gap-1 justify-center items-center text-sm">
                  {link.id === 1 ?
                    <p onClick={()=> navigate('/')} className="flex flex-row items-center gap-2"><span>{link.icon}</span>{link.name}</p>:
                    <p className="flex flex-row items-center gap-2"><span>{link.icon}</span>{link.name}</p>}
                </p>
                {(link.designSubLinks || link.projectSubLinks || link.storeSubLinks) && (
                  <span className="flex items-center w-4 h-4">
                    {link.designSubLinks && isDesignOpen ? (
                      <ChevronUp />
                    ) : link.projectSubLinks && isProjectOpen ? (
                      <ChevronUp />
                    ) : link.storeSubLinks && isMaterialOpen ? (
                      <ChevronUp />
                    ) : (
                      <ChevronDown />
                    )}
                  </span>
                )}

                {link.storeSubLinks && isMaterialOpen && (
                  <div 
                    className="absolute -left-16 top-full mt-3 w-60 bg-charcoal rounded-lg shadow-lg p-3 z-50"
                    ref={storeDropdownRef}
                  >
                    {link.storeSubLinks.map((sublink) => (
                      <div
                        key={sublink.id}
                        className="px-2 py-2 text-sm text-white hover:bg-teal/30 rounded-lg cursor-pointer"
                      >
                        <h1 className="font-bold">{sublink.title}</h1>
                        <p className="text-whiteText text-[12px] font-thin">{sublink.descr}</p>
                      </div>
                    ))}
                  </div>
                )}

                {link.designSubLinks && isDesignOpen && (
                  <div 
                    className="absolute -left-16 top-full mt-3 w-60 bg-charcoal rounded-lg shadow-lg p-3 z-50"
                    ref={designDropdownRef}
                  >
                    {link.designSubLinks.map((sublink) => (
                      <div
                        key={sublink.id}
                        className="px-2 py-2 text-sm text-white hover:bg-teal/30 rounded-lg cursor-pointer"
                      >
                        <h1 className="font-bold">{sublink.title}</h1>
                        <p className="text-whiteText text-[12px] font-thin">{sublink.descr}</p>
                      </div>
                    ))}
                  </div>
                )}

                {link.projectSubLinks && isProjectOpen && (
                  <div 
                    className="absolute -left-16 top-full mt-3 w-60 bg-charcoal rounded-lg shadow-lg p-3 z-50"
                    ref={projectDropdownRef}
                  >
                    {link.projectSubLinks.map((sublink) => (
                      <div
                        key={sublink.id}
                        className="px-2 py-2 text-sm text-white hover:bg-teal/30 rounded-lg cursor-pointer"
                      >
                        <h1 className="font-bold">{sublink.title}</h1>
                        <p className="text-whiteText text-[12px] font-thin">{sublink.descr}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-row gap-5 md:gap-5 justify-center items-center">
          <input
            type="text"
            className="md:w-[300px] md:flex hidden md:h-8 p-3 outline-none bg-transparent border-2 border-[#E9ECEF] text-white text-[15px] rounded-lg focus:ring-2 ring-sunshineYellow"
            placeholder="Search here..."
            onChange={(e)=>setSearchQuery(e.target.value)}
          />
         <div className="flex justify-center items-cente cursor-pointer hover:bg-whiteText/40 p-2 rounded-full relative"
         onClick={toggleCart}
         >
          <div className="absolute text-white -top-0 bg-terracotta p-1 rounded-full w-4 h-4 flex translate-x-[3px] items-center justify-center text-[12px]">
            {cartItems.length}
          </div>
          <ShoppingCartIcon size={25} className="fill-white stroke-white z-10"/>
         </div>
          <button onClick={toggleMobile} className="md:hidden text-white">~
            {isMobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isCartOpen && (
          <Cart onClose={handleClose} onDelete={removeCart} cartItems={cartItems} resetCart={deleteCart} />
        )}


        {/* Mobile Phone */}
        {isMobileOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            ref={mobileRef} 
            className="block md:hidden fixed inset-0 right-0 top-12 bg-white h-screen w-full p-3 rounded-b-md text-white z-30">
            {navLinks.map((link) => (
              <div
                key={link.id}
                className="flex relative p-2"
              >
                <div className="flex w-full justify-between items-center">
                <p className={`flex flex-row gap-2 justify-center items-center text-xl text-charcoal font-semibold mt-3 ${
                  activeLink === link.id ? "text-terracotta" : "text-charcoal"
                }`}>
                  <span>{link.icon}</span>{link.name}
                </p>
                </div>
              </div>
            ))}

          <div className="pt-20">
            <div className="h-[1px] bg-[#9b9b9b]"/>
            <Footer />
          </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NavBar;