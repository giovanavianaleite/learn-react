import './Filmes.css'
import ListaDeFilmes from '../components/ListaDeFilmes'

function Home() {
    return (
        <>
        <div className="linhaVertical">
            <h1 className='font'>FILMES</h1>
        </div>
        <div className="lista">
        <ListaDeFilmes />
        </div>
        </>
    )
}

export default Home