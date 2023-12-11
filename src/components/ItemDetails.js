import React from 'react';

const ItemDetails = ({ item }) => (
  <div>
    <h1>{item.Name}</h1>
    <p>Price: {item.price}</p>
    <img src={item.url} alt={item.Name} />

  </div>
);

export default ItemDetails;
