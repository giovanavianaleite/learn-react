import "./Header.css";
import { Link } from 'react-router-dom'
import Nav from "./Nav";
import { ReactComponent as Logo } from "../assets/img/logo.svg";


const Header = () => {
    return (
        <header className="header-nav">
            <Link to="/"><Logo className="logo"/></Link>
            <Nav />
        </header>
    )
}

export default Header