import { useEffect, useState } from "react";
import './Admin.css'
import { Link } from 'react-router-dom'
import {BsTrash as IconTrash} from "react-icons/bs"
import {TiEdit as IconEdit} from 'react-icons/ti'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
  const [products, setProducts] = useState(null);
  const navigate = useNavigate();

useEffect(() => {
    fetch("http://localhost/lp2-back/api/product/select-all")
        .then((response) => response.json())
        .then((data) => setProducts(data));
}, []);

const handleTrashClick = (productId) => {
    const formData = new FormData();
    formData.append('id', productId);
    const urlDelete = "http://localhost/lp2-back/api/product/delete";
    fetch(urlDelete, {
      method: 'POST',
      body: formData
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message)
        const productsFiltered = products.filter((product) => { return product.id !== productId });
        setProducts(productsFiltered)
      });
  }

    return(
        <div className="listaAdmin">
            <Link to={"/admin/cadastra-filme"}><button className="botao">Novo Filme</button></Link>
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
    </div>
    )
}

export default Admin