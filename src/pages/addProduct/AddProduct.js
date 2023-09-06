/**
 * author : YATIME Marouane
 * app : PFE - TaskPulse software
 * Folder: frontend
 * file: AddProduct.js
*/

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import {
  createProduct,
  selectIsLoading,
} from "../../redux/features/product/productSlice";
import ProductForm from "../../components/product/productForm/ProductForm";


const initialState = {
    name: "",
    category: "",
    quantity: "",
    price: "",
};

const AddProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [product, setProduct] = useState(initialState);
    const [productImage, setProductImage] = useState("");
    const [imagePreview, setImagePreview] = useState(null);
    const [description, setDescription] = useState("");

    const isLoading = useSelector(selectIsLoading);

    const { name, category, price, quantity } = product;

    // Handle Input Change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    // Handle Image change
    const handleImageChange = (e) => {
        setProductImage(e.target.files[0]);
        setImagePreview(URL.createObjectURL(e.target.files[0]));
    };

    // Generate Unique SKU
    const generateKSKU = (category) => {
        const letter = category.slice(0, 3).toUpperCase();
        const number = Date.now();
        const sku = letter + "-" + number;
        return sku;
    };

    // Save Product to BDD
    const saveProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("sku", generateKSKU(category));
        formData.append("category", category);
        formData.append("quantity", Number(quantity));
        formData.append("price", price);
        formData.append("description", description);
        formData.append("image", productImage);
    
        console.log(...formData);
    
        await dispatch(createProduct(formData));
    
        navigate("/dashboard");
        
    };

    return (
        <div>
        {isLoading && <Loader />}
        <h3 className="--mt">Ajouter un produit</h3>
        <ProductForm
            product={product}
            productImage={productImage}
            imagePreview={imagePreview}
            description={description}
            setDescription={setDescription}
            handleInputChange={handleInputChange}
            handleImageChange={handleImageChange}
            saveProduct={saveProduct}
        />
        </div>  
    );

};

export default AddProduct;