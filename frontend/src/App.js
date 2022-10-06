import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((response) => response.json())
      .then((Products) => {
        // console.log(Products);
        setProducts(Products);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const DisplayData = Products.map((products) => {
    return (
      <tr key={products.id}>
        <td>{products.id}</td>
        <td>{products.name}</td>
        <td>{products.quantity}</td>
        <td>{products.price}</td>
      </tr>
    );
  });

  return (
    <div>
      <h1>Product List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
};

export default App;
