// import React, { useState } from 'react';
// import { FaCartPlus } from 'react-icons/fa';
// import { useCart } from 'react-use-cart';
// import CartContent from './CartContent';
// import '../components/styles/CartIcon.css';

// const CartIcon = () => {
//   const { totalItems } = useCart();
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const toggleCart = () => {
//     setIsCartOpen(!isCartOpen);
//   };

//   return (
// <div className={`cart-icon-container ${isCartOpen ? 'open' : ''}`}>
//   <FaCartPlus
//     onClick={toggleCart}
//     style={{ cursor: 'pointer', fontSize: '3rem' }}
//   />
//   {totalItems > 0 && (
//     <div className="cart-count">
//       <div className="cart-count-inner">{totalItems}</div>
//     </div>
//   )}
//   {isCartOpen && <CartContent closeCart={() => setIsCartOpen(false)} />}
// </div>

//   );
// };

// export default CartIcon;



// import React, { useState } from 'react';
// import { FaTimes } from 'react-icons/fa';
// import { useCart } from 'react-use-cart';
// import CartContent from './CartContent';
// import { FaCartPlus } from 'react-icons/fa';
// import '../components/styles/CartIcon.css';

// const CartIcon = ({setIsColor}) => {
//   const { totalItems } = useCart();
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const toggleCart = () => {
//     setIsCartOpen(!isCartOpen);
//     setIsColor((prevColor)=>!prevColor)
//   };

//   const closeCart = () => {
//     setIsCartOpen(false);
//   };

//   return (
//     <div className={`cart-icon-container ${isCartOpen ? 'open' : ''}`}>
//       {isCartOpen ? (
//         <FaTimes
//           onClick={closeCart}
//           style={{ cursor: 'pointer', fontSize: '2rem' }}
//         />
//       ) : (
//         <FaCartPlus
//           onClick={toggleCart}
//           style={{ cursor: 'pointer', fontSize: '2rem' }}
//         />
//       )}
//       {totalItems > 0 && (
//         <div className="cart-count">
//           <div className="cart-count-inner">{totalItems}</div>
//         </div>
//       )}
//       {isCartOpen && <CartContent closeCart={() => setIsCartOpen(false)} />}
//     </div>
//   );
// };

// export default CartIcon;


// import React, { useState } from 'react';
// import { FaTimes } from 'react-icons/fa'; 
// import { useCart } from 'react-use-cart';
// import CartContent from './CartContent';
// import { FaCartPlus } from 'react-icons/fa';
// import '../components/styles/CartIcon.css';

// const CartIcon = () => {
//   const { totalItems } = useCart();
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const toggleCart = () => {
//     setIsCartOpen(!isCartOpen);
//   };

//   const closeCart = () => {
//     setIsCartOpen(false);
//   };

//   return (
//     <div className={`cart-icon-container ${isCartOpen ? 'open' : ''}`}>
//       {isCartOpen ? (
//         <FaTimes
//           onClick={closeCart}
//           style={{ cursor: 'pointer', fontSize: '2rem' }}
//         />
//       ) : (
//         <FaCartPlus
//           onClick={toggleCart}
//           style={{ cursor: 'pointer', fontSize: '2rem' }}
//         />
//       )}
//       {totalItems > 0 && (
//         <div className="cart-count">
//           <div className="cart-count-inner">{totalItems}</div>
//         </div>
//       )}
//       {isCartOpen && <CartContent closeCart={() => setIsCartOpen(false)} />}
//     </div>
//   );
// };

// export default CartIcon;





import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; 
import { useCart } from 'react-use-cart';
import CartContent from './CartContent';
import { FaCartPlus } from 'react-icons/fa';
import '../components/styles/CartIcon.css';

const CartIcon = () => {
  const { totalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div className={`cart-icon-container ${isCartOpen ? 'open' : ''}`}>
      {isCartOpen ? (
        <FaTimes
          onClick={closeCart}
          style={{ cursor: 'pointer', fontSize: '2rem' }}
        />
      ) : (
        <FaCartPlus
          onClick={toggleCart}
          style={{ cursor: 'pointer', fontSize: '2rem' }}
        />
      )}
      {!isCartOpen && totalItems > 0 && (
        <div className="cart-count">
          <div className="cart-count-inner">{totalItems}</div>
        </div>
      )}
      {isCartOpen && <CartContent closeCart={() => setIsCartOpen(false)} />}
    </div>
  );
};

export default CartIcon;




// import React, { useState } from 'react';
// import { FaTimes } from 'react-icons/fa';
// import { useCart } from 'react-use-cart';
// import CartContent from './CartContent';
// import { FaCartPlus } from 'react-icons/fa';
// import '../components/styles/CartIcon.css';

// const CartIcon = () => {
//   const { totalItems } = useCart();
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const toggleCart = () => {
//     setIsCartOpen(!isCartOpen);
//   };

//   const closeCart = () => {
//     setIsCartOpen(false);
//   };

//   return (
//     <div className={`cart-icon-container`}>
//       <div
//         className={`overlay ${isCartOpen ? 'active' : ''}`}
//         onClick={closeCart}
//       ></div>
//       {isCartOpen ? (
//         <div className="popup">
//           <FaTimes
//             onClick={closeCart}
//             style={{ cursor: 'pointer', fontSize: '2rem' }}
//           />
//           <CartContent closeCart={closeCart} />
//         </div>
//       ) : (
//         <FaCartPlus
//           onClick={toggleCart}
//           style={{ cursor: 'pointer', fontSize: '2rem' }}
//         />
//       )}
//       {totalItems > 0 && (
//         <div className="cart-count">
//           <div className="cart-count-inner">{totalItems}</div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartIcon;
