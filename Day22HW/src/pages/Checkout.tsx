import BillingAddress from "../components/BillingAddress"
import NavBar from "../components/NavBar"

const Checkout = () => {
  return (
    <>
      <NavBar/>
      <div className="container flex-column">
        <div className="checkout-header">
          <h1>Checkout form</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ab unde dignissimos debitis beatae facilis eligendi mollitia, laudantium quaerat necessitatibus?</p>
        </div>
        <div className="checkout-form">
          <div className="checkout-l">
            <BillingAddress/>
          </div>
          <div className="checkout-r">

          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout