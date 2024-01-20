import React from 'react'
import { Route, Routes } from "react-router-dom";
import  '../Signup/Signup'
import "../Products/Products";
import '../Cart/Cart'
import Products from "../Products/Products";
import Signup from '../Signup/Signup';
import Cart from '../Cart/Cart';
import Hero from '../Hero/Hero';
import ProductsTwo from '../Products/ProductsTwo';
import ProductsThree from '../Products/ProductsThree';
import Productdetils from '../Products/Productdetils';
const Routesss = ({
  Productsitems,
  Productsitemstwo,
  CartItems,
  handleAddproducts,
  handleremoveproducts,
  handelcartClear,
  Productsitemsthre,
}) => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Hero
              Productsitems={Productsitems}
              Productsitemstwo={Productsitemstwo}
              Productsitemsthre={Productsitemsthre}
              handleAddproducts={handleAddproducts}
            />
          }
        />

        <Route
          path="/products"
          element={
            <Products
              Productsitems={Productsitems}
              handleAddproducts={handleAddproducts}
            />
          }
        />
        <Route
          path="/productstwo"
          element={
            <ProductsTwo
              Productsitems={Productsitems}
              Productsitemstwo={Productsitemstwo}
              handleAddproducts={handleAddproducts}
            />
          }
        />
        <Route
          path="/ProductsThree"
          element={
            <ProductsThree
              Productsitems={Productsitems}
              Productsitemsthre={Productsitemsthre}
              handleAddproducts={handleAddproducts}
            />
          }
        />
        <Route
          path="/Productdetils"
          element={
            <Productdetils
              handleAddproducts={handleAddproducts}
              Productsitems={Productsitems}
            />
          }
        />
      </Routes>
      <Routes>
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      <Routes>
        <Route
          path="/cart"
          element={
            <Cart
              CartItems={CartItems}
              handleAddproducts={handleAddproducts}
              handleremoveproducts={handleremoveproducts}
              handelcartClear={handelcartClear}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Routesss