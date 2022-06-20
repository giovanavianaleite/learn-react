import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom'

const LayoutAdmin = () => {
  return (
    <>
        <h1 className='Adm'>ADMINISTRAÇÃO THE CRITIC!</h1>
        
        <Outlet />
    </>
  )
}

export default LayoutAdmin