import { ReactNode } from 'react'
import Head from 'next/head'

import { Footer } from '../Footer'
import { NavBar } from '../NavBar'

import * as S from './styles'

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Container>
      <Head>
        <S.Title>JS Mastery Store</S.Title>
      </Head>

      <S.NavbarBox>
        <NavBar />
      </S.NavbarBox>

      <S.MainBox>{children}</S.MainBox>

      <S.FooterBox>
        <Footer />
      </S.FooterBox>
    </S.Container>
  )
}
