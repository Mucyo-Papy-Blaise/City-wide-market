import { Plus } from "lucide-react"

const MaterialUpload = () => {
  return (
    <div className="bg-softCream w-full p-10 min-h-screen">
      <div className="flex flex-row justify-between">
        <h1 className="font-bold text-2xl mb-5">Materials</h1>
        <p className='flex flex-row gap-2 bg-black text-white justify-center items-center w-40 h-10 rounded cursor-pointer hover:bg-gray-700 text-sm '>
          <span><Plus /></span>Add New Design</p>
      </div>
    </div>
  )
}

export default MaterialUpload
