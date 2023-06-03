import NavBar from "../components/NavBar"

const NotFound = () => {
  return (
    <>
      <NavBar />
      <div className="not-found">
        <img src="src/assets/404.webp" alt="page not found" />
        <p>ไม่พบหน้าที่คุณค้นหา</p>
      </div>
    </>
  )
}

export default NotFound