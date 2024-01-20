import React from 'react'
import { Link } from 'react-router-dom';
import './products.css'
const ProductsThree = ({ handleAddproducts, Productsitemsthre }) => {
  return (
    <div>
      {" "}
      <div classNameName="product">
        <div className="container">
          <div className="row">
            <div className=" cadssd d-flex justify-content-between align-items-center mt-3 mb-3">
              {Productsitemsthre.map((productstthre) => (
                <div className="card text-center" style={{ width: "18rem" }}>
                  <Link to="/Productdetils">
                  <img
                    src={productstthre.img}
                    className="card-img-top"
                    alt="..."
                  />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title fw-bold text-uppercase">
                      {productstthre.title}
                    </h5>
                    <p className="card-text text-black-50">
                      {productstthre.info}
                    </p>
                    <p className="card-text">
                      prices:{productstthre.price}
                      <span className="text-danger">$</span>
                    </p>
                    <button
                      className="btn btn-danger text-uppercase"
                      onClick={() => handleAddproducts(productstthre)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/productstwo">
              <button type="button" className="btn btn-primary">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsThree