import React from "react";
import proone from "../asstes/cars2.avif";
import protwo from "../asstes/cars1.jpg";
import prothre from "../asstes/cars3.jpg";
import profor from "../asstes/photo-1552519507-da3b142c6e3d.avif";
import './products.css'

const Productdetils = ({
  Productsitems,
  handleAddproducts,
}) => {
  return (
    <React.Fragment>
      <React.Fragment>
        {Productsitems.map((Productsitem) => (
          <section id="prodetails" class="section-p1">
            <div class=" single-pro-image ">
              <img src={Productsitem.img} width="100%" id="mainimg" alt="" />
              <div class="small-img-group"></div>
            </div>
            <div class="single-pro-details">
              <h6>home /Cars</h6>
              <h4>{Productsitem.title}</h4>
              <h2>{Productsitem.price}</h2>
              <select>
                <option> /Model Cars </option>
                <option> 2011 </option>
                <option> 2021 </option>
                <option> 2014 </option>
                <option> 2024 </option>
              </select>
              <input type="number" value="1" />
              <button
                class="normal"
                onClick={() => handleAddproducts(Productsitem)}
              >
                add to cart
              </button>
              <h4>products details</h4>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                ratione earum minima, aliquid quidem eos odit cumque incidunt
                fugiat magni, maxime reiciendis error itaque voluptatum
                veritatis! Vero tenetur ducimus cupiditate! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Expedita, magnam itaque
                maxime molestiae voluptates nemo tempora placeat, totam porro
                quam soluta. Inventore ad culpa cum officiis optio aut omnis
                ipsum!
              </span>
            </div>
          </section>
        ))}
      </React.Fragment>
    </React.Fragment>
  );
};

export default Productdetils;
