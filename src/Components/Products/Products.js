import React from "react";
import "./products.css";
import { Link } from "react-router-dom";
const Products = ({ Productsitems, handleAddproducts }) => {
  return (
    <div classNameName="product">
      <div className="container">
        <div className="row">
          <div className=" cadssd d-flex justify-content-between align-items-center mt-3 mb-3">
            {Productsitems.map((Productsitem) => (
              <div className="card text-center" style={{ width: "18rem" }}>
                <Link to="/Productdetils">
                <img
                  src={Productsitem.img}
                  className="card-img-top"
                  alt="..."
                />
                </Link>
                <div className="card-body">
                  <h5 className="card-title fw-bold text-uppercase">
                    {Productsitem.title}
                  </h5>
                  <p className="card-text text-black-50">{Productsitem.info}</p>
                  <p className="card-text">
                    prices:{Productsitem.price}
                    <span className="text-danger">$</span>
                  </p>
                  <button
                    className="btn btn-danger text-uppercase"
                    onClick={() => handleAddproducts(Productsitem)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
