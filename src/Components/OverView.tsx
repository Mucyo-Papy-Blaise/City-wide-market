import {DollarSign,PencilRuler,Package,Users,ArrowUpRight} from 'lucide-react'

const OverView = () => {
    const overViewCards = [
        {
            id:1,
            icon:<DollarSign size={15}/>,
            title:"Total Revenue",
            quantity: "$45,231.89",
            analyse: "+20.1% from last month",
        },
        {
            id:2,
            icon:<PencilRuler size={15}/>,
            title:"Designs",
            quantity: "+24",
            analyse: "+12% from last month",
        },
        {
            id:3,
            icon:<Package size={15}/>,
            title:"Products",
            quantity: "+573",
            analyse: "+50.3% from last month",
        },
        {
            id:4,
            icon:<Users size={15}/>,
            title:"Active Users",
            quantity: "+2350",
            analyse: "+18.01% from last month",
        },
    ]

    const recentCustomers = [
        {
            id: 1,
            name:"Customer 1",
            price:"$49.13",
            email: "customer1@example.com",
        },
        {
            id: 2,
            name:"Customer 2",
            price:"$674.50",
            email: "customer2@example.com",
        },
        {
            id: 3,
            name:"Customer 3",
            price:"$799.83",
            email: "customer3@example.com",
        },
        {
            id: 4,
            name:"Customer 4",
            price:"$523.52",
            email: "customer4@example.com",
        },
    ]
  return (
    <div className='bg-softCream w-full min-h-screen font-poppins'>
      <div className="grid grid-cols-4 gap-5 mt-10">
          {overViewCards.map((overViewCard)=>
            <div 
            key={overViewCard.id}
            className="w-full p-5 border-2 border-whiteText/70 rounded"
            >
               <div className="flex flex-col">
                <div className="flex flex-row justify-between items-center mb-3">
                 <p className="text-[12px] font-medium">{overViewCard.title}</p>
                 <p>{overViewCard.icon}</p>
                </div>
                <p className="font-bold text-[20px] mb-1">{overViewCard.quantity}</p>
                <p className="text-[12px] font-normal text-lightGray">{overViewCard.analyse}</p>
               </div>

            </div>
          )}
        </div>
        <div className="grid grid-cols-2 mt-10 gap-10">
        <div className="w-full p-5 border-2 border-whiteText/70 rounded">
          <h1 className="font-bold text-xl mb-2">Recent Sales</h1>
          <p className="text-[11px] font-medium text-lightGray">You made 200 sales this month</p>  

        <div className="">
           {recentCustomers.map((recentCustomer)=>
             <div
             key={recentCustomer.id}
             className="flex flex-col mt-5"
             >
                <div className="flex flex-row justify-between">
                    <p className="text-sm font-semibold ">{recentCustomer.name}</p>
                    <p className="text-[15px] font-semibold">{recentCustomer.price}</p>
                </div>
                <p className="text-[11px] mb-3 text-lightGray">{recentCustomer.email}</p>
             </div>
            )}
        </div> 
        </div>

        <div className="border-2 border-whiteText/70 rounded p-5">
            <h1 className="font-bold mb-1">Quick Actions</h1>
            <p className="text-[11px] font-thin text-lightGray">Manage your content and settings.</p>

            <div className="flex flex-col mt-5 gap-5">
            <div className="flex flex-row justify-between items-center border-2 border-whiteText/70 p-2 rounded">
                <h1 className="text-sm font-medium">Upload New Design</h1>
                <ArrowUpRight size={15}/>
            </div>
            <div className="flex flex-row justify-between items-center border-2 border-whiteText/70 p-2 rounded">
                <h1 className="text-sm font-medium">Add New Material</h1>
                <ArrowUpRight size={15}/>
            </div>
            <div className="flex flex-row justify-between items-center border-2 border-whiteText/70 p-2 rounded">
                <h1 className="text-sm font-medium">View Recent Orders</h1>
                <ArrowUpRight size={15}/>
            </div>
            <div className="flex flex-row justify-between items-center border-2 border-whiteText/70 p-2 rounded">
                <h1 className="text-sm font-medium">Manage Users</h1>
                <ArrowUpRight size={15}/>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default OverView
