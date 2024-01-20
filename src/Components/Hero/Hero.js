import React from 'react'
import Products from '../Products/Products'
import './Hero.css'
import backGroundone from '../asstes/photo-1494976388531-d1058494cdd8.avif'
import backGroundtwo from "../asstes/photo-1552519507-da3b142c6e3d.avif";
import backGroundther from "../asstes/photo-1494976388531-d1058494cdd8.avif";
import { Link } from 'react-router-dom';
import ProductsTwo from '../Products/ProductsTwo';
import ProductsThree from '../Products/ProductsThree';


const Hero = ({
  Productsitems,
  handleAddproducts,
  Productsitemstwo,
  Productsitemsthre,
}) => {
  return (
    <React.Fragment>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={backGroundone}
              className="d-block w-100 height-500"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={backGroundtwo}
              className="d-block w-100  height-500"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={backGroundther}
              className="d-block w-100  height-500"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
        <h2 className="text-center fw-bold"> All Products</h2>
        <div className=" d-flex justify-content-center gap-2">
          <Link to="/">
            <button type="button" className="btn btn-primary">
              All
            </button>
          </Link>

          <Link to="/productstwo">
            <button type="button" className="btn btn-success">
              Product Two
            </button>
          </Link>
          <Link to="/productsthree">
            <button type="button" className="btn btn-warning">
              Product Three
            </button>
          </Link>
        </div>
      </div>

      {
        <Products
          Productsitems={Productsitems}
          handleAddproducts={handleAddproducts}
        />
      }
      {
        <ProductsTwo
          Productsitemstwo={Productsitemstwo}
          handleAddproducts={handleAddproducts}
        />
      }
      {
        <ProductsThree
          Productsitemsthre={Productsitemsthre}
          handleAddproducts={handleAddproducts}
        />
      }
    </React.Fragment>
  );
};

export default Hero