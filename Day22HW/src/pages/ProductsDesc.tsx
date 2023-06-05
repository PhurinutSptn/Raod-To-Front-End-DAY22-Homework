import NavBar from '../components/NavBar'
import ProductInfo from '../components/ProductInfo'
import ProductRating from '../components/ProductRating'
import ProductReview from '../components/ProductReview'
import ProductSpec from '../components/ProductSpec'
import SubmitRating from '../components/SubmitRating'

const ProductsDesc = () => {
  return (
    <>
      <NavBar/>
      <div className="container flex-column">
        <div className='topDesc'>
          <div className="topDesc_L">
            <img src="src/assets/Edifier WH950NB.webp" alt="Headphone Edifier WH950NB" />
            <ProductRating/>
          </div>
          <div className="topDesc_R">
            <ProductInfo/>
            <ProductSpec/>
          </div>
        </div>
        <div className="bottomDesc">
          <SubmitRating/>
          <ProductReview/>
        </div>
      </div>
    </>
  )
}

export default ProductsDesc