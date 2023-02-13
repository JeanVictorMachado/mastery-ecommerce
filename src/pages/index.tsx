import { client } from '../../lib/client'

import { FooterBanner } from '@/components/FooterBanner'
import { HeroBanner } from '@/components/HeroBanner'
import { HomeProps } from '@/@types/pages/Home'

import * as S from '../styles/pages/home'

export default function Home({ products, bannerData }: HomeProps) {
  return (
    <>
      <HeroBanner bannerData={bannerData} />

      <S.TitleBox>
        <S.Title>Best Seller Products</S.Title>
        <S.Subtitle>Speaker There are many variations passges</S.Subtitle>
      </S.TitleBox>

      <S.ProductsBox>{products?.map((product) => product.name)}</S.ProductsBox>
      <FooterBanner />
    </>
  )
}

export const getServerSideProps = async () => {
  const productsQuery = '*[_type == "product"]'
  const bannerQuery = '*[_type == "banner"]'

  const products = await client.fetch(productsQuery)
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: { products, bannerData },
  }
}
