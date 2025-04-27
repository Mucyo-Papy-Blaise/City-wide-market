import { useRef,useEffect,useState } from 'react'
import {SquareCheckBigIcon,X} from 'lucide-react'
import {motion} from 'framer-motion'
import { DesignCards } from '../Data/Data'

const Filter = () => {
    const filterRef = useRef<HTMLDivElement>(null)
    const [isFilterOpen, setIsFilterOpen] =  useState<boolean>(false)
    

    // When the user Click Outside the Filter should be Closed
    useEffect(() => {
      if (!isFilterOpen) return;
    
      const handleClickOutsideFilter = (e: MouseEvent) => {
        if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
          setIsFilterOpen(false);
        }
      };
    
      document.addEventListener("mousedown", handleClickOutsideFilter);
    
      return () => {
        document.removeEventListener("mousedown", handleClickOutsideFilter);
      };
    }, [isFilterOpen]);


  return (
    <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-black/50 fixed inset-0 z-50"
                onClick={()=> setIsFilterOpen(false)}
              >
                  <div 
                    ref={filterRef}
                    className="bg-white right-0 ml-auto w-[350px] h-full p-8 flex flex-col gap-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                     <div className="flex flex-row">
                      <div className="flex flex-col">
                        <h1 className="text-charcoal font-bold text-[20px]">Filter Designs</h1>
                        <p className="text-[12px] mb-5">Narrow down designs based on your preferences</p>
                      </div>
                      <X 
                        className="bg-terracotta p-2 rounded-full w-7 h-7 cursor-pointer"
                        onClick={()=> setIsFilterOpen(false)}
                      />
                     </div>
                      
                      <h1 className="text-terracotta text-[20px] font-bold">Style</h1>

                      <div className="mt-5">
                        {styleDetails.map((style)=>
                          <div
                          key={style.styleId}
                          className="flex flex-row gap-2 mb-3 cursor-pointer"
                          onClick={()=> setclickedStyleIcon(style.styleId)}
                          >
                          <h1>{clickedStyleIcon === style.styleId ? <SquareCheckBigIcon className="text-teal"/>  : <Square /> }</h1>
                          <h1>{style.name}</h1>
                          </div>
                        )}
                      </div>

                      <h1 className="text-terracotta text-[20px] font-bold">Bed Rooms</h1>

                      <div className="mt-5">
                        {bedRoomDetails.map((bed)=>
                        <div
                        key={bed.bedId}
                        className="flex flex-row gap-2 mb-3 cursor-pointer"
                        onClick={()=> setClickedBedIcon(bed.bedId)}
                        >
                          <h1>{clickedBedIcon === bed.bedId ? <SquareCheckBigIcon className="text-teal"/> : <Square /> }</h1>
                          <h1>{bed.number}</h1>
                        </div>
                        )}
                      </div>

                      <div className="flex flex-row gap-4 mt-5">
                        <button 
                          className="bg-teal p-2 rounded text-white text-[15px] w-28 hover:bg-[#297a70]"
                          onClick={applyFilters}
                        >
                          Aply Filters
                        </button>

                        <button 
                          className="bg-teal p-2 rounded text-white text-[15px] w-28 hover:bg-[#297a70]"
                          onClick={()=> {
                            setclickedStyleIcon(null)
                            setClickedBedIcon(null)
                          }}
                          >
                            Reset
                          </button>
                      </div>
                  </div>
              </motion.div >
  )
}

export default Filter
