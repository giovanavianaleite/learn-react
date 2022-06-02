import { useEffect, useState } from "react";
import "./ListaDeFilmes.css" 

const ListaDeFilmes = () => {
  const [products, setProducts] = useState(null);

useEffect(() => {
    fetch("http://localhost/lp2/api/product/select-all")
        .then((response) => response.json())
        .then((data) => setProducts(data));
}, []);

return(
    <>
    {products &&
      products.map((product) => {
        return (
          <div key={product.id}>
            <img className="foto" src={product.foto} alt={product.titulo} />
            <h1 className="titulo">{product.titulo}</h1>
            <p>({product.ano})</p>
          </div>
        )
      })
    }
    </>
)
  }




export default ListaDeFilmes