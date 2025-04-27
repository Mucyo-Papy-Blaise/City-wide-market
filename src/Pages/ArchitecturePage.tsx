import { useState,useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import {motion}  from 'framer-motion'
import { ChevronDown,ChevronUp,Filter,SquareCheckBigIcon,Square } from "lucide-react";
import { DesignCards } from "../Data/Data";

interface ArchProps {
  addToCart: (item: any) => void
}


const ArchitecturePage=({addToCart}: ArchProps) => {
  const navigate = useNavigate()
  const [isSortOpen, setIsSortOpen] = useState<boolean>(false)
  const [selectedSort, setSelectedSort] = useState<number | null>(null)
  const dropDownRef = useRef<HTMLDivElement>(null)
  const filterRef = useRef<HTMLDivElement>(null)
  const [isFilterOpen, setIsFilterOpen] =  useState<boolean>(false)
  const [clickedStyleIcon, setclickedStyleIcon] =  useState<number | null>(null)
  const [clickedBedIcon, setClickedBedIcon] = useState<number | null>(null)
  const [filterCard, setFilteredCards] = useState(DesignCards)
  const [activeFilters, setActiveFilters] = useState({style: null as number | null , bedRooms: null as number | null})

  const getCardImage = (card: { images: string | string[]; }) => {
    if (!Array.isArray(card.images) || card.images.length === 0) return "";
    if (typeof card.images[0] === "string") return card.images[0];
    return Object.values(card.images[0])[1] as string;
  };
 
  // HandleFilterOpen Toggle
  const handleFilterOpen = () =>{
    setIsFilterOpen(!isFilterOpen)
  }

  const Sorts = ["Newest First", "Price: Low to High", "Price: High to Low", "Most Popular"]
  
  // Array Object of Style
  const styleDetails = [
    {
      styleId:1,
      name: "Modern",
      icon: <Square />
    },
    {
      styleId:2,
      name: "Traditional",
      icon: <Square />
    },
    {
      styleId:3,
      name: "Rustic",
      icon: <Square />
    },
    {
      styleId:4,
      name: "Contemporary",
      icon: <Square />
    },
    {
      styleId:5,
      name: "Mediterranean",
      icon: <Square />
    },
  ]

  // Array Object of Bed Room
  const bedRoomDetails =[
    {
      bedId:1,
      number: "1",
      icon: <Square />
    },
    {
      bedId:2,
      number: "2",
      icon: <Square />
    },
    {
      bedId:3,
      number: "3",
      icon: <Square />
    },
    {
      bedId:4,
      number: "4",
      icon: <Square />
    },
    {
      bedId:5,
      number: "5+",
      icon: <Square />
    },
  ]

  // Drop Down Closed When User Click Outside
  useEffect(() => {
    if (!isSortOpen) return;
  
    const handleClickOutside = (e: MouseEvent) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target as Node)) {
        setIsSortOpen(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSortOpen]);

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


  // Apply Filters style on Card
  const applyFilters = () => {
    let result = [...DesignCards]

    // filter style
    if(clickedStyleIcon !== null){
      const selectedStyle = styleDetails.find(style => style.styleId === clickedStyleIcon)?.name;
        if(selectedStyle){
          result = result.filter(card => card.type === selectedStyle)
        }
    }

    // filter bedrooms
    if(clickedBedIcon !== null){
      const selectedBedroom =  bedRoomDetails.find(bedroom => bedroom.bedId === clickedBedIcon)?.number;
      if(selectedBedroom){
        if(selectedBedroom === "5+"){
          result = result.filter(card => {
            const bedroomCount = parseInt(card.bedRoom.split(" ")[0])
            return bedroomCount >= 5
          });
        }else{
          result = result.filter(card => card.bedRoom.startsWith(selectedBedroom + " "))
        }
      }
    }

    // update filters 
    setFilteredCards(result)
    setActiveFilters({
      style: clickedStyleIcon,
      bedRooms: clickedBedIcon,
    })
    setIsFilterOpen(false)
  };

  const resetFilters =()=>{
    setclickedStyleIcon(null),
    setClickedBedIcon(null)
    setFilteredCards(DesignCards)
    setActiveFilters({
      style: null,
      bedRooms: null
    });
  }

  return (
    <div className="bg-[#F8F9FA] relative container mx-auto px-4 md:px-8 lg:px-40 font-poppins">
        <div className="mt-5 gap-5 flex flex-col">
          <h1 className="text-charcoal font-bold text-[20px]">
            Architectural Designs
          </h1>
          
          {/* Search */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full gap-2">
            <div className="flex relative items-center flex-1">
              <Search className="absolute w-4 h-4 ml-2" />
              <input
                type="text"
                className="w-full h-10 pl-8 border-2 border-[#939393] rounded outline-none focus:ring-1 ring-teal"
                placeholder="Search Designs..."
              />
            </div>

            <div className="flex flex-row">
            <div
             className="ml-0 md:ml-4 w-40 h-10 gap-1 flex flex-row justify-center items-center rounded border-2 border-[#939393] cursor-pointer relative"
             onClick={(e)=> {
              e.stopPropagation()
              setIsSortOpen(!isSortOpen)
             }}
             >
              <p 
              onClick={(e)=> e.stopPropagation()}
              className="text-[13px]"
              >{Sorts[selectedSort ?? 0]}
              </p>
              {isSortOpen ? <ChevronUp className="w-5 h-5"/> : <ChevronDown className="w-5 h-5"/>}

              {isSortOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute w-40 bg-softCream border-2 border-teal shadow-lg p-2 top-10 rounded-md"
                ref={dropDownRef}
                onClick={(e)=>e.stopPropagation()}
              >
                {Sorts.map((sort, index)=>
                  <div 
                  key={index}
                  className="relative flex flex-col gap-1 text-[12px]"
                  onClick={(e)=> {
                  e.stopPropagation();
                  setSelectedSort(index)
                  }
                  }
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
            onClick={handleFilterOpen}
            >
              <Filter className="w-4 h-4"/>
              <p className="text-[15px]">Filter</p>
            </div>
            </div>

            {isFilterOpen && (
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
            )}
            </div> 

            {(activeFilters.style !== null || activeFilters.bedRooms !== null) && (
                <div className="flex flex-row gap-2 items-center mb-4">
                  <p className="text-sm text-gray-600">Active filters:</p>
                  {activeFilters.style !== null && (
                    <span className="bg-teal text-white text-xs px-2 py-1 rounded">
                      {styleDetails.find(s => s.styleId === activeFilters.style)?.name}
                    </span>
                  )}
                  {activeFilters.bedRooms !== null && (
                    <span className="bg-teal text-white text-xs px-2 py-1 rounded">
                      {bedRoomDetails.find(b => b.bedId === activeFilters.bedRooms)?.number} Bedrooms
                    </span>
                  )}
                  <button 
                    className="text-xs text-red-500 underline" 
                    onClick={resetFilters}
                  >
                    Clear all
                  </button>
            </div>
          )}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(370px,1fr))] gap-4 sm:gap-3 md:gap-5 lg:gap-8 w-full mb-5">
            {filterCard.length > 0 ? (
              filterCard.map((item)=>
                <div
                 key={item.id}
                 className="bg-softCream w-[360px] md:w-[390px] pb-2 h-[430px] border-2 border-[#939393] hover:border-terracotta rounded-[10px] overflow-hidden shadow-xl transition-all duration-300 cursor-pointer"
                 >
                 <div className="w-full h-52 overflow-hidden">
                    <img 
                    src={getCardImage(item)} 
                    alt={item.subDescr} 
                    className="w-full h-full object-cover hover:opacity-50"/>
                 </div>
  
                 <div className=" flex flex-row items-center gap-5 mt-2 px-5">
                  <p className="text-black bg-[#e0e0e0]  w-[90px] rounded-xl text-[12px] text-center">{item.type}</p>
                  <p className="text-black bg-[#e0e0e0]  w-[90px] rounded-xl text-[12px] text-center">{item.bedRoom}</p>
                 </div>
  
                 <div className="px-5 mt-3">
                    <h1 className="text-charcoal font-bold text-[20px] mb-2">{item.title}</h1>
                    <p className="text-lightGray text-[13px] mb-2">{item.subDescr}</p>
                    <p className="text-black font-bold text-[20px] mb-2">{item.price.toLocaleString()} RWF</p>
                 </div>
  
                 <div className="flex flex-row px-5 mt-3 justify-between">
                    <button className="border-2 border-[#939393] p-2 w-36 text-[12px] rounded-lg"
                    onClick={()=> navigate(`/ViewMore/ ${item.id}`)}
                    >
                      View Details
                    </button>
                    <button className="bg-teal p-2 w-36 text-[12px] rounded-lg text-black"
                    onClick={(e)=>{
                      e.stopPropagation()
                      addToCart({
                        id: item.id,
                        title: item.title,
                        subDescr: item.subDescr,
                        price: Number(item.price),
                        image: getCardImage(item),
                        quantity: 1
                      })
                    }}
                    >
                      Purchase
                    </button>
                 </div>
                </div>
              )
            ): 
            <div className="col-span-full text-center py-10">
            <p className="text-lg text-gray-500">No designs match your filters. Try adjusting your criteria.</p>
            </div>
            }
          </div>
        </div>
      </div>
  );
};

export default ArchitecturePage;
