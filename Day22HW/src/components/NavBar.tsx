const NavBar = () => {
  return (
    <div className='container-fluid bg-light-gray'>
        <div className='container'>
            <a href="#" className="brand">Your Brand</a>
            <a href="#" className="nav-link">Home</a>
            <a href="#/products" className="nav-link">Products</a>
            <a href="#/contact" className="nav-link">Contact</a>
        </div>
    </div>
  )
}

export default NavBar