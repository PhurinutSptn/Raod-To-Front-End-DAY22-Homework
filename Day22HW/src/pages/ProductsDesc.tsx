import NavBar from '../components/NavBar'
import ProductInfo from '../components/ProductInfo'
import ProductRating from '../components/ProductRating'

const ProductsDesc = () => {
  return (
    <>
      <NavBar/>
      <div className="container">
        <div className='topDesc'>
          <img src="src/assets/Edifier WH950NB.webp" alt="Headphone Edifier WH950NB" />
          <ProductRating/>
          <ProductInfo/>
        </div>
      </div>
    </>
  )
}

export default ProductsDesc