import { Outlet } from 'react-router-dom'
import Footer from "../../07reactRouter/src/components/Footer/Footer"
import Header from "../../07reactRouter/src/components/Header/Header"

const Layout = () => {
  return (
    <>
     <Header />
     <Outlet />
     <Footer />   
    </>
  )
}

export default Layout
