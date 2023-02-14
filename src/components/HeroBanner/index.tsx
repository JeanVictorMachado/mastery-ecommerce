import Link from 'next/link'
import { urlFor } from '../../../lib/client'

import { BannerDataProps } from '@/@types/pages/Home'

import * as S from './styles'

type HeroBannerProps = {
  bannerData: BannerDataProps
}

export const HeroBanner = ({
  bannerData: { smallText, midText, largeText1, image, product, buttonText, desc },
}: HeroBannerProps) => {
  return (
    <S.Container>
      <S.SmallText>{smallText}</S.SmallText>
      <S.MidText>{midText}</S.MidText>
      <S.LargeText>{largeText1}</S.LargeText>
      <S.BannerImage src={urlFor(image)} alt={smallText} />

      <Link href={`/product/${product}`}>
        <S.BannerButton>{buttonText}</S.BannerButton>
        <S.DescBox>
          <S.TitleDescription>Description</S.TitleDescription>
          <S.Description>{desc}</S.Description>
        </S.DescBox>
      </Link>
    </S.Container>
  )
}
