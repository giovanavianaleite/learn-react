import {Button, Modal} from 'react-bootstrap'
import  'bootstrap/dist/css/bootstrap.min.css' ;


const Modalzin = (props) => {
    const {excluir, product, setproducts, onHide, show, handleClose} = props
  
    const handleTrashClick = (productId) => {
      const formData = new FormData();
      formData.append('id', productId);
      fetch("http://localhost/lp2-back/api/product/delete", {
        method: 'POST',
        body: formData,
        })
        .then((response) => response.json())
        .then((data) => {
          props.onHide()
          let productFiltered = product.filter((product) =>{ 
            return product.id !== productId;
          });
          setproducts(productFiltered)
        });
      }

    return (
      <>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      />
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="md">
        <Modal.Header closeButton>
          <Modal.Title>AVISO!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Tem certeza que deseja excluir esse filme?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => {handleTrashClick(excluir)}}>Excluir</Button>
          <Button variant="danger " onClick={onHide}>Cancelar</Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  }
  
  export default Modalzin