import Link from 'next/link'

import { AiOutlineShopping } from 'react-icons/ai'

import * as S from './styles'

export const NavBar = () => {
  return (
    <S.Container>
      <S.LogoBox>
        <Link href="/">JSM Headphones</Link>
      </S.LogoBox>

      <S.CartButton>
        <AiOutlineShopping />
        <S.CartQuantity>1</S.CartQuantity>
      </S.CartButton>
    </S.Container>
  )
}
