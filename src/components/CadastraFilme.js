import { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './CadastraFilme.css'


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
  }, [])

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
      <h1 className='novoFilme'>Novo Filme:</h1>
      <form className='formFilme' onSubmit={(event) => handleSubmit(event)}>
        <div class="colunasFilme">
          <div class="campoFilme"><label className='formTitulo'>Titulo:</label><input ref={tituloRef} type="text" name="titulo" /></div>
          <div class="campoFilme"><label className='formAno'>Ano:</label><input ref={anoRef} type="text" name="ano" /></div>
        </div>
        <div class="campoFilme"><label className='formFoto'>Foto:</label><input ref={fotoRef} type="text" name="foto" /></div>
        <div className='espaco'>
        <div class="campoFilme"><label className='formDescricao'>Descrição:</label><input ref={descricaoRef} type="text" name="descricao" /></div>
        <div class="campoFilme"><label className='formSaber'>Saber:</label><input ref={saberRef} type="text" name="saber" /></div>
        <div class="campoFilme"><label className='formInformacao'>Informação:</label><input ref={informacaoRef} type="text" name="informacao" /></div>
        </div>
        <input style={{ cursor: 'pointer' }} type="submit" className='botao2' value="Cadastrar Filme" />
        </form>
        </>
  )
}

export default CadastraFilme