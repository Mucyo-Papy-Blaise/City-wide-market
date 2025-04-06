import React, { useState,useRef, useEffect } from "react";
import { Search } from "lucide-react";
import {motion}  from 'framer-motion'
import { ChevronDown,ChevronUp,Filter } from "lucide-react";
import { DesignCards } from "../Data/Data";

const ArchitecturePage: React.FC = () => {
  const [isSortOpen, setIsSortOpen] = useState<boolean>(false)
  const [selectedSort, setSelectedSort] = useState<number | null>(null)
  const dropDownRef = useRef<HTMLDivElement>(null)
  const [isFilterOpen, setIsFilterOpen] =  useState<boolean>(false)
 
  const handleSortOpen = () =>{
    setIsSortOpen(!isSortOpen)
  }

  const handleFliteroOpen = () =>{
    setIsFilterOpen(!isFilterOpen)
  }
  const Sorts = ["Newest First", "Price: Low to High", "Price: High to Low", "Most Popular"]

  useEffect(() =>{
    if(!isSortOpen) return;

    const handleClickOutside = (e: MouseEvent) =>{
      if(dropDownRef.current && !dropDownRef.current.contains(e.target as Node)){
        setIsSortOpen(false)
      }

      setTimeout(()=>{
        document.addEventListener("mousedown", handleClickOutside)
      }, 10)
    }
    return(
      document.addEventListener("mousedown", handleClickOutside)
    )
  },[isSortOpen])
  return (
    <div className="bg-[#F8F9FA] relative">
      <div className="container mx-auto px-4 md:px-8 lg:px-40 font-poppins">
        <div className="mt-5 gap-5 flex flex-col">
          <h1 className="text-charcoal font-bold text-[20px]">
            Architectural Designs
          </h1>
          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex relative items-center flex-1">
              <Search className="absolute w-4 h-4 ml-2" />
              <input
                type="text"
                className="w-full h-10 pl-8 border-2 border-[#939393] rounded outline-none focus:ring-1 ring-teal"
                placeholder="Search Designs..."
              />
            </div>

            <div
             className="ml-4 w-40 h-10 gap-1 flex flex-row justify-center items-center rounded border-2 border-[#939393] cursor-pointer relative"
             onClick={handleSortOpen}
             >
              <p className="text-[13px]">{Sorts[selectedSort ?? 0]}</p>
              {isSortOpen ? <ChevronUp className="w-5 h-5"/> : <ChevronDown className="w-5 h-5"/>}

              {isSortOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute w-40 bg-softCream border-2 border-teal shadow-lg p-2 top-10 rounded-md"
                ref={dropDownRef}
              >
                {Sorts.map((sort, index)=>
                  <div 
                  key={index}
                  className="relative flex flex-col gap-1 text-[12px]"
                  onClick={()=> setSelectedSort(index)}
                  >
                    <div className="flex flex-row justify-start gap-1">
                      {selectedSort ===  index && (
                        <p className="absolute">✔️</p>
                        )}
                      <p className="ml-5">{sort}</p>
                    </div>
                  </div>
                )}
              
              </motion.div>
            )}

            </div>
            <div 
            className="flex flex-row ml-4 gap-2 w-24 h-10 border-2 justify-center items-center border-[#939393] cursor-pointer rounded"
            onClick={handleFliteroOpen}
            >
              <Filter className="w-4 h-4"/>
              <p className="text-[15px]">Filter</p>
            </div>
          </div> 

          <div className="grid grid-cols-[repeat(auto-fill,minmax(370px,1fr))] gap-x-8 gap-y-5 w-full  mb-5">
            {DesignCards.map((card)=>
              <div
               key={card.id}
               className="bg-softCream w-[390px] pb-2 h-[430px] border-2 border-[#939393] hover:border-terracotta rounded-[10px] overflow-hidden shadow-xl transition-all duration-300 cursor-pointer"
               >
               <div className="w-full h-52 overflow-hidden">
                  <img src={card.image} alt={card.subDescr} className="w-full h-full object-cover hover:opacity-50"/>
               </div>

               <div className=" flex flex-row items-center gap-5 mt-2 px-5">
                <p className="text-black bg-[#e0e0e0]  w-[90px] rounded-xl text-[12px] text-center">{card.type}</p>
                <p className="text-black bg-[#e0e0e0]  w-[90px] rounded-xl text-[12px] text-center">{card.bedRoom}</p>
               </div>

               <div className="px-5 mt-3">
                  <h1 className="text-charcoal font-bold text-[20px] mb-2">{card.title}</h1>
                  <p className="text-lightGray text-[13px] mb-2">{card.subDescr}</p>
                  <p className="text-black font-bold text-[20px] mb-2">{card.price}</p>
               </div>

               <div className="flex flex-row px-5 mt-3 justify-between">
                  <button className="border-2 border-[#939393] p-2 w-36 text-[12px] rounded-lg">View Details</button>
                  <button className="bg-teal p-2 w-36 text-[12px] rounded-lg text-black">Purchase</button>
               </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitecturePage;
