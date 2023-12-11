import React from 'react';
import Modal from 'react-modal';
import CustomItemPopupContent from './CustomItemPopupContent';


Modal.setAppElement('#root');

const ItemPopup = ({ isOpen, item, addToCart, removeItem, closeModal }) => {
  const customStyles = {
    content: {
      maxWidth: '40%',
      maxHeight: '500px',   
      margin: 'auto',
      marginTop: '200px',
      zIndex: 9999,
    }, 
  };

  return (

    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel={item.Name}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
      style={customStyles}
    >
      <CustomItemPopupContent
        item={item}
        addToCart={addToCart}
        removeItem={removeItem}
        closeModal={closeModal}
      />
    </Modal>

  );
};

export default ItemPopup;


