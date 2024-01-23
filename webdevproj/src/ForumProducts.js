import React, { useState } from "react";
import ForumOrders from "./ForumOrders"; 

const ForumProducts = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 19.99,
      image: "/appe2.jpg",
      category: "Apparel",
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProducts, setSelectedProducts] = useState([]);

  const categories = ["All", "Apparel", "Electronics", "Books", "Miscellaneous", "Home"];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleProductSelect = (selectedProduct) => {
    setSelectedProducts((prevSelected) => [...prevSelected, selectedProduct]);
  };

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div>
      <h2>Products</h2>
      <p>Explore the latest and discussions.</p>

      <div>
        <strong>Categories:</strong>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            style={{
              marginRight: '10px',
              backgroundColor: selectedCategory === category ? 'blue' : 'transparent',
              color: selectedCategory === category ? 'white' : 'black',
              border: '1px solid #ccc',
              padding: '5px 10px',
              cursor: 'pointer',
              borderRadius: '5px',
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id} onClick={() => handleProductSelect(product)}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '40px', height: '40px', marginRight: '10px' }}
            />
            <strong>{product.name}</strong> - ${product.price} - {product.category}
          </li>
        ))}
      </ul>
          
      {/* Display selected products in ForumOrders */}
      <ForumOrders selectedProducts={selectedProducts} />
    </div>
  );
};

export default ForumProducts;
