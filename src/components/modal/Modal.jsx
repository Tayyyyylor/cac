/* eslint-disable react/prop-types */
import "./Modal.css";

function Modal({ modal, closeModal }) {

  function cancelHandler() {
    closeModal()
  }

    return (
      <div className="modal">
        <h2 className="title-modal">{modal.title}</h2>
        <p className="text-modal">
          {modal.text}
        </p>
        <button className="btn-modal" onClick={cancelHandler}>
          Retour
        </button>
   
      </div>
    );
  }

export default Modal;
