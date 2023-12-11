// import React from 'react';
// import { useCart } from "react-use-cart";
// import '../components/styles/Itemcard.css'

// const Itemcard = (props) => {
//   const { addItem } = useCart();

//   const imageSizeStyle = {
//     width: '100%',
//     height: '200px', 
//     objectFit: 'cover',
//   };

//   return (
//     <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
//       <div className='card p-0 overflow-hidden h-100 shadow'>
//         <img src={props.img} alt={props.title} style={imageSizeStyle} />
//         <div className="card-body text-center">
//           <h5 className="card-title">{props.title}</h5>
//           <h5 className="card-title">{props.price}</h5>
//           <p className="card-text">{props.desc}</p>
//           <button
//           className="btn btn-success btn-success-custom"  
      
//            onClick={() => addItem(props.item)}
//           >
//               Add to Cart
//          </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Itemcard; 





import React, { useState } from 'react';
import { useCart } from 'react-use-cart';
import ItemPopup from './ItemPopup';
import '../components/styles/Itemcard.css';
// import { Link } from 'react-router-dom';

const Itemcard = (props) => {
  const id = props.item.id
  const { addItem } = useCart();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const imageSizeStyle = {
    width: '100%',
    height: '200px', 
    objectFit: 'cover',
 
  };

  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow">
        <button onClick={openModal}>
          <img src={props.img} alt={props.title} style={imageSizeStyle} className="item-image" />
        </button>
        <div className="card-body text-center">
          <h5 className="card-title">{props.title}</h5>
          <h5 className="card-title">{props.price}</h5>
          <p className="card-text">{props.desc}</p>
           <button className="btn btn-custom" onClick={() => addItem(props.item)}>
            Add to Cart
          </button> 
          {/* <Link to={`/menu/${id}`}>Details</Link> */}
        </div>
      
      </div>
      <ItemPopup isOpen={modalIsOpen} item={props.item} closeModal={closeModal} />
    </div>
    
  );
};

export default Itemcard;


