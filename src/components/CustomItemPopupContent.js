


// import React, { useState } from 'react';
// // import CancelIcon from '@mui/icons-material/Cancel';
// import '../components/styles/CustomItemPopupContent.css';
// import Footer  from '../components/Footer';
// import Navbar from '../components/Navbar';


// const CustomItemPopupContent = ({ item, addToCart, closeModal }) => {
//   const imageSizeStyle = {
//     //  width: '300px',
//     //  height: '300px',
//     //  margintop:'30px',
//     width: '100%',
//     height: 'auto',
//     margintop: '15px',
//     borderradius: '8px',
//   };

//   const [quantity, setQuantity] = useState(1);

//   const incrementQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const decrementQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   return (
//     <div>
//       <Navbar/>
//     <div className="popup-content">
      
//       <div className="top-left">
//         {/* <CancelIcon className="close-button" onClick={closeModal} /> */}
//       </div>
//        <img src={item.url} alt={item.Name} style={imageSizeStyle} />
//       <h3>{item.Name}</h3>
//       <p>Price: {item.price}</p> 
//       <div className="quantity-control">
//         <button onClick={decrementQuantity}>-</button>
//         <span>{quantity}</span>
//         <button onClick={incrementQuantity}>+</button>
//       </div>
//       <button className="add-to-cart-button" onClick={() => addToCart({ ...item, quantity })}>
//         Add to Cart
//       </button>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default CustomItemPopupContent;



// import React, { useState } from 'react';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import '../components/styles/CustomItemPopupContent.css';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';

// const CustomItemPopupContent = ({ item, addToCart, closeModal }) => {
//   const imageSizeStyle = {
//     width: '100%',
//     height: 'auto',
//     marginTop: '15px',
//     borderRadius: '8px',
//   };

//   const [quantity, setQuantity] = useState(1);
//   const [cartCount, setCartCount] = useState(0);

//   const incrementQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const decrementQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleAddToCart = () => {
//     addToCart({ ...item, quantity });
//     setCartCount((prevCount) => prevCount + quantity); // Update cart count by the selected quantity
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="popup-content">
//         {/* ... */}
//         <div className="top-right">
//           {/* Shopping cart icon in the top right corner */}
//           <ShoppingCartIcon />
//           {cartCount > 0 && <span>{cartCount}</span>}
//         </div>
//         <img src={item.url} alt={item.Name} style={imageSizeStyle} />
//         <h3>{item.Name}</h3>
//         <p>Price: {item.price}</p>
//         <div className="quantity-control">
//           <button onClick={decrementQuantity}>-</button>
//           <span>{quantity}</span>
//           <button onClick={incrementQuantity}>+</button>
//         </div>
//         <button className="add-to-cart-button" onClick={handleAddToCart}>
//           Add to Cart
//         </button>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default CustomItemPopupContent;



// import React, { useState } from 'react';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import '../components/styles/CustomItemPopupContent.css';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';

// const CustomItemPopupContent = ({ item, addToCart, closeModal }) => {
//   const imageSizeStyle = {
//     width: '100%',
//     height: 'auto',
//     marginTop: '15px',
//     borderRadius: '8px',
//   };

//   const [quantity, setQuantity] = useState(1);
//   const [cartCount, setCartCount] = useState(0);

//   const incrementQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const decrementQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleAddToCart = () => {
//     addToCart({ ...item, quantity });
//     setCartCount((prevCount) => prevCount + quantity);
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="popup-content">
//         {/* ... */}
//         <img src={item.url} alt={item.Name} style={imageSizeStyle} />
//         <h3>{item.Name}</h3>
//         <p>Price: {item.price}</p>
//         <div className="quantity-control">
//           <button onClick={decrementQuantity}>-</button>
//           <span>{quantity}</span>
//           <button onClick={incrementQuantity}>+</button>
//         </div>
//         <button className="add-to-cart-button" onClick={handleAddToCart}>
//           Add to Cart
//         </button>
//       </div>
//       <Footer />

//       {/* Shopping cart icon outside of the popup */}
//       <div className="cart-icon-container">
//         <ShoppingCartIcon />
//         {cartCount > 0 && <span>{cartCount}</span>}
//       </div>
//     </div>
//   );
// };

// export default CustomItemPopupContent;



// import React, { useState } from 'react';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import '../components/styles/CustomItemPopupContent.css';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';
// import CartContent from './CartContent'; 

// const CustomItemPopupContent = ({ item, addToCart, closeModal }) => {
//   const imageSizeStyle = {
//     width: '100%',
//     height: 'auto',
//     marginTop: '15px',
//     borderRadius: '8px',
//   };

//   const [quantity, setQuantity] = useState(1);
//   const [cartCount, setCartCount] = useState(0);
//   const [showCart, setShowCart] = useState(false);

//   const incrementQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const decrementQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleAddToCart = () => {
//     addToCart({ ...item, quantity });
//     setCartCount((prevCount) => prevCount + quantity);
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="popup-content">
    
//         <img src={item.url} alt={item.Name} style={imageSizeStyle} />
//         <h3>{item.Name}</h3>
//         <p>Price: {item.price}</p>
//         <div className="quantity-control">
//           <button onClick={decrementQuantity}>-</button>
//           <span>{quantity}</span>
//           <button onClick={incrementQuantity}>+</button>
//         </div>
//         <button className="add-to-cart-button" onClick={handleAddToCart}>
//           Add to Cart
//         </button>
//       </div>
//       <Footer />

//       {/* Shopping cart icon outside of the popup */}
//       <div className="cart-icon-container" onClick={() => setShowCart(!showCart)}>
//         <ShoppingCartIcon />
//         {cartCount > 0 && <span>{cartCount}</span>}
//       </div>

//       {/* Pop-up for CartContent */}
//       {showCart && (
//         <div className="cart-popup">
//           <CartContent />
//         </div>
//       )}
//     </div>
//   );
// };

// export default CustomItemPopupContent;




// import React, { useState } from 'react';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import '../components/styles/CustomItemPopupContent.css';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';
// import CartContent from './CartContent';

// const CustomItemPopupContent = ({ item, addToCart, closeModal }) => {
//   const imageSizeStyle = {
//     width: '100%',
//     height: 'auto',
//     marginTop: '15px',
//     borderRadius: '8px',
//   };

//   const [quantity, setQuantity] = useState(1);
//   const [cartCount, setCartCount] = useState(0);
//   const [showCart, setShowCart] = useState(false);

//   const incrementQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const decrementQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleAddToCart = () => {
//     addToCart({ ...item, quantity });
//     setCartCount((prevCount) => prevCount + quantity);
//     setShowCart(false); // Close the cart pop-up
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="popup-content">
//         <img src={item.url} alt={item.Name} style={imageSizeStyle} />
//         <h3>{item.Name}</h3>
//         <p>Price: {item.price}</p>
//         <div className="quantity-control">
//           <button onClick={decrementQuantity}>-</button>
//           <span>{quantity}</span>
//           <button onClick={incrementQuantity}>+</button>
//         </div>
//         <button className="add-to-cart-button" onClick={handleAddToCart}>
//           Add to Cart
//         </button>
//       </div>
//       <Footer />

//       {/* Shopping cart icon outside of the popup */}
//       {showCart ? null : (
//         <div className="cart-icon-container" onClick={() => setShowCart(!showCart)}>
//           <ShoppingCartIcon />
//           {cartCount > 0 && <span>{cartCount}</span>}
//         </div>
//       )}

//       {/* Pop-up for CartContent */}
//       {showCart && (
//         <div className="cart-popup">
//            <CartContent /> 
//         </div>
//       )}
//     </div>
//   );
// };

// export default CustomItemPopupContent;
 




// import React, { useState } from 'react';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import CloseIcon from '@mui/icons-material/Close'; 
// import '../components/styles/CustomItemPopupContent.css';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';
// import CartContent from './CartContent';

// const CustomItemPopupContent = ({ item, addToCart, closeModal }) => {
//   const imageSizeStyle = {
//     width: '100%',
//     height: 'auto',
//     marginTop: '15px',
//     borderRadius: '8px',
//   };

//   const [quantity, setQuantity] = useState(1);
//   const [cartCount, setCartCount] = useState(0);
//   const [showCart, setShowCart] = useState(false);

//   const incrementQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const decrementQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleAddToCart = () => {
//     addToCart({ ...item, quantity });
//     setCartCount((prevCount) => prevCount + quantity);
//     setShowCart(false); // Close the cart pop-up
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="popup-content">
//         <img src={item.url} alt={item.Name} style={imageSizeStyle} />
//         <h3>{item.Name}</h3>
//         <p>Price: {item.price}</p>
//         <div className="quantity-control">
//           <button onClick={decrementQuantity}>-</button>
//           <span>{quantity}</span>
//           <button onClick={incrementQuantity}>+</button>
//         </div>
//         <button className="add-to-cart-button" onClick={handleAddToCart}>
//           Add to Cart
//         </button>
//       </div>
//       <Footer />

//       {/* Shopping cart icon outside of the popup */}
//       {showCart ? null : (
//         <div className="cart-icon-container" onClick={() => setShowCart(!showCart)}>
//           <ShoppingCartIcon />
//           {cartCount > 0 && <span>{cartCount}</span>}
//         </div>
//       )}

//       {/* Pop-up for CartContent */}
//       {showCart && (
//         <div className="cart-popup">
//           {/* Close button */}
//           <div className="close-icon-container" onClick={() => setShowCart(false)}>
//             <CloseIcon />
//           </div>
//           <CartContent />
//         </div>
//       )}
//     </div>
//   );
// };

// export default CustomItemPopupContent;




// import React, { useState } from 'react';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import CloseIcon from '@mui/icons-material/Close'; 
// import '../components/styles/CustomItemPopupContent.css';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';
// import CartContent from './CartContent';
// import { useCart } from 'react-use-cart'; // Import useCart hook

// const CustomItemPopupContent = ({ item, closeModal }) => {
//   const imageSizeStyle = {
//     width: '100%',
//     height: 'auto',
//     marginTop: '15px',
//     borderRadius: '8px',
//   };

//   const [quantity, setQuantity] = useState(1);
//   const { addItem } = useCart(); // Destructure addItem from useCart
//   const { totalItems } = useCart(); // Destructure totalItems from useCart
//   const [showCart, setShowCart] = useState(false);

//   const incrementQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const decrementQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleAddToCart = () => {
//     addItem(item, quantity); // Use addItem to add item to the cart
//     setQuantity(1); // Reset quantity after adding to cart
//     setShowCart(true); // Show the cart pop-up
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="popup-content">
//         <img src={item.url} alt={item.Name} style={imageSizeStyle} />
//         <h3>{item.Name}</h3>
//         <p>Price: {item.price}</p>
//         <div className="quantity-control">
//           <button onClick={decrementQuantity}>-</button>
//           <span>{quantity}</span>
//           <button onClick={incrementQuantity}>+</button>
//         </div>
//         <button className="add-to-cart-button" onClick={handleAddToCart}>
//           Add to Cart
//         </button>
//       </div>
//       <Footer />

//       {/* Shopping cart icon outside of the popup */}
//       <div className="cart-icon-container" onClick={() => setShowCart(!showCart)}>
//         <ShoppingCartIcon />
//         {totalItems > 0 && <span>{totalItems}</span>}
//       </div>

//       {/* Pop-up for CartContent */}
//       {showCart && (
//         <div className="cart-popup">
//           {/* Close button */}
//           <div className="close-icon-container" onClick={() => setShowCart(false)}>
//             <CloseIcon />
//           </div>
//           <CartContent />
//         </div>
//       )}
//     </div>
//   );
// };

// export default CustomItemPopupContent;



import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close'; 
import '../components/styles/CustomItemPopupContent.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import CartContent from './CartContent';
import { useCart } from 'react-use-cart';

const CustomItemPopupContent = ({ item, closeModal }) => {
  const imageSizeStyle = {
    width: '100%',
    height: 'auto',
    marginTop: '15px',
    borderRadius: '8px',
  };

  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const { totalItems } = useCart();
  const [showCart, setShowCart] = useState(false);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addItem(item, quantity);
    setQuantity(1);
    setShowCart(true);
  };

  return (
    <div>
      <Navbar />
      <div className="popup-content">
        <img src={item.url} alt={item.Name} style={imageSizeStyle} />
        <h3>{item.Name}</h3>
        <p>Price: {item.price}</p>
        <div className="quantity-control">
          <button onClick={decrementQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={incrementQuantity}>+</button>
        </div>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
      <Footer />

      {/* {!showCart && (
        <div className="cart-icon-container" onClick={() => setShowCart(!showCart)}>
          <ShoppingCartIcon />
          {totalItems > 0 && <span>{totalItems}</span>}
        </div>
      )} */}

      {/* Shopping cart icon outside of the popup */}
{!showCart && (
  <div className="cart-icon-container" onClick={() => setShowCart(!showCart)}>
    <ShoppingCartIcon />
    {totalItems > 0 && <span className="cart-icon-count">{totalItems}</span>}
  </div>
)}

      {showCart && (
        <div className="cart-popup">
          <div className="close-icon-container" onClick={() => setShowCart(false)}>
            <CloseIcon />
          </div>
          <CartContent />
        </div>
      )}
    </div>
  );
};

export default CustomItemPopupContent;
