import { ProductProps } from './../pages/Home.d'

export type OnAddProps = {
  product: ProductProps
  quantity: number
}

export type ShoppingCartContextProps = {
  showCart: boolean
  cartItems: ProductProps[]
  totalPrice: number
  totalQuantities: number
  qty: number
  incQty: () => void
  decQty: () => void
  onAdd: ({ product: ProductProps, quantity: number }) => void
  setShowCart: (param: boolean) => void
}
