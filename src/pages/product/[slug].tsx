import { Box } from '@chakra-ui/react'
import { client, urlFor } from '../../../lib/client'

import { ProductsProps } from '@/@types/pages/Home'
import { ProductDetailsProps } from '@/@types/pages/ProductDetails'
import { AiFillStar, AiOutlineMinus, AiOutlinePlus, AiOutlineStar } from 'react-icons/ai'

import * as S from '../../styles/pages/productDetails'
import { Product } from '@/components/Product'

export default function ProductDetails({ product, products }: ProductDetailsProps) {
  const { image, name, details, price } = product

  return (
    <>
      <S.Container>
        <Box>
          <S.ImageBox>
            <S.Image src={urlFor(image[0])} />
          </S.ImageBox>

          {/* <S.SmallImagesBox>
            {image?.map((img, index) => (
              <S.SmallImage key={index} src={urlFor(img)} />
            ))}
          </S.SmallImagesBox> */}
        </Box>

        <S.ProductDetailsDesc>
          <S.ProductName>{name}</S.ProductName>
          <S.ReviewsBox>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />

            <S.ReviewsQty>(20)</S.ReviewsQty>
          </S.ReviewsBox>

          <S.DetailTitle>Details:</S.DetailTitle>
          <S.DetailText>{details}</S.DetailText>
          <S.DetailText>${price}</S.DetailText>

          <S.QuantityBox>
            <S.DetailTitle>Quantity:</S.DetailTitle>
            <S.QuantityDesc>
              <S.Minus onClick="">
                <AiOutlineMinus />
              </S.Minus>
              <S.Num>10</S.Num>
              <S.Plus onClick="">
                <AiOutlinePlus />
              </S.Plus>
            </S.QuantityDesc>
          </S.QuantityBox>

          <S.ButtonsBox>
            <S.AddToCartButton colorScheme="red" variant="outline">
              Add to Cart
            </S.AddToCartButton>
            <S.BuyNowButton colorScheme="red">Buy Now</S.BuyNowButton>
          </S.ButtonsBox>
        </S.ProductDetailsDesc>
      </S.Container>

      <S.MaylikeProductsBox>
        <S.ProductName>You may also like</S.ProductName>
        <S.Marquee>
          <S.MaylikeProducts>
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </S.MaylikeProducts>
        </S.Marquee>
      </S.MaylikeProductsBox>
    </>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }`

  const products = await client.fetch(query)

  const paths = products.map((product: ProductsProps) => ({
    params: {
      slug: product.slug.current,
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps = async (context: { params: { slug: string } }) => {
  const { slug } = context.params

  const productBySlugQuery = `*[_type == "product" && slug.current == '${slug}'][0]`
  const productsQuery = '*[_type == "product"]'

  const product = await client.fetch(productBySlugQuery)
  const products = await client.fetch(productsQuery)

  return {
    props: { product, products },
  }
}
