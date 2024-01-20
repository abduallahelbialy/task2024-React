import React from "react";
import "./Cart.css";
const Cart = ({
  CartItems,
  handleAddproducts,
  handleremoveproducts,
  handelcartClear,
}) => {
  const totaleprice = CartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <React.Fragment>
      <div className="cart">
        <div className="container">
          <div className="cart-items mt-2">
            <div className="cart items-header text-center bg-black text-danger mb-3">
              
              Cart Items
              <div className=" clear-all mt-2">
              {CartItems.length >=1 &&(
                <button
                className="btn btn-success text-uppercase add"
                onClick={ handelcartClear}
              >
                Clear Alll
              </button>
              )}
              </div>
              {CartItems.length === 0 && (
                <div className="cart-items-empty ">No items are added</div>
              )}
              <div className=" cadssd d-flex justify-content-between align-items-center mt-3 mb-3">
                {CartItems.map((item) => (
                  <div key={item.id} className="cart-item-list">
                    <div className="card" style={{ width: "18rem" }}>
                      <img src={item.img} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title fw-bold text-uppercase">
                          {item.title}
                        </h5>
                        <p className="card-text text-black-50">{item.info}</p>
                        <p className="card-text">
                          prices:{item.price}
                          <span className="text-danger">$</span>
                        </p>
                        <div className="d-flex justify-content-between">
                          <button
                            className="btn btn-success text-uppercase add"
                            onClick={() => handleAddproducts(item)}
                          >
                            +
                          </button>
                          <button
                            className="btn btn-danger text-uppercase remove"
                            onClick={() => handleremoveproducts(item)}
                          >
                            -
                          </button>
                        </div>
                        <div className="cart-item-price">
                          Quantity is{item.quantity} ${item.price}
                        </div>
                        <div className="tottle-price-name">
                          Total price
                          <div className="totle-price-item">${totaleprice}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cart;
