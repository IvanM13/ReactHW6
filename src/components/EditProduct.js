import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../reducers/productsSlice";
// import "../css/products.css";

export const EditProduct = ({ productId, onClose }) => {
    const product = useSelector((state) =>
        state.products.products.find((product) => product.id === productId)
    );
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [available, setAvailable] = useState(false);

    useEffect(() => {
        if (product) {
            setName(product.name);
            setDescription(product.description);
            setPrice(product.price);
            setAvailable(product.available);
        }
    }, [product]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            updateProduct({ id: productId, name, description, price, available })
        );
        onClose();
    };

    if (!product) return null;

    return (
        <div>
            <h2>Edit product</h2>
            <form className="editProduct" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name of Product"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <label>
                    <input
                        type="checkbox"
                        checked={available}
                        onChange={(e) => setAvailable(e.target.checked)}
                    />
                    Available
                </label>
                <button type="submit">
                    Update Product
                </button>
                <button onClick={onClose}>
                    Cancel
                </button>
            </form>
        </div>
    );
}