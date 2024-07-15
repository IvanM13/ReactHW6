import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from "../reducers/productsSlice";

export const AddProduct = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [available, setAvailable] = useState(false);
    const dispatch = useDispatch();

    const handleAddProduct = (e) => {
        e.preventDefault();
        if (name && description && price) {
            dispatch(addProduct(name, description, price, available));
            setName("");
            setDescription("");
            setPrice("");
            setAvailable(false);
        } else {
            alert("Please fill in all fields!");
        }
    }

    return (
        <form className='productForm' onSubmit={handleAddProduct}>
            <input
                type="text"
                placeholder="Name of product"
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
                Add Product
            </button>
        </form>
    );
};