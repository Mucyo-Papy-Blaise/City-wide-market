import React from "react";
import consimage1 from "../assets/construction1.jpg";
import { CardDetails,Choose,footerLinks } from "../Data/Data.ts";
import { HardHat, PencilRuler, Hammer,ArrowRightCircle } from "lucide-react";
import { motion } from "framer-motion";
import engineer from '../assets/workers.png'

const Home: React.FC = () => {
  const ServiceDetails = [
    {
      title: "Construction Service",
      desc: "Implementation of Projects",
      icon: <HardHat className="w-8 h-8 tex-charcoal" />,
    },
    {
      title: "Architecture Service",
      desc: "Design and Planning",
      icon: <PencilRuler className="w-8 h-8 text-charcoal" />,
    },
    {
      title: "Building Materials",
      desc: "Supply of Quality Materials",
      icon: <Hammer className="w-8 h-8 text-charcoal" />,
    },
  ];
  8;

  return (
    <div className="w-full min-h-scree font-poppins">
      <div className="w-full h-80 bg-blue-600 relative overflow-hidden">
        <img
          src={consimage1}
          alt="constructio-image"
          className="w-full h-full object-cover"
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-12 left-36 transform -translate-x-1/2 w-full max-w-[1250px] mx-auto flex flex-col"
        >
          <p className="text-white text-[15px] mb-3">
            Welcome to CityWide Market
          </p>
          <div className="max-w-[380px]">
            <p className="text-[35px] text-white font-bold">
              Your <span className="text-terracotta">Gateway to</span> Smart
              Construction
            </p>
          </div>

          <div className="flex flex-row text-white mt-8 gap-20">
            <button className="p-[10px] bg-teal rounded-[5px] text-[15px] cursor-pointer hover:bg-[#4dbcaf]">
              Explore Design
            </button>
            <button className="p-[10px] bg-terracotta rounded-[5px] text-[15px] cursor-pointer hover:bg-[#db816a]">
              Explore Design
            </button>
          </div>
        </motion.div>
      </div>

      <div className="bg-softCream flex flex-col max-w-[1250px] m-auto pb-10">
        <div className="mt-5">
          <h1 className="text-charcoal font-bold text-[20px]">
            The Architecture & Construction Marketplace
          </h1>

          <div className="grid grid-cols-3 mt-8">
            {CardDetails.map((card, index) => (
              <div
                key={index}
                className="bg-black w-[350px] h-64 relative hover:scale-105 transform ease-in-out duration-300 hover:border-2 cursor-pointer"
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

      <div className="bg-charcoal w-full p-5">
        <div className="flex flex-row gap-8 max-w-[1250px] m-auto">
          {ServiceDetails.map((service, index) => (
            <div
              key={index}
              className="bg-softCream w-[375px] h-16 rounded flex items-center cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-sunshineYellow"
            >
              <p className="text-black p-4">{service.icon}</p>
              <div className="flex flex-col">
                <p className="text-charcoal font-bold ">{service.title}</p>
                <p className="text-lightGray text-[12px]">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      className="bg-softCream flex flex-row space-x-64 max-w-[1250px] m-auto"
      >
      <div className="flex flex-col mt-10 gap-5">
      <h1 className="text-charcoal font-bold text-[25px]">About Us</h1>
        <p className="max-w-[600px] text-[15px] text-lightGray">
          City Wide Market is a premier platform dedicated to architecture,
          structural design, and the implementation of construction projects. We
          connect clients with top-tier professionals and resources, ensuring
          every project is built with precision and innovation. Whether you're
          planning, designing, or constructing, our expertise transforms visions
          into reality—creating modern, efficient, and sustainable spaces
        </p>
      </div>
      <img src={engineer} alt="Engineer Image" className="w-80 h-80"/>
      </motion.div>

      <div className="bg-softCream flex flex-col mt-20 max-w-[1250px] m-auto">
        <h1 className="text-charcoal text-[20px] font-bold">Why Choose City Wide Market?</h1>
          <div className="flex flex-row gap-5 mt-10">
          {Choose.map((choose,index)=>
            <div key={index} className="bg-softCream flex flex-col gap-4 w-96 p-4 border-2 border-teal rounded">
              <h1 className="text-charcoal font-bold text-[15px]">{choose.title}</h1>
              <p className="text-lightGray text-[15px]">{choose.description}</p>
            </div>
          )}
          </div>
      </div>

      <div className="bg-charcoal w-full p-3 mt-10 ">
        <div className="max-w-[1250px] m-auto flex flex-col jus items-center gap-5">
          <h1 className="text-white font-bold text-[20px]">Ready to Start Your Project?</h1>
          <p className="text-[13px] text-white font-thin text-center max-w-[500px]">Contact our team of experts to discuss your needs and get started on your dream home today</p>
          
          <div className="flex flex-row gap-3 bg-teal p-2 w-48 justify-center items-center rounded hover:bg-[#4dbcaf] ">
          <button className="text-white text-[15px] hover:text-terracotta">Contact Us</button>
          <ArrowRightCircle className="text-white text-[15px] cursor-pointer hover:text-terracotta"/>
          </div>
        </div>
      </div>

      <div className="bg-softCream flex flex-row justify-between max-w-[1100px] m-auto mt-10 ">
        {footerLinks.map((footerLink, index)=>
          <div 
          key={index}
          className="flex flex-col gap-2"
          >
            <h1 className="text-charcoal font-bold text-[20px] mb-3">{footerLink.title}</h1>
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

      <div className="w-full h-[1px] bg-[#a2a2a2] mt-10"/>

      <div className="flex flex-col mt-3 max-w-[1100px] m-auto pb-3">
        <div className="flex justify-between">
          <p className="text-[13px] text-charcoal">&copy;{new Date().getFullYear()} CWM CITY WIDE MARKET. All rights reserved</p>
          <div className="flex flex-row gap-5 text-[13px] text-charcoal">
            <p className="hover:text-terracotta underline cursor-pointer">Terms</p>
            <p className="hover:text-terracotta underline cursor-pointer">Privacy</p>
            <p className="hover:text-terracotta underline cursor-pointer">Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
