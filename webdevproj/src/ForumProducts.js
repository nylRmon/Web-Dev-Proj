import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ForumProduct.css";

const ForumProducts = () => {
  const navigate = useNavigate();

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
      name: "LIBRO NI ASH",
      price: 19.99,
      image: "/appe2.jpg",
      category: "Books",
    },
    // Add more products as needed
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [paymentComplete, setPaymentComplete] = useState(false);

  const categories = ["All", "Apparel", "Electronics", "Books", "Miscellaneous", "Arts"];

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
      prevSelected.filter((product) => product.id !== productId)
    );
  };

  const handlePayNow = () => {
    setPaymentComplete(true);
  };

  const calculateTotal = () => {
    return selectedProducts.reduce((total, product) => total + product.price * product.count, 0);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="centered-container">
      <div className="homebutton">
        <button onClick={() => navigate("/Forum")}>Go to Home</button>
      </div>

      <h2>Products</h2>
      <p>Explore the latest and discussions.</p>

      <div className="category-container">
        <strong>Categories:</strong>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className="category-button"
          >
            {category}
          </button>
        ))}
      </div>

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} className="product-image" />
              <strong>{product.name}</strong> - ${product.price} - {product.category}
            </Link>
            <button onClick={() => handleProductSelect(product)}>Add to Orders</button>
          </li>
        ))}
      </ul>

      <div>
        <h2>Selected Orders</h2>
        {selectedProducts.length === 0 ? (
          <p>No orders selected.</p>
        ) : (
          <>
            <ul>
              {selectedProducts.map((product) => (
                <li key={product.id}>
                  <strong>{product.name}</strong> - ${product.price} - {product.category} - Count:{" "}
                  {product.count}
                  <button onClick={() => handleProductRemove(product.id)}>Remove Order</button>
                </li>
              ))}
            </ul>
            <p>Total: ${calculateTotal()}</p>
            {paymentComplete ? (
              <p>Payment Complete! You can go back to the forum.</p>
            ) : (
              <button onClick={handlePayNow}>Pay Now</button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ForumProducts;
