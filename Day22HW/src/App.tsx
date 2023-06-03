import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import ProductsDesc from './pages/ProductsDesc'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product_desc" element={<ProductsDesc/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  )
}

function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  )
}

export default WrappedApp
