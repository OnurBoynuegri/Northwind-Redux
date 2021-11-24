import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

import { saveProduct } from "../../redux/actions/productActions";

import ProductDetail from "./ProductDetail";

function AddOrUpdateProduct() {
  const { productId } = useParams();

  const dispatch = useDispatch();

  const history = useHistory();
  const productListReducer = useSelector((state) => state.productListReducer);
  const categoriesReducer = useSelector((state) => state.categoryListReducer);
  console.log("categoriesReducer", categoriesReducer);

  const [product, setProduct] = useState();
  useEffect(() => {
    const selectedProduct =
      productId && productListReducer.length > 0
        ? getProductById(productListReducer, productId)
        : {};
    setProduct(selectedProduct);
  }, [productId, setProduct, productListReducer]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((previousProduct) => ({
      ...previousProduct,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    }));
  };

  const handleSave = (event) => {
    event.preventDefault(); //sayfanın yenilenmesini engeller
    dispatch(saveProduct(product));
    history.push("/");
  };

  return (
    <ProductDetail
      product={product}
      categories={categoriesReducer}
      onChange={handleChange}
      onSave={handleSave}
    />
  );
}

export function getProductById(products, productId) {
  let product = products.find((product) => product.id == productId) || null;
  return product;
}

export default AddOrUpdateProduct;
