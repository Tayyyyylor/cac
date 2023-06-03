/* eslint-disable react/prop-types */
import "./Modal.css";

function Modal(props) {

  function cancelHandler() {
    props.onCancel();
  }

  return (
    <div className="modal">
      <h2 className="title-modal">toto</h2>
      <p className="text-modal">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
        libero doloremque cum dicta adipisci, perspiciatis recusandae ea
        sapiente, quidem vel accusantium. Accusamus aspernatur, perspiciatis
        fuga deleniti aliquam blanditiis nemo excepturi.
      </p>
      <button className="btn-modal" onClick={cancelHandler}>
        Retour
      </button>
   
    </div>
  );
}

export default Modal;
