import BillingAddress from "../components/BillingAddress"
import CheckoutCart from "../components/CheckoutCart"
import NavBar from "../components/NavBar"
import Payment from "../components/Payment"

const Checkout = () => {
  return (
    <>
      <NavBar/>
      <div className="container flex-column">
        <div className="checkout-header">
          <h1>Checkout form</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ab unde dignissimos debitis beatae facilis eligendi mollitia, laudantium quaerat necessitatibus?</p>
        </div>
        <div className="checkout-form d-flex justify-content-between">
          <div className="checkout-l">
            <BillingAddress/>
            <Payment/>
          </div>
          <div className="checkout-r">
            <CheckoutCart/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout