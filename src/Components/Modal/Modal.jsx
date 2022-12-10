import "./Modal.css";

function Modal({ModalClose,children}){
    
    const toCloseModal = () => ModalClose(false);

    return <article className="modal">
        <div  className="modal-container">
            <button onClick={toCloseModal} className="btn-close">X</button>
            {children}
        </div>
    </article>
}
export default Modal;