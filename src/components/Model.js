import React from 'react';

function Modal({ item, closeModal }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>{item.Name}</h2>
        <p>Price: {item.price}</p>
        <img src={item.url} alt={item.Name} />

      </div>
    </div>
  );
}

export default Modal;

