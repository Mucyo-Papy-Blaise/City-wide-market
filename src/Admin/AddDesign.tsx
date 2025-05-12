import { ArrowLeft,X,UploadCloudIcon } from "lucide-react"
import { onBackProps } from "../Data/Types"
import { useState } from "react"
import {motion} from 'framer-motion'

const AddDesign = ({onBack}:onBackProps) => {
  const [status, setStatus] = useState<string>("Status")
  const [showStatusDropDown, setShowStatusDropDown] = useState<boolean>(false)
  const statusValues = ["Publish","Draft"]
  
  const handleSelect=(value: string)=>{
    setStatus(value)
    setShowStatusDropDown(false)
  }

  return (
    <div className="bg-softCream w-full p-10 min-h-screen">
    <div className="flex flex-row justify-between">
        <h1 className="font-bold text-2xl mb-5">Add New Design</h1>
        <p 
        className="flex flex-row gap-2 bg-black text-white justify-center items-center w-40 h-10 rounded cursor-pointer hover:bg-gray-700 text-sm"
        onClick={onBack}
        >
          <span>
            <ArrowLeft />
          </span>
          Go Back
        </p>
      </div>

        <form action="" className="flex flex-row p-5 gap-10 rounded border-2 border-lightGray/40">
          <div className="flex flex-col gap-3 w-1/2">
            {/* Design Title */}
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-[12px] font-medium">Design Title</label>
            <input type="text" className="text-[12px] border-[1px] border-lightGray/30 outline-none p-2 pl-3 rounded focus:ring-1 focus:ring-lightGray"
            placeholder="Enter Design Title"
            />
          </div>
          {/* Short Description */}
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-[12px] font-medium">Short Description</label>
            <textarea className="text-[12px] h-20 resize-none border-[1px] border-lightGray/30 outline-none p-1 pl-3 rounded focus:ring-1 focus:ring-lightGray"
            placeholder="Brief Description of Design"
            />
          </div>
          {/* Full Description */}
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-[12px] font-medium">Full Description</label>
            <textarea className="text-[12px] h-36 border-[1px] resize-none border-lightGray/30 outline-none p-1 pl-3 rounded focus:ring-1 focus:ring-lightGray"
            placeholder="Detailed Description of Design"
            />
          </div>
          {/* Add Tag */}
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-[12px] font-medium">Tags</label>
            <input type="text" className="text-[12px] border-[1px] border-lightGray/30 outline-none p-2 pl-3 rounded focus:ring-1 focus:ring-lightGray"
            placeholder="Add Tag(Press enter to add)"
            />
            <p className="text-[12px] font-normal text-lightGray">Press Enter to add a tag. Tags help customers find your designs.</p>
          </div>
          {/* Number of Bedrooms */}
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-[12px] font-medium">Number of Rooms</label>
            <input type="text" className="text-[12px] border-[1px] border-lightGray/30 outline-none p-2 pl-3 rounded focus:ring-1 focus:ring-lightGray"
            placeholder="Add Tag number of Rooms"
            />
          </div>
          {/* Status of the Post */}
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="text-[12px] font-medium">Status</label>
            <input 
            value={status}
            readOnly
            className="text-[12px] border-[1px] border-lightGray/30 outline-none p-1 pl-3 rounded focus:ring-1 focus:ring-lightGray relative"
            onClick={()=>setShowStatusDropDown((prev)=> !prev)}
            />
            {showStatusDropDown && (
              <div className="flex flex-col w-96 p-3 rounded border-[1px] border-lightGray/40 absolute bg-softCream -bottom-[105px]">
                {statusValues.map((statusValue, index)=>
                <motion.div
                 key={index}
                 initial={{ opacity: 0, y: -20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, ease: "easeInOut" }} 
                 onClick={()=> handleSelect(statusValue)}
                 className="cursor-pointer "
                 >
                  <p>{statusValue}</p>
                </motion.div>
                )}
              </div>
            )}
          </div>
          </div>

          <div className="flex flex-col gap-3 w-1/2">
             {/* Design Price */}
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-[12px] font-medium">Price</label>
              <input type="text" className="text-[12px] border-[1px] border-lightGray/30 outline-none p-2 pl-3 rounded focus:ring-1 focus:ring-lightGray"
              placeholder="Enter Price"
              />
            </div>

            {/* Images */}
            <div className="flex flex-col gap-2"> 
              <div className="flex flex-row flex-wrap gap-2">
                <h1 className="border-[1px] border-teal/30 text-[11px] font-bold p-1 rounded flex flex-row items-center gap-2 cursor-pointer hover:bg-lightGray/10">
                  Image 1 
                  <span><X size={12}/></span>
                </h1>
              </div>
              <div className="flex flex-col w-full h-40 border-[1px] border-lightGray/30 rounded justify-center items-center hover:bg-lightGray/10 cursor-pointer">
                <UploadCloudIcon />
                <h1>Upload Images</h1>
              </div>
            </div>
            {/* Key Feature */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-row flex-wrap gap-2">
                  <h1 className="border-[1px] border-teal/30 text-[11px] font-bold p-1 rounded flex flex-row items-center gap-2 cursor-pointer hover:bg-lightGray/10">
                   3 Bedrooms
                  <span><X size={12}/></span>
                </h1>
                <h1 className="border-[1px] border-teal/30 text-[11px] font-bold p-1 rounded flex flex-row items-center gap-2 cursor-pointer hover:bg-lightGray/10">
                   Home Office Space
                  <span><X size={12}/></span>
                </h1>
                </div>
              <input type="text" className="text-[12px] border-[1px] border-lightGray/30 outline-none p-2 pl-3 rounded focus:ring-1 focus:ring-lightGray"
              placeholder="Press enter to add Features"
              />
              </div>
              {/* Add Packages */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-row flex-wrap gap-2">
                  <h1 className="border-[1px] border-teal/30 text-[11px] font-bold p-1 rounded flex flex-row items-center gap-2 cursor-pointer hover:bg-lightGray/10">
                   Complete architectural plans
                  <span><X size={12}/></span>
                </h1>
                <h1 className="border-[1px] border-teal/30 text-[11px] font-bold p-1 rounded flex flex-row items-center gap-2 cursor-pointer hover:bg-lightGray/10">
                   3D renderings
                  <span><X size={12}/></span>
                </h1>
                </div>
              <input type="text" className="text-[12px] border-[1px] border-lightGray/30 outline-none p-2 pl-3 rounded focus:ring-1 focus:ring-lightGray" 
              placeholder="Press Enter to add Package"
              />
              </div>
          </div>
        </form>
      </div>
  )
}

export default AddDesign