import { X, Trash2Icon } from "lucide-react";

interface CartProps {
    cartItems: any[]
    onDelete:(id: any) =>void,
    onClose: () => void
    resetCart: () => void
}

const Cart = ({onClose,cartItems,onDelete,resetCart}: CartProps) => {

    const safeCartItems = Array.isArray(cartItems) ? cartItems : []
    const totalItems = safeCartItems.length
    const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div
    className="bg-black/30 fixed inset-0 z-50 font-poppins">
      <div className="bg-softCream right-0 ml-auto w-[400px] h-full p-8 overflow-y-auto">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <h1 className="font-bold text-lg">Your Shopping Cart</h1>
            <button 
            onClick={onClose}
            className="flex left-0 bg-teal/50 rounded-full p-1 text-white hover:bg-terracotta/50">
              <X size={15}
              />
            </button>
          </div>
          
          <div className="flex flex-row mt-3">
            <p className="font-medium text-[15px]">items: <span className="text-teal font-bold">{cartItems.length}</span></p>
          </div>

          {safeCartItems.length > 0 ? (
            <div className="flex flex-col gap-5 mt-10">
            {cartItems.map((item)=> 
                <div
                key={item.id}
                className="flex flex-col gap-4"
                >
                <div className="flex flex-row items-center gap-4">
                <img src={item.image} alt={item.title} className="w-28 h-28 rounded"/>

                <div className="flex flex-col gap-2">
                <h1 className="text-charcoal font-bold text-sm">{item.title}</h1>
                <p className="text-[12px] font-thin text-lightGray">{item.subDescr}</p>
                <div className="flex flex-row gap-5 justify-between items-center">
                  <p className="text-[12px] text-teal font-bold">{item.price.toLocaleString()} Rwf</p>
                  <p className="text-[12px] font-semibold">Qty: <span className="text-terracotta">{item.quantity}</span></p>
                </div>
                </div>

                <Trash2Icon size={40} className="cursor-pointer hover:text-terracotta"
                onClick={() => onDelete(item.id)}
                />
                </div>
                <div className="h-[1px] w-full bg-lightGray"/>
                </div>
            )}
          </div>

          
          ):
          <div className="h-72 w-full bg-softCream mt-10 flex justify-center items-center border-2 border-whiteText rounded">
            <p className="font-bold text-xl text-charcoal text-center">No items have been added yet</p>
          </div>
          }
          {cartItems.length > 0 && (
            <div className="mt-5 flex flex-col gap-2">
            <p className="text-lightGray text-[12px]">{totalItems} x {cartItems[0]?.price.toLocaleString()} Rwf</p>
            <p>Total Price: <span className="text-teal font-bold">{totalPrice.toLocaleString('en-US', { minimumFractionDigits: 0 })} Rwf</span></p>
          </div>
          )}
          <button className="mt-5 bg-teal p-2 rounded font-semibold text-white hover:bg-[#26786f]"
            onClick={resetCart}
          >Reset Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
