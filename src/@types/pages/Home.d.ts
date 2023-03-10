export type BannerImageProps = {
  asset: { _ref: string }
}

export type BannerDataProps = {
  buttonText: string
  desc: number
  discount: string
  image: BannerImageProps
  largeText1: string
  largeText2: string
  midText: string
  product: string
  saleTime: string
  smallText: string
}

export type ProductSlugProps = {
  current: string
}

export type ProductProps = {
  _id: string
  details: string
  image: string[]
  name: string
  price: number
  slug: ProductSlugProps
  quantity?: number
}

export type HomeProps = {
  bannerData: BannerDataProps[]
  products: ProductProps[]
}
