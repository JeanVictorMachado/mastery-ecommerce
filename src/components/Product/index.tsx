import Link from 'next/link'
import { urlFor } from '../../../lib/client'

import { ProductsProps } from '@/@types/pages/Home'

import * as S from './styles'

type ProductProps = {
  product: ProductsProps
}

export const Product = ({ product: { image, name, slug, price } }: ProductProps) => {
  return (
    <>
      <Link href={`/product/${slug.current}`}>
        <S.CardBox>
          <S.Image src={urlFor(image[0])} />
          <S.Name>{name}</S.Name>
          <S.Price>${price}</S.Price>
        </S.CardBox>
      </Link>
    </>
  )
}
