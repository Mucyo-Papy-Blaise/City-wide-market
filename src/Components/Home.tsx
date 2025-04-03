import React from 'react'
import consimage1 from '../assets/construction1.jpg'
import {CardDetails} from '../Data/Data.ts'
import { HardHat, PencilRuler, Hammer } from 'lucide-react';

const Home:React.FC = () => {
  const ServiceDetails = [
    {
      title: "Construction Service",
      desc: "Implementation of Projects",
      icon: <HardHat className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Architecture Service",
      desc: "Design and Planning",
      icon: <PencilRuler className="w-6 h-6 text-green-500" />,
    },
    {
      title: "Building Materials",
      desc: "Supply of Quality Materials",
      icon: <Hammer className="w-6 h-6 text-yellow-500" />,
    },
  ];
  
  return (
    <div className='w-full min-h-scree font-poppins'>
      <div className='w-full h-80 bg-blue-600 relative overflow-hidden -z-30'>
            <img src={consimage1} alt="constructio-image" className='w-full h-full object-cover'/>

            <div className='absolute top-12 left-1/2 transform -translate-x-1/2 w-full max-w-[1250px] mx-auto flex flex-col'>
              <p className='text-white text-[15px] mb-3'>Welcome to CityWide Market</p>
              <div className='max-w-[380px]'>
                <p className='text-[35px] text-white font-bold'>Your <span className='text-terracotta'>Gateway to</span> Smart Construction</p>
              </div> 

              <div className='flex flex-row text-white mt-8 gap-20'>
                <button className='p-[10px] bg-teal rounded-[5px] text-[15px]'>Explore Design</button>
                <button className='p-[10px] bg-terracotta rounded-[5px] text-[15px]'>Explore Design</button>
              </div>
            </div>                         
      </div>

      <div className='bg-softCream flex flex-col max-w-[1250px] m-auto pb-10'>
          <div className='mt-5'>
              <h1 className='text-charcoal font-bold text-[20px]'>The Architecture & Construction Marketplace</h1>

              <div className='grid grid-cols-3 mt-8'>
                  {CardDetails.map((card, index)=>
                  <div 
                  key={index}
                  className='bg-black w-[400px] h-64 relative hover:scale-105 transform ease-in-out duration-300 hover:border-2 cursor-pointer' 
                  >
                    <img src={card.photo} alt={card.name} className='w-full h-full object-cover hover:opacity-45'/>
                    <div className='absolute bg-softCream w-64 h-16 bottom-0 font-poppins flex flex-col gap-1'>
                      <h1 className='text-lightGray font-bold mt-2 '>{card.name}</h1>
                      <p className='text-lightGray'>{card.projects} + Projects</p>
                  </div>
                  </div>
                  )}
              </div>
          </div>
      </div>

      <div className='bg-charcoal grid grid-flow-col-3 w-full h-32'>
          <div className='grid grid-cols-3 justify-center items-center '>
            {ServiceDetails.map((service, index)=>
             <div 
             key={index}
             className='bg-softCream w-[450px] h-16 max-w-[1250px] m-auto rounded'
             >
              
              
             </div>
            )}
          </div>
      </div>

      <div className='text-black'>
          <h1>Hello</h1>
      </div>
    </div>
  )
}

export default Home
