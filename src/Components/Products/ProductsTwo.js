import React from 'react'
import { Link } from 'react-router-dom';
import './products.css'

const ProductsTwo = ({ Productsitemstwo, handleAddproducts }) => {
  return (
    <React.Fragment>
      <div classNameName="product">
        <div className="container">
          <div className="row">
            <div className=" cadssd d-flex justify-content-between align-items-center mt-3 mb-3">
              {Productsitemstwo.map((productstwo) => (
                <div className="card text-center" style={{ width: "18rem" }}>
                  <Link to="/Productdetils">
                  <img
                    src={productstwo.img}
                    className="card-img-top"
                    alt="..."
                  />
                  </Link>{" "}
                  <div className="card-body">
                    <h5 className="card-title fw-bold text-uppercase">
                      {productstwo.title}
                    </h5>
                    <p className="card-text text-black-50">
                      {productstwo.info}
                    </p>
                    <p className="card-text">
                      prices:{productstwo.price}
                      <span className="text-danger">$</span>
                    </p>
                    <button
                      className="btn btn-danger text-uppercase"
                      onClick={() => handleAddproducts(productstwo)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/">
              <button type="button" className="btn btn-primary">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductsTwo