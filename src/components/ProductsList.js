import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, toggleAvailability } from "../reducers/productsSlice";
import { EditProduct } from "./EditProduct";
import "../css/products.css";

export const ProductsList = () => {
    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();
    const [editingProductId, setEditingProductId] = useState(null);

    const handleEditClick = (productId) => {
        setEditingProductId(productId);
    };

    const handleCloseEdit = () => {
        setEditingProductId(null);
    };

    return (
        <div>
            {editingProductId && (
                <EditProduct
                    productId={editingProductId}
                    onClose={handleCloseEdit}
                />
            )}
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <div>
                            {product.name} - {product.description} - ${product.price} -{" "}
                            {product.available ? "Available" : "Not Available"}
                        </div>
                        <div>
                            <button
                                onClick={() => dispatch(toggleAvailability(product.id))}
                            >
                                Toggle Availability
                            </button>
                            <button
                                onClick={() => handleEditClick(product.id)}
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => dispatch(deleteProduct(product.id))}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}