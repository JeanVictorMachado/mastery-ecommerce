import Link from 'next/link'
import { urlFor } from '../../../lib/client'

import { BannerDataProps } from '@/@types/pages/Home'

import * as S from './styles'

type HeroBannerProps = {
  bannerData: BannerDataProps[]
}

export const HeroBanner = ({ bannerData }: HeroBannerProps) => {
  return (
    <S.Container>
      <>
        <S.SmallText>{bannerData[0].smallText}</S.SmallText>
        <S.MidText>{bannerData[0].midText}</S.MidText>
        <S.LargeText>{bannerData[0].largeText1}</S.LargeText>
        <S.BannerImage src={urlFor(bannerData[0].image)} alt={bannerData[0].smallText} />
        <>
          <Link href={`/product/${bannerData[0].product}`}>
            <S.BannerButton>{bannerData[0].buttonText}</S.BannerButton>
            <S.DescBox>
              <S.TitleDescription>Description</S.TitleDescription>
              <S.Description>{bannerData[0].desc}</S.Description>
            </S.DescBox>
          </Link>
        </>
      </>
    </S.Container>
  )
}
