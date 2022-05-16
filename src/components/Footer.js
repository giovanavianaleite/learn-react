import './Footer.css'
import {FaFacebook, FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <footer>
          <p>Siga-nos nas Redes Sociais:</p>
          <ul className='social_list'>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaInstagram />
            </li>
          </ul>
          <div className='linha'>
            
          </div>
          <p className='direitos'>
            Direitos autorais Giovana Viana © Todos os direitos reservados.
          </p>
        </footer>
    </div>
  )
}

export default Footer