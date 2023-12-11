// import React from 'react';
// import { useParams } from 'react-router-dom';
// import CustomItemPopupContent from './CustomItemPopupContent';

// const CustomItemPopup = () => {
//   const { id } = useParams();
//   console.log(id)


//   const item = {}; 

//   return (
//     <div>
//       <h1>Item Details</h1>
//       <CustomItemPopupContent item={item} />
//     </div>
//   );
//   };


// export default CustomItemPopup;




// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { db, collection, getDocs, query } from './Config';
// import CustomItemPopupContent from './CustomItemPopupContent';
// import '../components/styles/CustomItemPopup.css'


// const CustomItemPopup = () => {
//   const { id } = useParams();
//   const [item, setItem] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const laprensaCollection = collection(db, 'Laprensa');
//         const laprensaQuery = query(laprensaCollection);

//         const querySnapshot = await getDocs(laprensaQuery);
//         const items = [];

//         querySnapshot.forEach((doc) => {
//           items.push({ id: doc.id, ...doc.data() });
//         });

//         const selectedItem = items.find((item) => item.id === id);

//         if (selectedItem) {
//           setItem(selectedItem);
//         } else {
//           console.log(`No data found for ID: ${id}`);
//         }

//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [id]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (!item) {
//     return <p>No data found for ID: {id}</p>;
//   }

//   return (
//     <div>
//       {/* <h1>Item Details</h1>
//       <p>ID: {id}</p>
//       <p>Name: {item.Name}</p>
//       <p>Price: {item.price}</p>
//       <img src={item.url} alt={`Image for ${item.Name}`} style={{ maxWidth: '20%' }} /> */}
//       <CustomItemPopupContent item={item} />
//     </div>
//   );
// };

// export default CustomItemPopup;



// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { db, collection, getDocs, query } from './Config';
// import CustomItemPopupContent from './CustomItemPopupContent';
// import '../components/styles/CustomItemPopup.css';

// const CustomItemPopup = () => {
//   const { id } = useParams();
//   const [item, setItem] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const laprensaCollection = collection(db, 'Laprensa');
//         const laprensaQuery = query(laprensaCollection);

//         const querySnapshot = await getDocs(laprensaQuery);
//         const items = [];

//         querySnapshot.forEach((doc) => {
//           items.push({ id: doc.id, ...doc.data() });
//         });

//         const selectedItem = items.find((item) => item.id === id);

//         if (selectedItem) {
//           setItem(selectedItem);
//         } else {
//           console.log(`No data found for ID: ${id}`);
//         }

//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [id]);

//   useEffect(() => {
//     const fetchTacosData = async () => {
//       try {
//         const tacosCollection = collection(db, 'Tacos');
//         const tacosQuery = query(tacosCollection);

//         const querySnapshot = await getDocs(tacosQuery);
//         const items = [];

//         querySnapshot.forEach((doc) => {
//           items.push({ id: doc.id, ...doc.data() });
//         });

//         const selectedItem = items.find((item) => item.id === id);

//         if (selectedItem) {
//           setItem(selectedItem);
//         } else {
//           console.log(`No data found for ID: ${id}`);
//         }

//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching Tacos data:', error);
//         setLoading(false);
//       }
//     };

//     fetchTacosData();
//   }, [id]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (!item) {
//     return <p>No data found for ID: {id}</p>;
//   }

//   return (
//     <div>
//       <CustomItemPopupContent item={item} />
//     </div>
//   );
// };

// export default CustomItemPopup;



// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { db, collection, getDocs, query } from './Config';
// import CustomItemPopupContent from './CustomItemPopupContent';
// import '../components/styles/CustomItemPopup.css';

// const CustomItemPopup = () => {
//   const { id } = useParams();
//   const [item, setItem] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const laprensaCollection = collection(db, 'Laprensa');
//         const laprensaQuery = query(laprensaCollection);

//         const querySnapshot = await getDocs(laprensaQuery);
//         const items = [];

//         querySnapshot.forEach((doc) => {
//           items.push({ id: doc.id, ...doc.data() });
//         });

//         const selectedItem = items.find((item) => item.id === id);

//         if (selectedItem) {
//           setItem(selectedItem);
//         } else {
//           console.log(`No data found for ID: ${id}`);
//         }

//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [id]);

//   useEffect(() => {
//     const fetchTacosData = async () => {
//       try {
//         const tacosCollection = collection(db, 'Tacos');
//         const tacosQuery = query(tacosCollection);

//         const querySnapshot = await getDocs(tacosQuery);
//         const items = [];

//         querySnapshot.forEach((doc) => {
//           items.push({ id: doc.id, ...doc.data() });
//         });

//         const selectedItem = items.find((item) => item.id === id);

//         if (selectedItem) {
//           setItem(selectedItem);
//         } else {
//           console.log(`No data found for ID: ${id}`);
//         }

//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching Tacos data:', error);
//         setLoading(false);
//       }
//     };

//     fetchTacosData();
//   }, [id]);

//   useEffect(() => {
//     const fetchRiceBowlData = async () => {
//       try {
//         const riceBowlCollection = collection(db, 'Rice Bowl');
//         const riceBowlQuery = query(riceBowlCollection);

//         const querySnapshot = await getDocs(riceBowlQuery);
//         const items = [];

//         querySnapshot.forEach((doc) => {
//           items.push({ id: doc.id, ...doc.data() });
//         });

//         const selectedItem = items.find((item) => item.id === id);

//         if (selectedItem) {
//           setItem(selectedItem);
//         } else {
//           console.log(`No data found for ID: ${id}`);
//         }

//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching Rice Bowl data:', error);
//         setLoading(false);
//       }
//     };

//     fetchRiceBowlData();
//   }, [id]);

//   useEffect(() => {
//     const fetchTamalesData = async () => {
//       try {
//         const tamalesCollection = collection(db, 'Tamales');
//         const tamalesQuery = query(tamalesCollection);

//         const querySnapshot = await getDocs(tamalesQuery);
//         const items = [];

//         querySnapshot.forEach((doc) => {
//           items.push({ id: doc.id, ...doc.data() });
//         });

//         const selectedItem = items.find((item) => item.id === id);

//         if (selectedItem) {
//           setItem(selectedItem);
//         } else {
//           console.log(`No data found for ID: ${id}`);
//         }

//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching Tamales data:', error);
//         setLoading(false);
//       }
//     };

//     fetchTamalesData();
//   }, [id]);

//   useEffect(() => {
//     const fetchKidsMenuData = async () => {
//       try {
//         const kidsMenuCollection = collection(db, 'Kids Menu');
//         const kidsMenuQuery = query(kidsMenuCollection);

//         const querySnapshot = await getDocs(kidsMenuQuery);
//         const items = [];

//         querySnapshot.forEach((doc) => {
//           items.push({ id: doc.id, ...doc.data() });
//         });

//         const selectedItem = items.find((item) => item.id === id);

//         if (selectedItem) {
//           setItem(selectedItem);
//         } else {
//           console.log(`No data found for ID: ${id}`);
//         }

//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching Kids Menu data:', error);
//         setLoading(false);
//       }
//     };

//     fetchKidsMenuData();
//   }, [id]);

//   useEffect(() => {
//     const fetchEnchiladasData = async () => {
//       try {
//         const enchiladasCollection = collection(db, 'Enchiladas');
//         const enchiladasQuery = query(enchiladasCollection);

//         const querySnapshot = await getDocs(enchiladasQuery);
//         const items = [];

//         querySnapshot.forEach((doc) => {
//           items.push({ id: doc.id, ...doc.data() });
//         });

//         const selectedItem = items.find((item) => item.id === id);

//         if (selectedItem) {
//           setItem(selectedItem);
//         } else {
//           console.log(`No data found for ID: ${id}`);
//         }

//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching Enchiladas data:', error);
//         setLoading(false);
//       }
//     };

//     fetchEnchiladasData();
//   }, [id]);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (!item) {
//     return <p>No data found for ID: {id}</p>;
//   }

//   return (
//     <div>
//       <CustomItemPopupContent item={item} />
//     </div>
//   );
// };

// export default CustomItemPopup;





import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db, collection, getDocs, query } from './Config';
import CustomItemPopupContent from './CustomItemPopupContent';
import '../components/styles/CustomItemPopup.css';

const CustomItemPopup = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (collectionName) => {
      try {
        const dataCollection = collection(db, collectionName);
        const dataQuery = query(dataCollection);

        const querySnapshot = await getDocs(dataQuery);
        const items = [];

        querySnapshot.forEach((doc) => {
          items.push({ id: doc.id, ...doc.data() });
        });

        const selectedItem = items.find((item) => item.id === id);

        if (selectedItem) {
          setItem(selectedItem);
        } else {
          console.log(`No data found for ID: ${id}`);
        }

        setLoading(false);
      } catch (error) {
        console.error(`Error fetching ${collectionName} data:`, error);
        setLoading(false);
      }
    };

    // Example: Fetching 'Laprensa' data
    fetchData('Laprensa');

    // Add more calls to fetchData for other collections as needed

  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!item) {
    return <p>No data found for ID: {id}</p>;
  }

  const addToCart = (item) => {
    // Your addToCart logic here
    console.log('Adding to cart:', item);
    // You can expand this function to handle adding items to the cart state
    // or making an API call to add items to the server-side cart.
  };

  return (
    <div>
      {/* Other components */}
      <CustomItemPopupContent item={item} addToCart={addToCart} />
      {/* Other components */}
    </div>
  );
};

export default CustomItemPopup;




