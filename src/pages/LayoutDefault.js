import Footer from '../components/Footer'
import { Outlet } from "react-router-dom";
import Header from '../components/Header';

const LayoutDefault = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default LayoutDefault