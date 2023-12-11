// import React, { useState, useEffect } from 'react';
// import { useCart } from 'react-use-cart';
// import '../components/styles/CartContent.css';
// import { FaTimes } from 'react-icons/fa';

// const Cart = () => {
//   const {
//     isEmpty,
//     totalUniqueItems,
//     items,
//     cartTotal,
//     updateItemQuantity,
//     removeItem,
//     emptyCart,
//   } = useCart();

//   const [displayedItems, setDisplayedItems] = useState(items);
//   const [isCartOpen, setIsCartOpen] = useState(false); // Define isCartOpen state

//   const handleIncrement = (item) => {
//     updateItemQuantity(item.id, item.quantity + 1);
//   };

//   const handleDecrement = (item) => {
//     updateItemQuantity(item.id, item.quantity - 1);
//   };

//   const toggleCart = () => {
//     setIsCartOpen(!isCartOpen);
//   };

//   useEffect(() => {
//     setDisplayedItems(items);
//   }, [items]);

//   if (isEmpty) return <h1 className="text-center">Your cart is Empty</h1>;

//   return (
//     <section className="py-4 container">
//       <div className="row justify-content-center">
//         <div className="col-12">
//           <h5>
//             Cart ({totalUniqueItems}) total Items: ({items.length})
//           </h5>
//           <table className="table table-light table-hover m-0">
//             <tbody>
//               <tr>
//                 <td>
//                   <button className="cart-toggle-button" onClick={toggleCart}>
//                     {isCartOpen ? <FaTimes /> : 'Cart'}
//                   </button>
//                 </td>
//               </tr>
//               {isCartOpen && (
//                 <tr>
//                   <td>
//                     <div className="item-list-container">
//                       <table className="table table-light table-hover m-0">
//                         <tbody>
//                           {displayedItems.map((item, index) => (
//                             <tr key={index}>
//                               <td>
//                                 <div className="image-container">
//                                   <img src={item.img} className="item-image" alt={item.title} />
//                                 </div>
//                               </td>
//                               <td>{item.title}</td>
//                               <td>{item.price}</td>
//                               <td>Quantity ({item.quantity})</td>
//                               <td>
//                                 <button
//                                   className="btn ms-2"
//                                   onClick={() => handleDecrement(item)}
//                                   style={{ cursor: 'pointer', color: 'white' }}
//                                 >
//                                   -
//                                 </button>
//                                 <button
//                                   className="btn ms-2"
//                                   onClick={() => handleIncrement(item)}
//                                   style={{ cursor: 'pointer', color: 'white' }}
//                                 >
//                                   +
//                                 </button>
//                                 <button
//                                   className="btn ms-2"
//                                   onClick={() => removeItem(item.id)}
//                                   style={{ cursor: 'pointer', color: 'white' }}
//                                 >
//                                   Remove Item
//                                 </button>
//                               </td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//           <div className="col-auto ms-auto">
//             <h2>Total Price: ${cartTotal}</h2>
//           </div>
//           <div className="col-auto">
//             <button
//               className="btn btn-gray common-button ms-2"
//               onClick={() => emptyCart()}
//               style={{ cursor: 'pointer', color: 'white' }}
//             >
//               Clear Cart
//             </button>
//             <button
//               className="btn btn-gray common-button ms-2"
//               style={{ cursor: 'pointer', color: 'white' }}
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Cart;




// import React, { useState, useEffect } from 'react';
// import { useCart } from 'react-use-cart';
// import '../components/styles/CartContent.css';
 


// const Cart = () => {
//   const {
//     isEmpty,
//     totalUniqueItems,
//     items,
//     cartTotal,
//     updateItemQuantity,
//     removeItem,
//     emptyCart,
//   } = useCart();

//   const [displayedItems, setDisplayedItems] = useState(items);
  
//   const handleIncrement = (item) => {
//     updateItemQuantity(item.id, item.quantity + 1);
//   };
  
//   const handleDecrement = (item) => {
//     updateItemQuantity(item.id, item.quantity - 1);
//   };

//   useEffect(() => {
//     setDisplayedItems(items);
//   }, [items]);

//   if (isEmpty) return <h1 className="text-center">Your cart is Empty</h1>;

//   return (
//     <section className="py-4 container">
//       <div className="row justify-content-center">
//         <div className="col-12">
//           <h5>
//             Cart ({totalUniqueItems}) total Items: ({items.length})
//           </h5>
//           <table className="table table-light table-hover m-0">
//             <tbody>
//               <tr>
//                 <td>
                  
//                 </td>
//               </tr>
//               <tr>
//                 <td>
//                   <div className="item-list-container">
//                     <table className="table table-light table-hover m-0">
//                       <tbody>
//                        {displayedItems.map((item, index) => (
//                           <tr key={index}> 
//                             <td>
//                               <div className="image-container">
                             
//                                 <img
//                                   src={item.url}
//                                   className="item-image"
//                                   alt={item.title}
//                                   // Add loading and error handling
//                                   loading="lazy"
//                                   onError={(e) => {
//                                     e.target.src = 'fallback-image-url'; // Provide a fallback image URL
//                                     e.target.onerror = null; // Prevent infinite loop
//                                   }}
//                                 />

//                               </div>
//                             </td>
//                             <td>{item.title}</td>
//                             <td>{item.price}
//                             </td>
//                              <td>Quantity  ({item.quantity})</td>
//                                      <td>
//                               <button
//                                 className="btn ms-2"
//                                 onClick={() => handleDecrement(item)}
//                                 style={{ cursor: 'pointer', color: 'white' }}
//                               >
//                                 -
//                               </button>
//                               <button
//                                 className="btn ms-2"
//                                 onClick={() => handleIncrement(item)}
//                                 style={{ cursor: 'pointer', color: 'white' }}
//                               >
//                                 +
//                               </button>
//                               <button
//                                 className="btn ms-2"
//                                 onClick={() => removeItem(item.id)}
//                                 style={{ cursor: 'pointer', color: 'white' }}
//                               >
//                                 Remove Item
//                               </button>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//           <div className="col-auto ms-auto">
//             <h2>Total Price: ${cartTotal}</h2>
//           </div>
//           <div className="col-auto">
//             <button
//               className="btn btn-gray common-button ms-2"
//               onClick={() => emptyCart()}
//               style={{ cursor: 'pointer', color: 'white' }}
//             >
//               Clear Cart
//             </button>
//             <button
//               className="btn btn-gray common-button ms-2"
//               style={{ cursor: 'pointer', color: 'white' }}
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Cart;





import React, { useState, useEffect } from 'react';
import { useCart } from 'react-use-cart';
import '../components/styles/CartContent.css';

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const [displayedItems, setDisplayedItems] = useState(items);
  const [total, setTotal] = useState(cartTotal);

  const handleIncrement = (item) => {
    updateItemQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = (item) => {
    updateItemQuantity(item.id, item.quantity - 1);
  };

  useEffect(() => {
    setDisplayedItems(items);
  }, [items]);

  useEffect(() => {

    const newTotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(newTotal);
  }, [items, cartTotal]); 

  if (isEmpty) return <h1 className="text-center">Your cart is Empty</h1>;

  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
         <div className="col-12"> 
          <h5>
            Cart ({totalUniqueItems}) total Items: ({items.length})
          </h5>
          <table className="table table-light table-hover m-0">
            <tbody>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div className="item-list-container">
                    <table className="table table-light table-hover m-0">
                      <tbody>
                        {displayedItems.map((item, index) => (
                          <tr key={index}>
                            <td>
                              <div className="image-container">
                                <img
                                  src={item.url}
                                  className="item-image"
                                  alt={item.title}
                                  loading="lazy"
                                  onError={(e) => {
                                  e.target.src = 'fallback-image-url';
                                  e.target.onerror = null;
                                  }}
                                />
                              </div>
                            </td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>Quantity ({item.quantity})</td>
                            <td>
                              <button
                                className="btn ms-2"
                                onClick={() => handleDecrement(item)}
                                style={{ cursor: 'pointer', color: 'white' }}
                              >
                                -
                              </button>
                              <button
                                className="btn ms-2"
                                onClick={() => handleIncrement(item)}
                                style={{ cursor: 'pointer', color: 'white' }}
                              >
                                +
                              </button>
                              <button
                                className="btn ms-2"
                                onClick={() => removeItem(item.id)}
                                style={{ cursor: 'pointer', color: 'white' }}
                              >
                                Remove Item
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="col-auto ms-auto">
            <h2>Total Price: ${total ? total.toFixed(2) : '0.00'}</h2>
          </div>
          <div className="col-auto">
            <button
              className="btn btn-gray common-button ms-2"
              onClick={() => emptyCart()}
              style={{ cursor: 'pointer', color: 'white' }}
            >
              Clear Cart
            </button>
            <button
              className="btn btn-gray common-button ms-2"
              style={{ cursor: 'pointer', color: 'white' }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
