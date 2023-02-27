import Link from 'next/link'
import { urlFor } from '../../../lib/client'

import { ProductProps } from '@/@types/pages/Home'

import * as S from './styles'

type ProductComponentProps = {
  product: ProductProps
}

export const Product = ({ product: { image, name, slug, price } }: ProductComponentProps) => {
  return (
    <Link href={`/product/${slug.current}`}>
      <S.CardBox>
        <S.Image src={urlFor(image[0])} />
        <S.Name>{name}</S.Name>
        <S.Price>${price}</S.Price>
      </S.CardBox>
    </Link>
  )
}
