import ForumProducts from "./ForumProducts"; 
import React from "react";

const ForumOrders = ({ selectedProducts }) => {
  console.log("Selected Products in ForumOrders:", selectedProducts); // Add this line for debugging

  if (!Array.isArray(selectedProducts) || selectedProducts.length === 0) {
    return (
      <div>
        <h2>Orders</h2>
        <p>No orders yet.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {selectedProducts.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> - ${product.price} - {product.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ForumOrders;
