export type BannerImageProps = {
  asset: { _ref: strin }
}

export type BannerDataProps = {
  image: BannerImageProps
  buttonText: string
  product: string
  desc: number
  smallText: string
  midText: string
  largeText1: string
  largeText2: string
  discount: string
  saleTime: string
}

export type ProductsProps = {
  image: string
  name: string
  slug: string
  price: number
  details: string
}

export type HomeProps = {
  products: ProductsProps[]
  bannerData: BannerDataProps[]
}
