import {Link} from 'react-router-dom'
import Container from './Container'
import logo from '../assets/img/logo.svg'
import "./Nav.css";

function Nav () {
    return(
       <nav>
           <Container>
            <Link to="/">
                <img src={logo} alt="The critic" />
            </Link>
            <Link to="/">Menu</Link>
            <Link to="/Filmes">Filmes</Link>
            <Link to="/Séries">Séries</Link>
            <Link to="/Sobre">O que é o The Critic!</Link>
           </Container>
       </nav>
    )
    }
    export default Nav;