import "./addimage.css"
//importar imagem jpg, img, gif, svg, jpeg, webp
import mountain from "../assets/img/mountain.jpg"
import logo from "../assets/img/react-logo.svg"
//importar imagens svg com componentes
import { ReactComponent as Logo } from '../assets/img/react-logo.svg'

const Addimage = () => {
    return (
        <div className="bgimagens">
            {/* Usando imagens svg como componentes*/}
            <Logo alt= "Logo React" width="400" height="400" />
            {/* Usando imagens importadas com a tag img */}
            <img src={logo} alt="logo" width="300" height="200"/>
            <img src={mountain} alt="Mountain" width="300" height="200"/>
        </div>
    );
}

export default Addimage;