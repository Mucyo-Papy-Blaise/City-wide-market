export interface CartItem {
    id: number;
    title: string;
    subDescr: string;
    price: number;
    image: string;
    quantity: number,
  }

export interface CartProps{
  CartItems: CartItem[],
  onDelete: (id: any) => void,
  onClose: () => void,
  resetCart:() => void,
}