import React from 'react'
import ProductCard from './ProductCard'

const ProductContainer = () => {
  return (
    <>
        <div className="product-container">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    </>
  )
}

export default ProductContainer