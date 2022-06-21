import { useRef, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';


const CadastraFilme = () => {

  const tituloRef = useRef();
  const anoRef = useRef();
  const fotoRef = useRef();
  const descricaoRef = useRef();
  const saberRef = useRef();
  const informacaoRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    tituloRef.current.focus()
  },[])

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append('titulo', event.target[0].value);
    formData.append('ano', event.target[1].value);
    formData.append('foto', event.target[2].value);
    formData.append('descricao', event.target[3].value);
    formData.append('saber', event.target[4].value);
    formData.append('informacao', event.target[5].value);
    
    fetch("http://localhost/lp2-back/api/product/create", {
        method: 'POST',
        body: formData,
      })
      .then((response) => response.json())
      .then((data) => {
        tituloRef.current.value = ''
        anoRef.current.value = ''
        fotoRef.current.value = ''
        descricaoRef.current.value = ''
        saberRef.current.value = ''
        informacaoRef.current.value = ''
        tituloRef.current.focus()
        navigate('/admin/')
      });
  } 

  return (
    <>
    <h1>Novo Filme</h1>
    <form onSubmit={(event) => handleSubmit(event)}>
      <label>Titulo:</label><input ref={tituloRef} type="text" name="titulo"/>
      <label>Ano:</label><input ref={anoRef} type="text" name="ano"/>
      <label>Foto:</label><input ref={fotoRef} type="text" name="foto"/>
      <label>Descrição:</label><input ref={descricaoRef} type="text" name="descricao"/>
      <label>Saber:</label><input ref={saberRef} type="text" name="saber"/>
      <label>Informação:</label><input ref={informacaoRef} type="text" name="informacao"/>
      
      <input type="submit" value="Cadastrar Filme" />
    </form>
    </>
  )
}

export default CadastraFilme