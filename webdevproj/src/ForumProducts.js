import React, { useState } from "react";

const ForumProducts = () => {
    const [products, setProducts] = useState([
      {
        id: 1,
        name: "Product 1",
        price: 19.99,
        image: "https://www.pinterest.ph/pin/105130972538086806/",
      },
      {
        id: 2,
        name: "Product 2",
        price: 29.99,
        image: "https://example.com/product2.jpg",
      },
      {
        id: 3,
        name: "Product 3",
        price: 39.99,
        image: "https://example.com/product3.jpg",
      },
    ]);
  
    return (
      <div>
        <h2>Products</h2>
        <p>Explore the latest and discussions.</p>
  
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '50px', height: '50px', marginRight: '10px' }}
              />
              <strong>{product.name}</strong> - ${product.price}
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default ForumProducts;