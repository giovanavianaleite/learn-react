import { useEffect, useState } from "react";
import './Admin.css'
import { Link } from 'react-router-dom'
const Admin = () => {
  const [products, setProducts] = useState(null);

useEffect(() => {
    fetch("http://localhost/lp2-back/api/product/select-all")
        .then((response) => response.json())
        .then((data) => setProducts(data));
}, []);

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
                </div>
                )
            })
        }
    </div>
    )
}

export default Admin