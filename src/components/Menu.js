
// import React, { useEffect, useState, useRef } from 'react';
// import { db, collection, getDocs, query } from './Config';
// import Itemcard from '../components/Itemcard';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import CartIcon from '../components/CartIcon';
// import CartPage from '../components/CartPage';
// import '../components/styles/Menu.css';
// import TextField from '@mui/material/TextField';
// import { Link } from 'react-router-dom';


// function MenuAndClasses() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [laprensaItems, setLaprensaItems] = useState([]);
//   const [tacosItems, setTacosItems] = useState([]);
//   const [riceBowlItems, setRiceBowlItems] = useState([]);
//   const [enchiladasItems, setEnchiladasItems] = useState([]);
//   const [kidsMenuItems, setKidsMenuItems] = useState([]);
//   const [tamalesItems, setTamalesItems] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [showCart] = useState(false);
//   const [cocktailItems, setCocktailItems] = useState([]);
//   const foodSectionRef = useRef(null);
//   const drinksSectionRef = useRef(null);
  





//   useEffect(() => {
//     const fetchData = async () => {
//       try {

//         // Fetch data from 'Laprensa' collection
//         const laprensaCollectionRef = collection(db, 'Laprensa');
//         const laprensaQuery = query(laprensaCollectionRef);
//         const laprensaQuerySnapshot = await getDocs(laprensaQuery);

//         const laprensaData = [];

//         laprensaQuerySnapshot.forEach((doc) => {
//           const itemData = doc.data();
//           laprensaData.push({
//             id: doc.id,
//             Name: itemData.Name,
//             price: itemData.price,
//             url: itemData.url,
//           });
//         });

//         setLaprensaItems(laprensaData);

//         // Fetch data from 'Tacos' collection
//         const tacosCollectionRef = collection(db, 'Tacos');
//         const tacosQuery = query(tacosCollectionRef);
//         const tacosQuerySnapshot = await getDocs(tacosQuery);

//         const tacosData = [];

//         tacosQuerySnapshot.forEach((doc) => {
//           const itemData = doc.data();
//           tacosData.push({
//             id: doc.id,
//             Name: itemData.Name,
//             price: itemData.price,
//             url: itemData.url,
//             additionalField: itemData.additionalField,
//           });
//         });

//         setTacosItems(tacosData);

//         // Fetch data from 'Rice Bowl' collection
//         const riceBowlCollectionRef = collection(db, 'Rice Bowl');
//         const riceBowlQuery = query(riceBowlCollectionRef);
//         const riceBowlQuerySnapshot = await getDocs(riceBowlQuery);

//         const riceBowlData = [];

//         riceBowlQuerySnapshot.forEach((doc) => {
//           const itemData = doc.data();
//           riceBowlData.push({
//             id: doc.id,
//             Name: itemData.Name,
//             price: itemData.price,
//             url: itemData.url,
//             additionalField: itemData.additionalField,
//           });
//         });

//         setRiceBowlItems(riceBowlData);

        
//         // Fetch data from 'Enchiladas' collection
//         const enchiladasCollectionRef = collection(db, 'Enchiladas');
//         const enchiladasQuery = query(enchiladasCollectionRef);
//         const enchiladasQuerySnapshot = await getDocs(enchiladasQuery);

//         const enchiladasData = [];

//         enchiladasQuerySnapshot.forEach((doc) => {
//           const itemData = doc.data();
//           enchiladasData.push({
//             id: doc.id,
//             Name: itemData.Name,
//             price: itemData.price,
//             url: itemData.url,
//           });
//         });

//         setEnchiladasItems(enchiladasData);

//         // Fetch data from 'Kids Menu' collection
//         const kidsMenuCollectionRef = collection(db, 'Kids Menu');
//         const kidsMenuQuery = query(kidsMenuCollectionRef);
//         const kidsMenuQuerySnapshot = await getDocs(kidsMenuQuery);

//         const kidsMenuData = [];

//         kidsMenuQuerySnapshot.forEach((doc) => {
//           const itemData = doc.data();
//           kidsMenuData.push({
//             id: doc.id,
//             Name: itemData.Name,
//             price: itemData.price,
//             url: itemData.url,
//           });
//         });

//         setKidsMenuItems(kidsMenuData);

//         // Fetch data from 'Tamales' collection
//         const tamalesCollectionRef = collection(db, 'Tamales');
//         const tamalesQuery = query(tamalesCollectionRef);
//         const tamalesQuerySnapshot = await getDocs(tamalesQuery);

//         const tamalesData = [];

//         tamalesQuerySnapshot.forEach((doc) => {
//           const itemData = doc.data();
//           tamalesData.push({
//             id: doc.id,
//             Name: itemData.Name,
//             price: itemData.price,
//             url: itemData.url,
//           });
//         });

//         setTamalesItems(tamalesData);
    

//       const cocktailsCollectionRef = collection(db, 'Cocktails');
//       const cocktailsQuery = query(cocktailsCollectionRef);
//       const cocktailsQuerySnapshot = await getDocs(cocktailsQuery);

//       const cocktailsData = [];

//       cocktailsQuerySnapshot.forEach((doc) => {
//         const itemData = doc.data();
//         cocktailsData.push({
//           id: doc.id,
//           Name: itemData.Name,
//           price: itemData.price,
//           url: itemData.url,
//         });
//       });

//       setCocktailItems(cocktailsData);

//     } 
      
      
//       catch (error) {
//         console.error('Error fetching data from Firestore:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSearch = (e) => {
//     const { value } = e.target;
//     setSearchQuery(value);
//   };

//   const addToCart = (item) => {
//     setCart([...cart, item]);
//   };

//   const removeFromCart = (index) => {
//     const updatedCart = [...cart];
//     updatedCart.splice(index, 1);
//     setCart(updatedCart);
//   };

//   const scrollToFoodSection = () => {
//     if (foodSectionRef.current) {
//       foodSectionRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const scrollToDrinksSection = () => {
//     if (drinksSectionRef.current) {
//       drinksSectionRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

  
//   return (
//     <div className="d-flex flex-column align-items-center">
//        <Navbar /> 
//       <div className="text-center mt-3">
//         <h1 className="text-content" style={{ marginTop: '300px' }}>
//           All Items
//         </h1>
//         <div className="search-container">
//           <TextField
//             label="Search for food..."
//             variant="outlined"
//             value={searchQuery}
//             onChange={handleSearch}
//             style={{ width: '300px', marginTop: '50px' }}
//           />

//         <div className="menu-container">
//         <a href="#drinks" className="menu-link" onClick={scrollToFoodSection}>
//               Food
//             </a>
//             &nbsp;&nbsp;&nbsp;
//             <a href="#drinks" className="menu-link" onClick={scrollToDrinksSection}>
//               Drinks
//             </a>
//           </div>
        
          
     



//       {/* ... Your drinks items ... */}

 
//             {/* {laprensaItems.length > 0 && (
//             <div className="starters-heading">
//               <h1>Starters</h1>
//             </div>
//           )}
//              <section className="py-4 container">
//             <div className='row justify-content-center '>
//               {laprensaItems.map((item, index) => (
                 
//                   <Itemcard
//                   img={item.url}
//                   title={item.Name}
//                   desc={item.price}
//                   item={item}
//                   key={item.id}
//                   addToCart={() => addToCart(item)}
//                 />     
              
//               ))}
//             </div>
//           </section>     */}


//    <div className="food-heading"  ref={foodSectionRef}>
//             <h1>FOOD</h1>
//           </div>


//        {laprensaItems.length > 0 && (
//             <div className="starters-heading">
//               <h1>Starters</h1>
//             </div>
//           )}
//          <section className="py-4 container">
//           <div className="row justify-content-center">    
//             {laprensaItems.map((item, index) => (
//               <Link to={`/menu/${item.id}`} key={item.id} className="menu-link">
//                 <Itemcard
//                   img={item.url}
//                   title={item.Name}
//                   desc={item.price}
//                   item={item}
//                   addToCart={() => addToCart(item)}
//                 />
//               </Link>
//             ))}
//           </div> 
//             </section>       


//           {tacosItems.length > 0 && (
//             <div className="tacos-heading">
//               <h1>Tacos</h1>
//             </div>
//           )}
//           <section className="py-4 container">
//             <div className='row justify-content-center '>
//               {tacosItems.map((item, index) => (
//                  <Link to={`/menu/${item.id}`} key={item.id} className="menu-link">
//                 <Itemcard
//                   img={item.url}
//                   title={item.Name}
//                   desc={item.price}
//                   item={item}
//                   key={item.id}
//                   addToCart={() => addToCart(item)}
//                  // <Link to={`/tacos/${item.id}`}>Details</Link>
//                 />
//                 </Link>
//               ))}
//             </div>
//           </section>


//           {riceBowlItems.length > 0 && (
//             <div className="rice-bowl-heading">
//               <h1>Rice Bowl</h1>
//             </div>
//           )}
//           <section className="py-4 container">
//             <div className='row justify-content-center '>
//               {riceBowlItems.map((item, index) => (
//                    <Link to={`/menu/${item.id}`} key={item.id} className="menu-link">
//                 <Itemcard
//                   img={item.url}
//                   title={item.Name}
//                   desc={item.price}
//                   item={item}
//                   key={item.id}
//                   addToCart={() => addToCart(item)}
//                 />
//                 </Link>
//               ))}
//             </div>
//           </section>
//           {enchiladasItems.length > 0 && (
//             <div className="enchiladas-heading">
//               <h1>Enchiladas</h1>
//             </div>
//           )}
//           <section className="py-4 container">
//             <div className='row justify-content-center '>
//               {enchiladasItems.map((item, index) => (
//                 <Link to={`/menu/${item.id}`} key={item.id} className="menu-link">
//                 <Itemcard
//                   img={item.url}
//                   title={item.Name}
//                   desc={item.price}
//                   item={item}
//                   key={item.id}
//                   addToCart={() => addToCart(item)}
//                 />
//                 </Link>
//               ))}
//             </div>
//           </section>
//           {kidsMenuItems.length > 0 && (
//             <div className="kids-menu-heading">
//               <h1>Kids Menu</h1>
//             </div>
//           )}
//           <section className="py-4 container">
//             <div className='row justify-content-center '>
//               {kidsMenuItems.map((item, index) => (
//                 <Link to={`/menu/${item.id}`} key={item.id} className="menu-link">
//                 <Itemcard
//                   img={item.url}
//                   title={item.Name}
//                   desc={item.price}
//                   item={item}
//                   key={item.id}
//                   addToCart={() => addToCart(item)}
//                 />
//                 </Link>
//               ))}
//             </div>
//           </section>
//           {tamalesItems.length > 0 && (
//             <div className="tamales-heading">
//               <h1>Tamales</h1>
//             </div>
//           )}
//           <section className="py-4 container">
//             <div className='row justify-content-center '>
//               {tamalesItems.map((item, index) => (
//                      <Link to={`/menu/${item.id}`} key={item.id} className="menu-link">
//                 <Itemcard
//                   img={item.url}
//                   title={item.Name}
//                   desc={item.price}
//                   item={item}
//                   key={item.id}
//                   addToCart={() => addToCart(item)}
//                 />
//                 </Link>
//               ))}
//             </div>
//           </section>
//           <CartIcon />
//         </div>

       
//         <div className="drinks-divider">
//           <hr />
//         </div>

//         <div className="drinks-heading"   ref={drinksSectionRef}>
//             <h1>DRINKS</h1>
//           </div>
//           </div>


//    {cocktailItems.length > 0 && (
//   <div>
//     <div className="cocktails-heading">
//       <h1>Cocktails</h1>
//     </div>
//     <section className="py-4 container" style={{ width: '100%', marginRight: '510px' }}>
//       <div className="row justify-content-center">
//         {cocktailItems.map((item, index) => (
//           <Link to={`/menu/${item.id}`} key={item.id} className="menu-link">
//             <Itemcard
//               img={item.url}
//               title={item.Name}
//               desc={item.price}
//               item={item}
//               key={item.id}
//               addToCart={() => addToCart(item)}
//             />
//           </Link>
//         ))}
//       </div>
//     </section>
//   </div>
// )}  


//       {/* <Footer /> */}
//       {showCart ? <CartPage cart={cart} removeFromCart={removeFromCart} /> : null}
//       </div>
// )
// }

// export default MenuAndClasses




// import React, { useEffect, useState, useRef } from 'react';
// import { db, collection, getDocs, query } from './Config';
// import Itemcard from '../components/Itemcard';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import CartIcon from '../components/CartIcon';
// import CartPage from '../components/CartPage';
// import '../components/styles/Menu.css';
// import TextField from '@mui/material/TextField';
// import { Link } from 'react-router-dom';


// function MenuAndClasses() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [laprensaItems, setLaprensaItems] = useState([]);
//   const [tacosItems, setTacosItems] = useState([]);
//   const [riceBowlItems, setRiceBowlItems] = useState([]);
//   const [enchiladasItems, setEnchiladasItems] = useState([]);
//   const [kidsMenuItems, setKidsMenuItems] = useState([]);
//   const [tamalesItems, setTamalesItems] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [showCart] = useState(false);
//   const [cocktailItems, setCocktailItems] = useState([]);
//   const foodSectionRef = useRef(null);
//   const drinksSectionRef = useRef(null);

//   const tacosSectionRef = useRef(null);
//   const riceBowlSectionRef = useRef(null);
//   const enchiladasSectionRef = useRef(null);
//   const kidsMenuSectionRef = useRef(null);
//   const tamalesSectionRef = useRef(null);
//   const cocktailsSectionRef = useRef(null);
//   const [showMoreOptions, setShowMoreOptions] = useState(false);


//   useEffect(() => {
//     const fetchData = async () => {
//       try {

//         // Fetch data from 'Laprensa' collection
//         const laprensaCollectionRef = collection(db, 'Laprensa');
//         const laprensaQuery = query(laprensaCollectionRef);
//         const laprensaQuerySnapshot = await getDocs(laprensaQuery);

//         const laprensaData = [];

//         laprensaQuerySnapshot.forEach((doc) => {
//           const itemData = doc.data();
//           laprensaData.push({
//             id: doc.id,
//             Name: itemData.Name,
//             price: itemData.price,
//             url: itemData.url,
//           });
//         });

//         setLaprensaItems(laprensaData);

//         // Fetch data from 'Tacos' collection
//         const tacosCollectionRef = collection(db, 'Tacos');
//         const tacosQuery = query(tacosCollectionRef);
//         const tacosQuerySnapshot = await getDocs(tacosQuery);

//         const tacosData = [];

//         tacosQuerySnapshot.forEach((doc) => {
//           const itemData = doc.data();
//           tacosData.push({
//             id: doc.id,
//             Name: itemData.Name,
//             price: itemData.price,
//             url: itemData.url,
//             additionalField: itemData.additionalField,
//           });
//         });

//         setTacosItems(tacosData);

//         // Fetch data from 'Rice Bowl' collection
//         const riceBowlCollectionRef = collection(db, 'Rice Bowl');
//         const riceBowlQuery = query(riceBowlCollectionRef);
//         const riceBowlQuerySnapshot = await getDocs(riceBowlQuery);

//         const riceBowlData = [];

//         riceBowlQuerySnapshot.forEach((doc) => {
//           const itemData = doc.data();
//           riceBowlData.push({
//             id: doc.id,
//             Name: itemData.Name,
//             price: itemData.price,
//             url: itemData.url,
//             additionalField: itemData.additionalField,
//           });
//         });

//         setRiceBowlItems(riceBowlData);

        
//         // Fetch data from 'Enchiladas' collection
//         const enchiladasCollectionRef = collection(db, 'Enchiladas');
//         const enchiladasQuery = query(enchiladasCollectionRef);
//         const enchiladasQuerySnapshot = await getDocs(enchiladasQuery);

//         const enchiladasData = [];

//         enchiladasQuerySnapshot.forEach((doc) => {
//           const itemData = doc.data();
//           enchiladasData.push({
//             id: doc.id,
//             Name: itemData.Name,
//             price: itemData.price,
//             url: itemData.url,
//           });
//         });

//         setEnchiladasItems(enchiladasData);

//         // Fetch data from 'Kids Menu' collection
//         const kidsMenuCollectionRef = collection(db, 'Kids Menu');
//         const kidsMenuQuery = query(kidsMenuCollectionRef);
//         const kidsMenuQuerySnapshot = await getDocs(kidsMenuQuery);

//         const kidsMenuData = [];

//         kidsMenuQuerySnapshot.forEach((doc) => {
//           const itemData = doc.data();
//           kidsMenuData.push({
//             id: doc.id,
//             Name: itemData.Name,
//             price: itemData.price,
//             url: itemData.url,
//           });
//         });

//         setKidsMenuItems(kidsMenuData);

//         // Fetch data from 'Tamales' collection
//         const tamalesCollectionRef = collection(db, 'Tamales');
//         const tamalesQuery = query(tamalesCollectionRef);
//         const tamalesQuerySnapshot = await getDocs(tamalesQuery);

//         const tamalesData = [];

//         tamalesQuerySnapshot.forEach((doc) => {
//           const itemData = doc.data();
//           tamalesData.push({
//             id: doc.id,
//             Name: itemData.Name,
//             price: itemData.price,
//             url: itemData.url,
//           });
//         });

//         setTamalesItems(tamalesData);
    

//       const cocktailsCollectionRef = collection(db, 'Cocktails');
//       const cocktailsQuery = query(cocktailsCollectionRef);
//       const cocktailsQuerySnapshot = await getDocs(cocktailsQuery);

//       const cocktailsData = [];

//       cocktailsQuerySnapshot.forEach((doc) => {
//         const itemData = doc.data();
//         cocktailsData.push({
//           id: doc.id,
//           Name: itemData.Name,
//           price: itemData.price,
//           url: itemData.url,
//         });
//       });

//       setCocktailItems(cocktailsData);

//     } 
      
      
//       catch (error) {
//         console.error('Error fetching data from Firestore:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSearch = (e) => {
//     const { value } = e.target;
//     setSearchQuery(value);
//   };

//   const addToCart = (item) => {
//     setCart([...cart, item]);
//   };

//   const removeFromCart = (index) => {
//     const updatedCart = [...cart];
//     updatedCart.splice(index, 1);
//     setCart(updatedCart);
//   };

//   const scrollToFoodSection = () => {
//     if (foodSectionRef.current) {
//       foodSectionRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const scrollToDrinksSection = () => {
//     if (drinksSectionRef.current) {
//       drinksSectionRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };


//   const handleCategoryClick = (categoryRef) => {
//     if (categoryRef.current) {
//       const yOffset = -60;
//       const y =
//         categoryRef.current.getBoundingClientRect().top +
//         window.pageYOffset +
//         yOffset;
//       window.scrollTo({ top: y, behavior: 'smooth' });
//     }
//   };

//   const handleMoreOptionsClick = () => {
//     setShowMoreOptions(!showMoreOptions);
//   };

  
//   return (
//     <div className="d-flex flex-column align-items-center">
//        <Navbar /> 
//       <div className="text-center mt-3">
//         <h1 className="text-content" style={{ marginTop: '300px' }}>
//           All Items
//         </h1>
//         <div className="search-container">
//           <TextField
//             label="Search for food..."
//             variant="outlined"
//             value={searchQuery}
//             onChange={handleSearch}
//             style={{ width: '300px', marginTop: '50px' }}
//           />

//         <div className="menu-container">
//         <a href="#drinks" className="menu-link" onClick={scrollToFoodSection}>
//               Food
//             </a>
//             &nbsp;&nbsp;&nbsp;
//             <a href="#drinks" className="menu-link" onClick={scrollToDrinksSection}>
//               Drinks
//             </a>
//           </div>
        
          
     
//         <div className="mencon">


//   <button className="menuuu-liee" onClick={() => handleCategoryClick(foodSectionRef)}>
//     Starters
//   </button>
//   &nbsp;&nbsp;&nbsp;
//   <button className="menuuu-liee" onClick={() => handleCategoryClick(tacosSectionRef)}>
//   Tacos
// </button>
// &nbsp;&nbsp;&nbsp;

// <button className="menuuu-liee" onClick={handleMoreOptionsClick}>
//           More
//         </button>
// {/* 
//   <button className="menuuu-liee" onClick={() => handleCategoryClick(riceBowlSectionRef)}>
//     Rice Bowl
//   </button>
//   &nbsp;&nbsp;&nbsp; */}

// {showMoreOptions && (
//           <>
//             <button className="menuuu-liee" onClick={() => handleCategoryClick(riceBowlSectionRef)}>
//               Rice Bowl
//             </button>
//             &nbsp;&nbsp;&nbsp;
//             {/* Add more buttons as needed */}
//           </>
//         )}

//   {showMoreOptions && (
//           <>
//             <button className="menuuu-liee" onClick={() => handleCategoryClick(enchiladasSectionRef)}>
//                  Enchiladas
//             </button>
//             &nbsp;&nbsp;&nbsp;
//             {/* Add more buttons as needed */}
//           </>
//         )}
        
//   {showMoreOptions && (
//           <>
//             <button className="menuuu-liee" onClick={() => handleCategoryClick(kidsMenuSectionRef)}>
//             Kids Menu
//             </button>
//             &nbsp;&nbsp;&nbsp;
//             {/* Add more buttons as needed */}
//           </>
//         )}

// {showMoreOptions && (
//           <>
//             <button className="menuuu-liee" onClick={() => handleCategoryClick(tamalesSectionRef)}>
//             Tamales
//             </button>
//             &nbsp;&nbsp;&nbsp;
//             {/* Add more buttons as needed */}
//           </>
//         )}
//         {showMoreOptions && (
//           <>
//             <button className="menuuu-liee" onClick={() => handleCategoryClick(cocktailsSectionRef)}>
//             Cocktails
//             </button>
//             &nbsp;&nbsp;&nbsp;
//             {/* Add more buttons as needed */}
//           </>
//         )}
// </div> 

//       {/* ... Your drinks items ... */}

 
//             {/* {laprensaItems.length > 0 && (
//             <div className="starters-heading">
//               <h1>Starters</h1>
//             </div>
//           )}
//              <section className="py-4 container">
//             <div className='row justify-content-center '>
//               {laprensaItems.map((item, index) => (
                 
//                   <Itemcard
//                   img={item.url}
//                   title={item.Name}
//                   desc={item.price}
//                   item={item}
//                   key={item.id}
//                   addToCart={() => addToCart(item)}
//                 />     
              
//               ))}
//             </div>
//           </section>     */}


//    <div className="food-heading"  ref={foodSectionRef}>
//             <h1>FOOD</h1>
//           </div>


//        {laprensaItems.length > 0 && (
//             <div className="starters-heading">
//               <h1>Starters</h1>
//             </div>
//           )}
//          <section className="py-4 container">
//           <div className="row justify-content-center">    
//             {laprensaItems.map((item, index) => (
//               <Link to={`/menu/${item.id}`} key={item.id} className="menu-link">
//                 <Itemcard
//                   img={item.url}
//                   title={item.Name}
//                   desc={item.price}
//                   item={item}
//                   addToCart={() => addToCart(item)}
//                 />
//               </Link>
//             ))}
//           </div> 
//             </section>       


//           {tacosItems.length > 0 && (
//             <div className="tacos-heading">
//               <h1>Tacos</h1>
//             </div>
//           )}
//           <section className="py-4 container">
//             <div className='row justify-content-center '>
//               {tacosItems.map((item, index) => (
//                  <Link to={`/menu/${item.id}`} key={item.id} className="menu-link">
//                 <Itemcard
//                   img={item.url}
//                   title={item.Name}
//                   desc={item.price}
//                   item={item}
//                   key={item.id}
//                   addToCart={() => addToCart(item)}
//                  // <Link to={`/tacos/${item.id}`}>Details</Link>
//                 />
//                 </Link>
//               ))}
//             </div>
//           </section>


//           {riceBowlItems.length > 0 && (
//             <div className="rice-bowl-heading">
//               <h1>Rice Bowl</h1>
//             </div>
//           )}
//           <section className="py-4 container">
//             <div className='row justify-content-center '>
//               {riceBowlItems.map((item, index) => (
//                    <Link to={`/menu/${item.id}`} key={item.id} className="menu-link">
//                 <Itemcard
//                   img={item.url}
//                   title={item.Name}
//                   desc={item.price}
//                   item={item}
//                   key={item.id}
//                   addToCart={() => addToCart(item)}
//                 />
//                 </Link>
//               ))}
//             </div>
//           </section>

//           {enchiladasItems.length > 0 && (
//             <div className="enchiladas-heading">
//               <h1>Enchiladas</h1>
//             </div>
//           )}
//           <section className="py-4 container">
//             <div className='row justify-content-center '>
//               {enchiladasItems.map((item, index) => (
//                 <Link to={`/menu/${item.id}`} key={item.id} className="menu-link">
//                 <Itemcard
//                   img={item.url}
//                   title={item.Name}
//                   desc={item.price}
//                   item={item}
//                   key={item.id}
//                   addToCart={() => addToCart(item)}
//                 />
//                 </Link>
//               ))}
//             </div>
//           </section>
//           {kidsMenuItems.length > 0 && (
//             <div className="kids-menu-heading">
//               <h1>Kids Menu</h1>
//             </div>
//           )}
//           <section className="py-4 container">
//             <div className='row justify-content-center '>
//               {kidsMenuItems.map((item, index) => (
//                 <Link to={`/menu/${item.id}`} key={item.id} className="menu-link">
//                 <Itemcard
//                   img={item.url}
//                   title={item.Name}
//                   desc={item.price}
//                   item={item}
//                   key={item.id}
//                   addToCart={() => addToCart(item)}
//                 />
//                 </Link>
//               ))}
//             </div>
//           </section>
//           {tamalesItems.length > 0 && (
//             <div className="tamales-heading">
//               <h1>Tamales</h1>
//             </div>
//           )}
//           <section className="py-4 container">
//             <div className='row justify-content-center '>
//               {tamalesItems.map((item, index) => (
//                      <Link to={`/menu/${item.id}`} key={item.id} className="menu-link">
//                 <Itemcard
//                   img={item.url}
//                   title={item.Name}
//                   desc={item.price}
//                   item={item}
//                   key={item.id}
//                   addToCart={() => addToCart(item)}
//                 />
//                 </Link>
//               ))}
//             </div>
//           </section>
//           <CartIcon />
//         </div>

       
//         <div className="drinks-divider">
//           <hr />
//         </div>

//         <div className="drinks-heading"   ref={drinksSectionRef}>
//             <h1>DRINKS</h1>
//           </div>
//           </div>


//    {cocktailItems.length > 0 && (
//   <div>
//     <div className="cocktails-heading">
//       <h1>Cocktails</h1>
//     </div>
//     <section className="py-4 container" style={{ width: '100%', marginRight: '510px' }}>
//       <div className="row justify-content-center">
//         {cocktailItems.map((item, index) => (
//           <Link to={`/menu/${item.id}`} key={item.id} className="menu-link">
//             <Itemcard
//               img={item.url}
//               title={item.Name}
//               desc={item.price}
//               item={item}
//               key={item.id}
//               addToCart={() => addToCart(item)}
//             />
//           </Link>
//         ))}
//       </div>
//     </section>
//   </div>
// )}  


//       {/* <Footer /> */}
//       {showCart ? <CartPage cart={cart} removeFromCart={removeFromCart} /> : null}
//       </div>
// )
// }

// export default MenuAndClasses;





import React, { useEffect, useState, useRef } from 'react';
import { db, collection, getDocs, query } from './Config';
import Itemcard from '../components/Itemcard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartIcon from '../components/CartIcon';
import CartPage from '../components/CartPage';
import '../components/styles/Menu.css';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

function MenuAndClasses() {
  const [searchQuery, setSearchQuery] = useState('');
  const [laprensaItems, setLaprensaItems] = useState([]);
  const [tacosItems, setTacosItems] = useState([]);
  const [riceBowlItems, setRiceBowlItems] = useState([]);
  const [enchiladasItems, setEnchiladasItems] = useState([]);
  const [kidsMenuItems, setKidsMenuItems] = useState([]);
  const [tamalesItems, setTamalesItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart] = useState(false);
  const [cocktailItems, setCocktailItems] = useState([]);
  const foodSectionRef = useRef(null);
  const drinksSectionRef = useRef(null);

  const tacosSectionRef = useRef(null);
  const riceBowlSectionRef = useRef(null);
  const enchiladasSectionRef = useRef(null);
  const kidsMenuSectionRef = useRef(null);
  const tamalesSectionRef = useRef(null);
  const cocktailsSectionRef = useRef(null);
  const [showMoreOptions, setShowMoreOptions] = useState(false);


  const [anchorEl, setAnchorEl] = useState(null);

  // ... (existing useEffect code)

  const handleMoreOptionsClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMoreOptionsClose = () => {
    setAnchorEl(null);
  };

  
  useEffect(() => {
    const fetchData = async () => {
      try {

        // Fetch data from 'Laprensa' collection
        const laprensaCollectionRef = collection(db, 'Laprensa');
        const laprensaQuery = query(laprensaCollectionRef);
        const laprensaQuerySnapshot = await getDocs(laprensaQuery);

        const laprensaData = [];

        laprensaQuerySnapshot.forEach((doc) => {
          const itemData = doc.data();
          laprensaData.push({
            id: doc.id,
            Name: itemData.Name,
            price: itemData.price,
            url: itemData.url,
          });
        });

        setLaprensaItems(laprensaData);

        // Fetch data from 'Tacos' collection
        const tacosCollectionRef = collection(db, 'Tacos');
        const tacosQuery = query(tacosCollectionRef);
        const tacosQuerySnapshot = await getDocs(tacosQuery);

        const tacosData = [];

        tacosQuerySnapshot.forEach((doc) => {
          const itemData = doc.data();
          tacosData.push({
            id: doc.id,
            Name: itemData.Name,
            price: itemData.price,
            url: itemData.url,
            additionalField: itemData.additionalField,
          });
        });

        setTacosItems(tacosData);

        // Fetch data from 'Rice Bowl' collection
        const riceBowlCollectionRef = collection(db, 'Rice Bowl');
        const riceBowlQuery = query(riceBowlCollectionRef);
        const riceBowlQuerySnapshot = await getDocs(riceBowlQuery);

        const riceBowlData = [];

        riceBowlQuerySnapshot.forEach((doc) => {
          const itemData = doc.data();
          riceBowlData.push({
            id: doc.id,
            Name: itemData.Name,
            price: itemData.price,
            url: itemData.url,
            additionalField: itemData.additionalField,
          });
        });

        setRiceBowlItems(riceBowlData);

        
        // Fetch data from 'Enchiladas' collection
        const enchiladasCollectionRef = collection(db, 'Enchiladas');
        const enchiladasQuery = query(enchiladasCollectionRef);
        const enchiladasQuerySnapshot = await getDocs(enchiladasQuery);

        const enchiladasData = [];

        enchiladasQuerySnapshot.forEach((doc) => {
          const itemData = doc.data();
          enchiladasData.push({
            id: doc.id,
            Name: itemData.Name,
            price: itemData.price,
            url: itemData.url,
          });
        });

        setEnchiladasItems(enchiladasData);

        // Fetch data from 'Kids Menu' collection
        const kidsMenuCollectionRef = collection(db, 'Kids Menu');
        const kidsMenuQuery = query(kidsMenuCollectionRef);
        const kidsMenuQuerySnapshot = await getDocs(kidsMenuQuery);

        const kidsMenuData = [];

        kidsMenuQuerySnapshot.forEach((doc) => {
          const itemData = doc.data();
          kidsMenuData.push({
            id: doc.id,
            Name: itemData.Name,
            price: itemData.price,
            url: itemData.url,
          });
        });

        setKidsMenuItems(kidsMenuData);

        // Fetch data from 'Tamales' collection
        const tamalesCollectionRef = collection(db, 'Tamales');
        const tamalesQuery = query(tamalesCollectionRef);
        const tamalesQuerySnapshot = await getDocs(tamalesQuery);

        const tamalesData = [];

        tamalesQuerySnapshot.forEach((doc) => {
          const itemData = doc.data();
          tamalesData.push({
            id: doc.id,
            Name: itemData.Name,
            price: itemData.price,
            url: itemData.url,
          });
        });

        setTamalesItems(tamalesData);
    

      const cocktailsCollectionRef = collection(db, 'Cocktails');
      const cocktailsQuery = query(cocktailsCollectionRef);
      const cocktailsQuerySnapshot = await getDocs(cocktailsQuery);

      const cocktailsData = [];

      cocktailsQuerySnapshot.forEach((doc) => {
        const itemData = doc.data();
        cocktailsData.push({
          id: doc.id,
          Name: itemData.Name,
          price: itemData.price,
          url: itemData.url,
        });
      });

      setCocktailItems(cocktailsData);

    } 
      
      
      catch (error) {
        console.error('Error fetching data from Firestore:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const scrollToFoodSection = () => {
    if (foodSectionRef.current) {
      foodSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDrinksSection = () => {
    if (drinksSectionRef.current) {
      drinksSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const handleCategoryClick = (categoryRef) => {
    if (categoryRef.current) {
      const yOffset = -60;
      const y =
        categoryRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };



  return (
    <div className="d-flex flex-column align-items-center">
      <Navbar />
      <div className="text-center mt-3">
        <h1 className="text-content" style={{ marginTop: '300px' }}>
          All Items
        </h1>
        <div className="search-container">
          <TextField
            label="Search for food..."
            variant="outlined"
            value={searchQuery}
            onChange={handleSearch}
            style={{ width: '300px', marginTop: '50px' }}
          />
        <div className="menu-container">
        <a href="#drinks" className="menu-link" onClick={scrollToFoodSection}>
              Food
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="#drinks" className="menu-link" onClick={scrollToDrinksSection}>
              Drinks
            </a>
            &nbsp;&nbsp;&nbsp;
          </div>


      <div className="mencon">
        
  <button className="menuuu-liee" onClick={() => handleCategoryClick(foodSectionRef)}>
    Starters
  </button>
  &nbsp;&nbsp;&nbsp;
  <button className="menuuu-liee" onClick={() => handleCategoryClick(tacosSectionRef)}>
  Tacos
</button>
&nbsp;&nbsp;&nbsp;
 <button className="menuuu-liee" onClick={handleMoreOptionsClick}>
          More
        </button>  

{showMoreOptions && (
          <>
            <button className="menuuu-liee" onClick={() => handleCategoryClick(riceBowlSectionRef)}>
              Rice Bowl
            </button>
            &nbsp;&nbsp;&nbsp;
     
          </>
        )}

  {showMoreOptions && (
          <>
            <button className="menuuu-liee" onClick={() => handleCategoryClick(enchiladasSectionRef)}>
                 Enchiladas
            </button>
            &nbsp;&nbsp;&nbsp;
        
          </>
        )}
        
  {showMoreOptions && (
          <>
            <button className="menuuu-liee" onClick={() => handleCategoryClick(kidsMenuSectionRef)}>
            Kids Menu
            </button>
            &nbsp;&nbsp;&nbsp;
   
          </>
        )}

        {showMoreOptions && (
          <>
            <button className="menuuu-liee" onClick={() => handleCategoryClick(cocktailsSectionRef)}>
            Cocktails
            </button>
            &nbsp;&nbsp;&nbsp;
       
          </>
        )}
</div>    
           <div>
            {/* <button
              className="menuuu-liee"
              onClick={handleMoreOptionsClick}
              aria-controls="simple-menu"
              aria-haspopup="true"
            >
              More
            </button> */}
    
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMoreOptionsClose}
            >
              <MenuItem onClick={() => handleCategoryClick(riceBowlSectionRef)}>
                Rice Bowl
                
              </MenuItem>
              <MenuItem onClick={() => handleCategoryClick(enchiladasSectionRef)}>
                Enchiladas
              </MenuItem>
              <MenuItem onClick={() => handleCategoryClick(kidsMenuSectionRef)}>
                Kids Menu
              </MenuItem>
              <MenuItem onClick={() => handleCategoryClick(tamalesSectionRef)}>
                Tamales
              </MenuItem>
              <MenuItem onClick={() => handleCategoryClick(cocktailsSectionRef)}>
                Cocktails
              </MenuItem>
     
            </Menu>
          </div> 
        </div>
         
        <div className="food-heading"  ref={foodSectionRef}>
            <h1>FOOD</h1>
          </div>

  
          {laprensaItems.length > 0 && (
            <div className="starters-heading">
              <h1>Starters</h1>
            </div>
          )}
         <section className="py-4 container">
         <div className="row justify-content-center">   
            {laprensaItems.map((item, index) => (
              <Link to={`/menu/${item.id}`} key={item.id} className="menu-link">
                <Itemcard
                  img={item.url}
                  title={item.Name}
                  desc={item.price}
                  item={item}
                  addToCart={() => addToCart(item)}
                />
               </Link>
            ))}
          </div> 
            </section>   
            
          {tacosItems.length > 0 && (
            <div className="tacos-heading">
              <h1>Tacos</h1>
            </div>
          )}
          <section className="py-4 container">
            <div className='row justify-content-center '>
              {tacosItems.map((item, index) => (
                 <Link to={`/menu/${item.id}`} key={item.id} className="menu-link">
                <Itemcard
                  img={item.url}
                  title={item.Name}
                  desc={item.price}
                  item={item}
                  key={item.id}
                  addToCart={() => addToCart(item)}
                 // <Link to={`/tacos/${item.id}`}>Details</Link>
                />
                </Link>
              ))}
            </div>
          </section>


          {riceBowlItems.length > 0 && (
            <div className="rice-bowl-heading">
              <h1>Rice Bowl</h1>
            </div>
          )}
          <section className="py-4 container">
            <div className='row justify-content-center '>
              {riceBowlItems.map((item, index) => (
                   <Link to={`/menu/${item.id}`} key={item.id} className="menu-link">
                <Itemcard
                  img={item.url}
                  title={item.Name}
                  desc={item.price}
                  item={item}
                  key={item.id}
                  addToCart={() => addToCart(item)}
                />
                </Link>
              ))}
            </div>
          </section>

          {enchiladasItems.length > 0 && (
            <div className="enchiladas-heading">
              <h1>Enchiladas</h1>
            </div>
          )}
          <section className="py-4 container">
            <div className='row justify-content-center '>
              {enchiladasItems.map((item, index) => (
                <Link to={`/menu/${item.id}`} key={item.id} className="menu-link">
                <Itemcard
                  img={item.url}
                  title={item.Name}
                  desc={item.price}
                  item={item}
                  key={item.id}
                  addToCart={() => addToCart(item)}
                />
                </Link>
              ))}
            </div>
          </section>
          {kidsMenuItems.length > 0 && (
            <div className="kids-menu-heading">
              <h1>Kids Menu</h1>
            </div>
          )}
          <section className="py-4 container">
            <div className='row justify-content-center '>
              {kidsMenuItems.map((item, index) => (
                <Link to={`/menu/${item.id}`} key={item.id} className="menu-link">
                <Itemcard
                  img={item.url}
                  title={item.Name}
                  desc={item.price}
                  item={item}
                  key={item.id}
                  addToCart={() => addToCart(item)}
                />
                </Link>
              ))}
            </div>
          </section>
          {tamalesItems.length > 0 && (
            <div className="tamales-heading">
              <h1>Tamales</h1>
            </div>
          )}
          <section className="py-4 container">
            <div className='row justify-content-center '>
              {tamalesItems.map((item, index) => (
                     <Link to={`/menu/${item.id}`} key={item.id} className="menu-link">
                <Itemcard
                  img={item.url}
                  title={item.Name}
                  desc={item.price}
                  item={item}
                  key={item.id}
                  addToCart={() => addToCart(item)}
                />
                </Link>
              ))}
            </div>
          </section>
          <CartIcon />
        </div> 
        </div>
       
)
}

export default MenuAndClasses;



