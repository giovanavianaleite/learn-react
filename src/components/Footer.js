import './Footer.css'
import {FaFacebook, FaInstagram} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <footer>
          <p>Siga-nos nas Redes Sociais:</p>
            <ul className='social_list'>
              <li>
                <a className='link1' href='https://www.facebook.com/giovana.viana.9809'>
                <FaFacebook />
                </a>
              </li>
              <li>
                <a className='link2' href='https://www.instagram.com/invites/contact/?i=qbknemhnt2bc&utm_content=2n2bczt' target={'_blank'}>
                <FaInstagram />
                </a>
              </li>
            </ul>
          <div className='linha' />  
            <p className='direitos'>
              Direitos autorais Giovana Viana © Todos os direitos reservados.
            </p>
        </footer>
    </div>
  )
}

export default Footer