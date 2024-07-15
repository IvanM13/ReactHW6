import React from "react";
import { AddProduct } from "./components/AddProducts";
import { ProductsList } from "./components/ProductsList";
import { EditProduct } from "./components/EditProduct";

function App() {
  return (
    <div className="App">
      <h2>Catalog of products</h2>
      <h3>Add new product:</h3>
      <AddProduct />
      <ProductsList />
      <EditProduct />
    </div>
  );
}

export default App;
