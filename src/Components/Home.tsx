import { JSX, useEffect } from "react";
import { useState, useRef,useContext } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import consimage1 from "../assets/construction1.jpg";
import consimage2 from '../assets/construction2.jpg'
import { CardDetails, Choose,ServiceDetails } from "../Data/Data.tsx";
import {ArrowRightCircle,X,ArrowRightCircleIcon,ArrowLeftCircleIcon,} from "lucide-react";
import { motion } from "framer-motion";
import engineer from "../assets/workers.png";
import { SearchContext } from "../Context/SearchContext.tsx";
import highlightText from '../Data/highlightedText.tsx'
import SearchedItem from "./SearchedItem.tsx";

interface serviceProps {
  title: string;
  subTitle: string;
  icon: JSX.Element;
  description: string;
}

const Home = () => {
  const [selectedService, setSelectedService] = useState<serviceProps | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const ServiceRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate();
  const location = useLocation()
  const [current, setCurrent] = useState(0)
  const {searchQuery} = useContext(SearchContext) 


  const images = [consimage1,consimage2]

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrent((prev) => (prev + 1) % images.length)
    },10000)

    return () => clearInterval(interval)
  }, [images.length])

  useEffect(()=>{
    const handleClickOutside =(e: MouseEvent)=>{
      if(ServiceRef.current && !ServiceRef.current.contains(e.target as Node)){
        setSelectedService(null)
      }
    }

    document.addEventListener('mousedown',handleClickOutside)

    return ()=>{
      document.removeEventListener('mousedown', handleClickOutside)
    }
  },[])

  useEffect(()=>{
    if(selectedService){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'auto'
    }
  })

  useEffect(()=>{
    if(location.hash){
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  },[location])

  return (
    <div className="w-full min-h-scree font-poppins">
        <SearchedItem />
      {/* Image Part */}
      <div className="w-full md:h-96 h-60 relative overflow-hidden">
      <div className="h-96 w-full bg-gradient-to-r from-charcoal/70 to-transparent absolute z-10" />
        {images.map((img, index)=>
          <img
          key={index}
          src={img}
          alt={`image ${index}`}
          className={`absolute w-full h-full object-cover ${
            index === current ? "opacity-100 " : "opacity-0"
          }`}
        />
        )}

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-6 md:top-12 left-6 md:left-36 transform -translate-x-1/2 w-full max-w-[350px] md:max-w-[1250px] mx-auto flex flex-col z-20"
        >
          <p className="text-white text-[15px] mb-3">
            Welcome to CityWide Market
          </p>
          <div className="max-w-[380px]">
            <p className="md:text-[35px] text-[25px] text-white font-bold">
              Your <span className="text-terracotta">Gateway to</span> Smart
              Construction
            </p>
          </div>

          <div className="flex flex-row text-white mt-8 gap-10 md:gap-20">
            <button
              className="p-[10px] bg-teal rounded-[5px] text-[15px] cursor-pointer hover:bg-[#4dbcaf] poin"
              onClick={() => navigate("/Designs")}
            >
              Explore Design
            </button>
            <button className="p-[10px] bg-terracotta rounded-[5px] text-[15px] cursor-pointer hover:bg-[#db816a]">
              Explore Products
            </button>
          </div>
        </motion.div>
      </div>

      {/* Projects Part */}
      <div className="bg-softCream flex flex-col max-w-[380px] md:max-w-[1250px] m-auto p-2 md:p-0 pb-10">
        <div className="mt-5">
          <h1 className="text-charcoal font-bold text-[18px] md:text-[20px]">
            The Architecture & Construction Marketplace
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-10 pb-10">
            {CardDetails.map((card, index) => (
              <div
                key={index}
                className="bg-black w-[350px] h-64 relative transform ease-in-out duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={()=> navigate('/Designs')}
              >
                <img
                  src={card.photo}
                  alt={card.name}
                  className="w-full h-full object-cover hover:opacity-45"
                />
                <div className="absolute bg-softCream w-64 h-16 bottom-0 font-poppins flex flex-col gap-1">
                  <h1 className="text-lightGray font-bold mt-2 ">
                    {card.name}
                  </h1>
                  <p className="text-lightGray">{card.projects} + Projects</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Part */}
      <div className="bg-charcoal flex flex-row items-center w-full gap-2 md:p-5 p-3">
        <ArrowLeftCircleIcon
          className="w-10 h-10 text-white flex md:hidden cursor-pointer hover:text-terracotta"
          onClick={scrollLeft}
        />
        <div
          ref={scrollRef}
          className="flex flex-row items-center gap-3 md:gap-5 md:max-w-[1250px] m-auto overflow-y-auto no-scrollbar"
        >
          {ServiceDetails.map((service, index) => (
            <div
              key={index}
              id = {service.title.replace(/\s+/g, '-').toLowerCase()}
              className="bg-softCream min-w-[200px] w-[200px] md:w-[400px] h-16 rounded flex items-center cursor-pointer transition-transform duration-300 ease-in-out hover:bg-sunshineYellow"
              onClick={() => setSelectedService(service)}
            >
              <p className="p-2 md:p-4 ">{service.icon}</p>
              <div className="flex flex-col">
                <p className="text-charcoal font-bold text-[14px] md:text-[20px]">
                  {service.title}
                </p>
                <p className="text-lightGray text-[12px]">{highlightText(service.subTitle, searchQuery)}</p>
              </div>
            </div>
          ))}
        </div>
        <ArrowRightCircleIcon
          className="w-10 h-10 text-white flex md:hidden cursor-pointer hover:text-terracotta"
          onClick={scrollRight}
        />
      </div>

      {selectedService && (
        <div 
        className="bg-black w-full min-h-screen fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-softCream w-[400px] p-6 rounded-lg shadow-lg relative" ref={ServiceRef}>
            <button
              className="absolute top-2 right-3 text-white text-xl bg-terracotta p-1 rounded-full"
              onClick={() => setSelectedService(null)}
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex flex-col items-start gap-3">
              <div className="text-charcoal text-[20px]">
                {selectedService.icon}
              </div>
              <h1 className="text-[20px] font-bold text-charcoal">
                {selectedService.subTitle}
              </h1>
              <p className="text-[15px] font-semibold text-terracotta">
                {highlightText(selectedService.subTitle, searchQuery)}
              </p>
              <p className="text-[12px] font-normal text-lightGray">
                {highlightText(selectedService.description, searchQuery)}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* About Part */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="bg-softCream flex flex-row"
      >
        <div className="flex flex-row -mt-5 md:mt-10 max-w-[1250px] m-auto md:space-x-72 md:pr-8">
          <div className="flex flex-col gap-3 md:gap-5 sm:pl-0 pl-5">
            <h1 className="text-charcoal font-bold text-[25px]">About Us</h1>
            <p className="max-w-[600px] md:w-[600px] w-[360px] text-[15px] text-lightGray">
              City Wide Market is a premier platform dedicated to architecture,
              structural design, and the implementation of construction
              projects. We connect clients with top-tier professionals and
              resources, ensuring every project is built with precision and
              innovation. Whether you're planning, designing, or constructing,
              our expertise transforms visions into reality—creating modern,
              efficient, and sustainable spaces
            </p>
          </div>
          <img
            src={engineer}
            alt="Engineer Image"
            className="w-80 h-80 md:block hidden"
          />
        </div>
      </motion.div>

      {/* Why choose Us part */}
      <div className="bg-softCream flex flex-col mt-16 md:mt-20 max-w-[1250px] m-auto p-5">
        <h1 className="text-charcoal text-[20px] font-bold">
          Why Choose City Wide Market?
        </h1>
        <div className="flex flex-col md:flex-row gap-5 mt-10">
          {Choose.map((choose, index) => (
            <div
              key={index}
              className="bg-softCream flex flex-col gap-4 w-[350px] md:w-96 p-4 border-2 border-teal rounded"
            >
              <h1 className="text-charcoal font-bold text-[15px]">
                {choose.title}
              </h1>
              <p className="text-lightGray text-[15px]">{choose.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Part */}
      <div className="bg-charcoal w-full p-3 mt-5 md:mt-10 ">
        <div className="max-w-[1250px] m-auto flex flex-col jus items-center gap-2 md:gap-5">
          <h1 className="text-white font-bold text-[20px]">
            Ready to Start Your Project?
          </h1>
          <p className="text-[13px] text-white font-thin text-center max-w-[500px]">
            Contact our team of experts to discuss your needs and get started on
            your dream home today
          </p>

          <div 
          className="flex flex-row gap-3 bg-teal p-2 w-48 justify-center items-center rounded hover:bg-[#4dbcaf]"
          onClick={()=> navigate('/Contact')}
          >
            <button className="text-white text-[15px]">Contact Us</button>
            <ArrowRightCircle className="text-white text-[15px] " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
