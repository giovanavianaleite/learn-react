import { useEffect, useState } from "react";
import "./ListaDeFilmes.css" 
import { Link } from "react-router-dom"

const ListaDeFilmes = () => {
  const [products, setProducts] = useState(null);

useEffect(() => {
    fetch("http://localhost/lp2/api/product/select-all")
        .then((response) => response.json())
        .then((data) => setProducts(data));
}, []);

return(
  <div className="lista">
    {products &&
      products.map((product) => {
        return (
          <div key={product.id} className="cardFilmes">
           <Link to={"/filme/"+product.id} className="linkFilme">
            <img className="foto" src={product.foto} alt={product.titulo}/>
            <h1 className="titulo">{product.titulo}</h1>
           </Link>
            <p className="ano">({product.ano})</p>
          </div>
        )
      })
    }
    </div>
)
  }




export default ListaDeFilmes