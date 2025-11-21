import React from 'react'

interface Props {
    params: { slug: string[] }
    searchParams: { sortOrder: string }
}

const ProductDetails = ({ params, searchParams }: Props) => {
  return (
    <div>ProductDetails - {params.slug} - {searchParams.sortOrder}</div>
  )
}

export default ProductDetails