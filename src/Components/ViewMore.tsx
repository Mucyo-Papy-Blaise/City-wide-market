import { useEffect, useState,useRef } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { ArrowLeft,Heart,Share2,ArrowLeftCircle,ArrowRightCircle } from 'lucide-react'
import {DesignCards} from '../Data/Data'
import { CartItem } from '../Data/Types'

interface viewProps{
    addToCart: (item: CartItem) => void
}

const ViewMore =({addToCart}: viewProps) => {
    const navigate = useNavigate()
    const { id } = useParams()
    const design = DesignCards.find(card => card.id === Number(id))

        if(!design){
            return <p className="text-red-500 text-center mt-10">Design not found.</p>;
        }
        
    const images: string[] = design.images || [];
    const paragraphs = design.description?.split(". ").filter(Boolean)

    const [selectedImage ,setSelectedImage] = useState<string[]>([])
    const [ActiveImage, setActiveImage] = useState<string>("")
    const scrollRef = useRef<HTMLDivElement>(null)
    
    const paragraphsGrp = [
        paragraphs?.slice(0,3).join(". ") + ". ",
        paragraphs?.slice(3,6).join(". ") + ". ",
        paragraphs?.slice(6).join(". ") + ". ",
    ]
        


    useEffect(()=>{
        setSelectedImage(images); 
        setActiveImage(images[0]);
    },[])


    const scrollLeft = () => {
        if(scrollRef.current){
            scrollRef.current.scrollBy({left: -200 , behavior: "smooth"})
        }
    };

    const scrollRight = () =>{
        if(scrollRef.current){
            scrollRef.current.scrollBy({left: 200, behavior:"smooth"})
        }
    }
  return (
    <div className='bg-[#F8F9FA] relative container mx-auto px-4 md:px-8 lg:px-36 font-poppins'>
        <div className='flex flex-col md:flex-row justify-between mt-5'>
        <div className='flex flex-col gap-2 md:gap-5'>
            <div 
            className='flex flex-row gap-2 cursor-pointer hover:text-terracotta'
            onClick={()=> navigate("/Designs")}
            >
                <ArrowLeft />
                <h1>Back to Designs</h1>
            </div>

            <h1 className='text-charcoal text-[20px] font-bold'>{design.title}</h1>

            <div className='flex flex-row gap-5'>
                <p className='bg-[#e0e0e0] p-2 rounded-3xl text-center text-[12px]'>{design.type}</p>
                <p className='bg-[#e0e0e0] p-2 rounded-3xl text-center text-[12px]'>{design.bedRoom}</p>
            </div>
        </div>
            <div className='flex flex-row gap-5 mt-4 md:mt-10'>
                <Heart  className='bg-soft border-2 p-2 w-10 h-10 rounded-lg cursor-pointer'/> 
                <Share2 className='bg-softCream border-2 p-2 w-10 h-10 rounded-lg cursor-pointer' />
                <button className='bg-teal p-2 w-48 h-10 text-white text-center rounded-lg hover:bg-[#326864]'
                onClick={(e)=> {
                    e.stopPropagation()
                    addToCart({
                        id: design.id,
                        title: design.title,
                        subDescr: design.subDescr,
                        price: Number(design.price),
                        image: ActiveImage,
                        quantity: 1,
                    })
                }}
                >Purchase
                
                </button>
            </div>
        </div>

    <div className='flex flex-col md:flex-row justify-between'>
        <div className='flex flex-col'>
        <div className='flex w-[350px] md:w-[650px] h-[250px] md:h-[500px] mt-12 rounded-lg overflow-hidden'>
            {selectedImage && (
                <img src={ActiveImage} alt="" />
            )}
        </div>
        <div className='flex flex-col items-start'>
        <div className='flex flex-row items-center gap-2 md:gap-4'>
            <ArrowLeftCircle 
            onClick={scrollLeft}
            className='cursor-pointer bg-terracotta hover:bg-teal text-white w-5 h-5 rounded-full'
            />
        <div 
        className='flex flex-row mt-3 gap-4 max-w-[280px] md:max-w-[580px] overflow-y-auto no-scrollbar cursor-pointer'
        ref={scrollRef}
        >  
            {selectedImage.map((subimg, index)=>
                <div 
                key={index}
                className={`bg-black w-32 h-24 md:w-40 md:h-32 overflow-hidden rounded-lg m-auto flex-shrink-0 ${
                    ActiveImage === subimg ? "border-2 border-terracotta opacity-50" : "" 
                }`}
                onClick={() =>setActiveImage(subimg)}
                >
                <img src={subimg} alt="No image Found" className='w-full h-full object-cover hover:opacity-50' />
                </div>
            )}  
        </div>
            <ArrowRightCircle 
            onClick={scrollRight}
            className='cursor-pointer bg-terracotta hover:bg-teal text-white w-5 h-5 rounded-full'
            />
        </div>
        <button className='mt-5 ml-7 md:ml-9 bg-teal w-[300px] md:w-[580px] h-10 rounded-md text-white font-semibold hover:bg-[#326864]'>
            View more images
        </button>
        </div>

        <div className='mt-8 max-w-[600px]'>
            <p className='text-lightGray text-[15px] mb-4'>{design.subDescr}</p>
        <div className='flex flex-col gap-4'>
            {paragraphsGrp.map((para,index)=>
                <p key={index} className='text-lightGray'>{para}</p>
            )}
        </div>

        <div className='mt-3 gap-3 flex flex-col'>
            <h1 className='text-[20px] font-bold text-charcoal'>Key Features</h1>
            <div className='grid grid-cols-2 gap-x-10 gap-y-3'>
                {design.keyFeatures?.map((feature, index)=>
                <p key={index} className='text-lightGray'>• {feature}</p>
                )}
            </div>
        </div>
        </div>
    </div>
    <div className='flex flex-col border-2 border-[#e0e0e0] bg-softCream w-[350px] md:w-[400px] md:h-[650px] mt-12 rounded-lg p-5 gap-4'>
            <h1 className='text-black font-bold text-[20px]'>{design.price.toString()}</h1>
            <h1 className='text-lightGray text-[15px]'>One-time purchase, includes:</h1>

            {design.package?.map((pack, index)=>
             <div 
             key={index}
             className='flex flex-col gap-2'>
                <p className='text-[15px]'>✔️ {pack}</p>
             </div>
            )}

            <button className='bg-teal text-softCream p-2 mt-5 rounded font-semibold hover:bg-[#326864]'
            onClick={(e)=>{
                e.stopPropagation()
                addToCart({
                    id: design.id,
                    title: design.title,
                    subDescr: design.subDescr,
                    price: Number(design.price),
                    image: ActiveImage,
                    quantity:1 
                })
            }}
            >Purchase Design</button>
            <button className='bg-terracotta text-softCream p-2 mt-2 rounded font-semibold hover:bg-[#b05d48]'>Request Customization</button>

            <h1 className='text-charcoal font-bold text-[20px] mt-5'>Need help?</h1>
            <p className='text-lightGray text-[15px]'>Our architectural consultants are available to answer any questions about this design.</p>

            <button 
            className='bg-softCream border-2 border-[#747474] p-2 mt-5 rounded font-semibold hover:bg-[#bfffd0]'
            onClick={()=> navigate('/Contact')}
            >Contact Us
            </button>
    </div>
    </div>
    </div>
  )
}

export default ViewMore
