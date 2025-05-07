import {User,LayoutDashboard,PencilRuler,Package,ShoppingBag,Users,Settings} from 'lucide-react'

const Option = () => {
  return (
    <div className=" flex flex-col gap-5 h-screen w-64 border-r-2 border-whiteText/80 p-5">
        <div className="flex flex-row gap-3 items-center">
            <User size={20}/>
            <h1 className='font-bold text-sm text-charcoal'>City-Wide-Admin</h1>
        </div>
        <div className='h-[1px] w-full bg-whiteText/80'/>
        
        <h1 className='text-charcoal text-[12px] font-semibold'>Overview</h1>
        <div className='flex flex-row items-center gap-2 pl-5 cursor-pointer'>
            <LayoutDashboard size={15}/>
            <p className='text-[12px]'>Dashboard</p>
        </div>
        <div className='h-[1px] w-full bg-whiteText/80'/>
        <h1 className='text-charcoal text-[12px] font-semibold'>Management</h1>
        <div className='flex flex-col gap-3'>
            <div className='flex flex-row items-center gap-2 pl-5 cursor-pointer'>
                <PencilRuler size={15}/>
                <p className='text-[12px]'>Designs</p>
            </div>
            <div className='flex flex-row items-center gap-2 pl-5 cursor-pointer'>
                <Package size={15}/>
                <p className='text-[12px]'>Materials</p>
            </div>
            <div className='flex flex-row items-center gap-2 pl-5 cursor-pointer'>
                <ShoppingBag size={15}/>
                <p className='text-[12px]'>Orders</p>
            </div>
            <div className='flex flex-row items-center gap-2 pl-5 cursor-pointer'>
                <Users size={15}/>
                <p className='text-[12px]'>Users</p>
            </div>
        </div>
        <div className='h-[1px] w-full bg-whiteText/80'/> 
        <h1 className='text-charcoal text-[12px] font-semibold'>Settings</h1>
        <div className='flex flex-row items-center gap-2 pl-5 cursor-pointer'>
                <Settings size={15}/>
                <p className='text-[12px]'>Settings</p>
        </div>
      </div>
  )
}

export default Option
