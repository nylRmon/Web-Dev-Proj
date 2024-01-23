import React, { useState } from "react";

const ForumProducts = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 19.99,
      image: "/appe2.jpg",
      category: "Apparel",
    },

    {
      id: 4,
      name: "Produkto 3",
      price: 20.00,
      image: "/Assets/apparel1.jfif", 
      category: "Apparel",
    },
    {
      id: 2,
      name: "Product 2",
      price: 29.99,
      image: "https://example.com/product2.jpg",
      category: "Electronics",
    },
    {
      id: 3,
      name: "Product 3",
      price: 39.99,
      image: "https://example.com/product3.jpg",
      category: "Books",
    },
    // Add more products with different categories
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Apparel", "Electronics", "Books", "Miscellaneous"];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
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
          <li key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '40px', height: '40px', marginRight: '10px' }}
            />
            <strong>{product.name}</strong> - ${product.price} - {product.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ForumProducts;
