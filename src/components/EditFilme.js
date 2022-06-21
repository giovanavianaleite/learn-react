import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './EditFilme.css'

const EditFilme = () => {

    const { productId } = useParams();
    const [product, setproduct] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost/lp2-back/api/product/select-by-id/?id="+productId)
            .then((response) => response.json())
            .then((data) => setproduct(data));
    }, [productId]);
  
    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('id', productId)
        formData.append('titulo', event.target[0].value)
        formData.append('ano', event.target[1].value)
        formData.append('foto', event.target[2].value)
        formData.append('descricao', event.target[3].value)
        formData.append('saber', event.target[4].value)
        formData.append('informacao', event.target[5].value)
        fetch(
            "http://localhost/lp2-back/api/product/update",
            {method: 'POST', body: formData}
            )
            .then((response) => response.json())
            .then((data) => {
                if(data?.product?.id){
                    navigate('../');
                } else if(data?.message){
                    alert(data.message)
                } else {
                    console.log(data)
                }
            })
    } 
  
    return (
        <>
        {product ? (
            <form onSubmit={(event) => handleSubmit(event)}>
                <label>Titulo:</label><input type="text" name="titulo" defaultValue={product.titulo} />
                <label>Ano:</label><input type="year" name="ano"  defaultValue={product.ano} />
                <label>Foto:</label><input type="photo" name="foto"  defaultValue={product.foto} />
                <label>Descrição:</label><input type="description" name="descricao"  defaultValue={product.descricao} />
                <label>Saber:</label><input type="know" name="saber"  defaultValue={product.saber} />
                <label>Informação:</label><input type="information" name="informacao"  defaultValue={product.informacao} />
                <div>
                <input style={{cursor: 'pointer'}} className='botao1' type="submit" value="Editar Filme" />
                </div>
            </form>
            )
        : 
            (<p>Usuário não encontrado!</p>)
        }
        </>
    )
}

export default EditFilme