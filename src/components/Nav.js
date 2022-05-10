import "./Nav.css"
import { Link } from 'react-router-dom'
function Nav() {
    return (
        <div className='nav'>
        <Link to="/">Home</Link>
        <Link to="/filmes">Filmes</Link>
        <Link to="/series">Séries</Link>
        <Link to="/sobre">O que é o The Critic!?</Link>
       </div>
    )
}

export default Nav