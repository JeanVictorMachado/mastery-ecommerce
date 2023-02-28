import Link from 'next/link'

import { Cart } from '../Cart'
import { useShoppingCart } from '@/hooks/ShoppingCart'

import { AiOutlineShopping } from 'react-icons/ai'

import * as S from './styles'

export const NavBar = () => {
  const { totalQuantities, showCart, setShowCart } = useShoppingCart()

  return (
    <S.Container>
      <S.LogoBox>
        <Link href="/">JSM Headphones</Link>
      </S.LogoBox>

      <S.CartButton onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <S.CartQuantity>{totalQuantities}</S.CartQuantity>
      </S.CartButton>

      {showCart && <Cart />}
    </S.Container>
  )
}
