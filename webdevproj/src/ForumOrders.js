import React, { useState } from "react";
import { Link } from "react-router-dom";

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
      id: 2,
      name: "Product 2", // Corrected the name to "Product 2"
      price: 19.99,
      image: "/appe2.jpg",
      category: "Books",
    },
    // Add more products as needed
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProducts, setSelectedProducts] = useState([]);

  const categories = ["All", "Apparel", "Electronics", "Books", "Miscellaneous", "Home"];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleProductSelect = (selectedProduct) => {
    const existingProduct = selectedProducts.find((product) => product.id === selectedProduct.id);

    if (existingProduct) {
      setSelectedProducts((prevSelected) =>
        prevSelected.map((product) =>
          product.id === selectedProduct.id ? { ...product, count: product.count + 1 } : product
        )
      );
    } else {
      setSelectedProducts((prevSelected) => [...prevSelected, { ...selectedProduct, count: 1 }]);
    }
  };

  const handleProductRemove = (productId) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.map((product) =>
        product.id === productId ? { ...product, count: product.count - 1 } : product
      ).filter((product) => product.count > 0)
    );
  };

  const calculateTotal = () => {
    return selectedProducts.reduce((total, product) => total + product.price * product.count, 0);
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
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '40px', height: '40px', marginRight: '10px' }}
              />
              <strong>{product.name}</strong> - ${product.price} - {product.category}
            </Link>
            <div>
              <button onClick={() => handleProductSelect(product)}>
                Add to Orders
              </button>
              {selectedProducts.find((selectedProduct) => selectedProduct.id === product.id) && (
                <>
                  <span>Count: {selectedProducts.find((selectedProduct) => selectedProduct.id === product.id).count}</span>
                  <button onClick={() => handleProductRemove(product.id)}>
                    Remove from Orders
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div>
        <h2>Orders</h2>
        {selectedProducts.length === 0 ? (
          <p>No orders yet.</p>
        ) : (
          <>
            <ul>
              {selectedProducts.map((product) => (
                <li key={product.id}>
                  <strong>{product.name}</strong> - ${product.price} - {product.category} - Count: {product.count}
                </li>
              ))}
            </ul>
            <p>Total: ${calculateTotal()}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ForumProducts;
