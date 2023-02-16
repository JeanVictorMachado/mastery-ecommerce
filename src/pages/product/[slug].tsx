import { Box } from '@chakra-ui/react'
import { client, urlFor } from '../../../lib/client'

import { ProductsProps } from '@/@types/pages/Home'
import { ProductDetailsProps } from '@/@types/pages/ProductDetails'

import * as S from '../../styles/pages/productDetails'

export default function ProductDetails({ product, products }: ProductDetailsProps) {
  const { image, name, details, price } = product

  return (
    <>
      <S.Container>
        <Box>
          <S.ImageBox>
            <S.Image src={urlFor(image[0])} />
          </S.ImageBox>
        </Box>
      </S.Container>
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
