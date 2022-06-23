import { useEffect, useState } from "react";
import './Admin.css'
import { Link } from 'react-router-dom'
import {BsTrash as IconTrash} from "react-icons/bs"
import {TiEdit as IconEdit} from 'react-icons/ti'
import { useNavigate } from 'react-router-dom'
import Modalzin from './Modal.js'
import  'bootstrap/dist/css/bootstrap.min.css' ;

const Admin = () => {
  const [products, setProducts] = useState(null);
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const [idToDelete, setIdToDelete] = useState(0)


useEffect(() => {
    fetch("http://localhost/lp2-back/api/product/select-all")
        .then((response) => response.json())
        .then((data) => setProducts(data));
}, []);

const handleTrashClick = (id) => {
    setIdToDelete(id)
    setModalShow(true)
  } 

    return(
        <>
        <Link to={"/admin/cadastra-filme"}><button className="botao">Novo Filme</button></Link>
        <div className="listaAdmin">
            {products &&
            products.map((product) => {
                return (
                <div key={product.id} className="cardFilmes">
                    <img className="fotoAdmin" src={product.foto} alt={product.titulo}/>
                    <h1 className="tituloAdmin">{product.titulo}</h1>
                    <p className="anoAdmin">({product.ano})</p>
                <div className="icones">
                    <IconTrash 
                     onClick={() => handleTrashClick(product.id)}
                        style={{cursor: 'pointer'}}
                    />
                    <IconEdit
                        onClick={() => navigate('edit/'+product.id)}
                        style={{cursor: 'pointer'}}
                    />  
                </div>
                </div>
                )
            })  
        }
        <Modalzin
          show={modalShow}
          onHide={() => setModalShow(false)}
          excluir = {idToDelete}
          setproducts={setProducts}
          product={products}
        />
    </div>
    </>
    )
}

export default Admin