import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import "./Filme.css"

const Filme = () => {

    const { id } = useParams();
    const [filme, setFilme] = useState();

    useEffect(() => {
        fetch("http://localhost/lp2-back/api/product/select-by-id/?id="+id)
            .then((response) => response.json())
            .then((data) => {
                setFilme(data)
            });
    }, [id]);

    return (
        <div className='tudo'> 
            {filme &&
                (
                    <div key={filme.id} className="cardFilme">
                        <div className='balaoFoto'>
                            <div>
                                <img className="fotoFilme" src={filme.foto} />
                            </div>           
                            <div className='balao'>
                                <h1 className="tituloBalao">{filme.titulo}</h1>
                                <p className='descricaoBalao'>{filme.descricao}</p>  
                        </div>
                    </div> 
                        <section className='saber'>
                            <h1 className='linhaHorizontal'>
                                <span className='naLinha'>
                                O QUE SABER
                                </span>
                                </h1>
                                <p className='fonte'>{filme.saber}</p>
                        </section>
                        <section className='informacao'>
                            <h1 className='linhaHorizontal'>
                                <span className='naLinha1'>
                                    INFORMAÇÕES DO FILME
                                </span>
                            </h1>
                            <section className='fonte2'>{filme.informacao}</section>
                        </section>
                    </div>
                )
            }
        </div>
    )
}

export default Filme