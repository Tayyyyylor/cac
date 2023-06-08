/* eslint-disable react/prop-types */
import "./Cards.css"
import { useState } from "react";
import Modal from "../modal/Modal";

function Cards({card}) {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

 

  return (
  
    <div className='cards-container'>
        <h5 className='title-cards'>{card.title}</h5>
        <p className='text-cards'><span className="quotes-cards">&quot;</span>{card.desc}<span className="quotes-cards">&quot;</span></p>
        <button className='button-cards' onClick={openModal}>voir plus</button>
        {showModal && <Modal onCancel={() => setShowModal(false)} />}
    </div>
  
  )
}

export default Cards