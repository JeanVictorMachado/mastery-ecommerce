import { useRef } from 'react'
import toast from 'react-hot-toast'
import { urlFor } from '../../../lib/client'

import { useShoppingCart } from '@/hooks/ShoppingCart'

import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'

import * as S from './styles'

export const Cart = () => {
  const cartRef = useRef()

  const { totalPrice, totalQuantities, cartItems, setShowCart } = useShoppingCart()

  return (
    <S.Container ref={cartRef}>
      <S.Content>
        <S.CartHeadingButton onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <S.YourCartText>Your Cart</S.YourCartText>
          <S.NumItemsText>({totalQuantities} items)</S.NumItemsText>
        </S.CartHeadingButton>

        {!cartItems.length && (
          <S.EmptyCartBox>
            <AiOutlineShopping size={150} />
            <S.EmptyCarText>Your shopping bag is empty</S.EmptyCarText>
            <S.LinkBox href="/">
              <S.ReturnShoppingButton onClick={() => setShowCart(false)}>
                Continue Shopping
              </S.ReturnShoppingButton>
            </S.LinkBox>
          </S.EmptyCartBox>
        )}
      </S.Content>
    </S.Container>
  )
}
