import Link from 'next/link'
import { urlFor } from '../../../lib/client'

import { BannerDataProps } from '@/@types/pages/Home'

import * as S from './styles'

type FooterBannerProps = {
  bannerData: BannerDataProps
}

export const FooterBanner = ({
  bannerData: {
    buttonText,
    desc,
    discount,
    image,
    largeText1,
    largeText2,
    midText,
    product,
    saleTime,
    smallText,
  },
}: FooterBannerProps) => {
  return (
    <S.Container>
      <S.BannerDescBox>
        <S.LeftBox>
          <S.LeftBoxSmallText>{discount}</S.LeftBoxSmallText>
          <S.LeftBoxLargeText mt={4}>{largeText1}</S.LeftBoxLargeText>
          <S.LeftBoxLargeText mb={4}>{largeText2}</S.LeftBoxLargeText>
          <S.LeftBoxSmallText>{saleTime}</S.LeftBoxSmallText>
        </S.LeftBox>

        <S.RightBox>
          <S.RightBoxSmallText>{smallText}</S.RightBoxSmallText>
          <S.RightBoxLargeText>{midText}</S.RightBoxLargeText>
          <S.RightBoxSmallText>{desc}</S.RightBoxSmallText>

          <Link href={`/product/${product}`}>
            <S.ShopNowButton>{buttonText}</S.ShopNowButton>
          </Link>
        </S.RightBox>

        <S.Image src={urlFor(image)} />
      </S.BannerDescBox>
    </S.Container>
  )
}
