import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import "./Filme.css"

const Filme = () => {

    const { filmeId } = useParams();
    const [filme, setFilme] = useState();

    useEffect(() => {
        fetch("http://localhost/lp2-back/api/product/select-by-id/?id="+filmeId)
            .then((response) => response.json())
            .then((data) => {
                setFilme(data)
                console.log(data)
            });
    }, [filmeId]);

    return (
            <div className='tudo'> 
            {products &&
                products.map((product) => {
        return (
             <div key={product.id} className="cardFilmes" onClick={() => navigate('filme/'+product.id)}>
                <div className='balaoFoto'>
                    <div>
                      <img className="fotoFilme">{product.foto}</img>
                    </div>           
                    <img className="fotoFilme" src="https://i.pinimg.com/236x/0c/d7/27/0cd727eef33af1d228a91e6c92a7e849.jpg"/>
                    <div className='balao'>
                    <h1 className='tituloBalao'>Duna</h1>
                    <p className='descricaoBalao'>2021, Aventura/Ficção científica, 2h 35m.</p>
                    <p className='descricaoBalao1'>
                    Diretor: Denis Villeneuve.
                    Baseado em:	Duna de Frank Herbert.
                    Elenco:	Timothée Chalamet, Rebecca Ferguson, Oscar Isaac
                    Josh Brolin, Stellan Skarsgård, Dave Bautista, Stephen McKinley Henderson, Zendaya, David Dastmalchian
                    Chang Chen, Sharon Duncan-Brewster, Charlotte Rampling
                    Jason Momoa, Javier Bardem.
                    </p>   
                </div>
            </div> 
                <section className='saber'>
                        <h1 className='linhaHorizontal'>
                            <span className='naLinha'>
                            O QUE SABER
                            </span>
                        </h1>
                        <p className='fonte'>
                        CONSENSO DOS CRÍTICOS:
                        Dune ocasionalmente luta com seu material de origem pesado, mas esses problemas são amplamente ofuscados pelo escopo e ambição desta adaptação visualmente emocionante.
                        </p>
                        <p className='fonte1'>
                        AUDIÊNCIA DIZ:
                        Duna , de Denis Villeneuve, parece e soa incrível – e uma vez que a história (reconhecidamente de construção lenta) o fisgue, você estará na ponta da cadeira para a sequência.
                        </p>
                </section>
                <section className='informacao'>
                    <h1 className='linhaHorizontal'>
                            <span className='naLinha1'>
                            INFORMAÇÕES DO FILME
                            </span>
                    </h1>
                    <section className='fonte2'>
                        <p>Paul Atreides, um jovem brilhante e talentoso nascido em um grande destino além de sua compreensão, deve viajar para o planeta mais perigoso do universo para garantir o futuro de sua família e seu povo. À medida que forças malévolas explodem em conflito pelo suprimento exclusivo do planeta do recurso mais precioso que existe, apenas aqueles que podem vencer seu próprio medo sobreviverão.</p>
                        <p>Avaliação: PG-13 (Algumas Imagens Perturbadoras|Sequências de
                        Violência Forte|Material Sugestivo)</p>
                        <p>Gênero:
                        Aventura, Ficção Científica</p>
                        <p>Linguagem original:
                        Ingles</p>
                        <p>Diretor:
                        Denis Villeneuve</p>
                        <p>Produtor:
                        Denis Villeneuve ,Mary Parent ,Cale Boyter ,Joseph Caracciolo Jr.</p>
                        <p>Escritor:
                        Jon Spaihts , Denis Villeneuve , Eric Roth.</p>
                        <p>Data de lançamento (Cinemas):
                        22 de outubro de 2021  Ampla.
                        Data de lançamento (Transmissão):
                        22 de outubro de 2021.</p>
                        <p>Bilheteria (EUA bruto):	
                        US$ 108,3 milhões.</p>
                        <p>Tempo de execução:
                        2h 35m</p>
                        <p>Distribuidor:
                        Imagens da Warner Bros.</p>
                        <p>Mistura de som:
                        Dolby Atmos, Dolby Digital.</p>
                        <p>Proporção da tela:
                        Escopo (2.35:1)</p>
                    </section>
                </section>
              </div>
            )
    }

export default Filme