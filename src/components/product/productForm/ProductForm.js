/**
 * author : YATIME Marouane
 * app : PFE - TaskPulse software
 * Folder: frontend
 * file:ProductForm.js
*/

import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Card from "../../card/Card";
import "./ProductForm.scss";

const ProductForm = ({
  product,
  productImage,
  imagePreview,
  description,
  setDescription,
  handleInputChange,
  handleImageChange,
  saveProduct,
}) => {
  return (
    <div className="add-product">
      <Card cardClass={"card"}>
        <form onSubmit={saveProduct}>
          <Card cardClass={"group"}>
            <label>Image Produit</label>
            <code className="--color-dark">
             Formats supportés: jpg, jpeg, png
            </code>
            <input
              type="file"
              name="image"
              onChange={(e) => handleImageChange(e)}
            />

            {imagePreview != null ? (
              <div className="image-preview">
                <img src={imagePreview} alt="product" />
              </div>
            ) : (
              <p>Pas d'image pour ce produit.</p>
            )}
          </Card>
          <label>Nom du produit:</label>
          <input
            type="text"
            placeholder="Nom du produit"
            name="name"
            value={product?.name}
            onChange={handleInputChange}
          />

          <label>Categorie du produit:</label>
          <input
            type="text"
            placeholder="Categorie du produit"
            name="category"
            value={product?.category}
            onChange={handleInputChange}
          />

          <label>Prix du produit:</label>
          <input
            type="text"
            placeholder="Prix du produit"
            name="price"
            value={product?.price}
            onChange={handleInputChange}
          />

          <label>Quantité du produit:</label>
          <input
            type="text"
            placeholder="Quantité du produit"
            name="quantity"
            value={product?.quantity}
            onChange={handleInputChange}
          />

          <label>Description du produit:</label>
          <ReactQuill
            theme="snow"
            //name="description"
            value={description}
            onChange={setDescription}
            modules={ProductForm.modules}
            formats={ProductForm.formats}
          />

          <div className="--my">
            <button type="submit" className="--btn --btn-primary">
              Sauvgarder le produit
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

// Text Editor form -> Quill
ProductForm.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["clean"],
  ],
};
ProductForm.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "color",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "video",
  "image",
  "code-block",
  "align",
];

export default ProductForm;