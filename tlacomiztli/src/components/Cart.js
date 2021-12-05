import React, { Fragment } from "react";
import './cart.css';
import Joya from "./Joya";

const Cart = ({cart, setCart}) => {
    const viewCart = () => {
        
          document.querySelector(
            "div.container__header__cartDiv--list"
          ).style.display = "none"
            ? (document.querySelector(
                "div.container__header__cartDiv--list"
              ).style.display = "flex")
            : (document.querySelector(
                "div.container__header__cartDiv--list"
              ).style.display = "none");
      };
    
      const closeDiv = () => {
        document.querySelector(
          "div.container__header__cartDiv--list"
        ).style.display = "none";
      };
    
    return (
        <Fragment>
      <div className="container__header__cartDiv">
        <p className="container__header__cartDiv--count">{cart.length}</p>
        <button
          className="container__header__cartDiv--btnCart"
          onClick={() => viewCart()}
        ></button>
      </div>
      <div className="container__header__cartDiv--list">
        <button
          className="container__content__burgers--btnClose"
          type="button"
          onClick={() => closeDiv()}
        >
          X
        </button>
        {cart.length === 0 ? (
          <p className="text-home">No hay nada por aquí...</p>
        ) : (
          cart.map((doc) => (
            <Joya 
        key={doc.id}
        joya={doc}
        cart={cart}
        setCart={setCart}
        />
          ))
        )}
      </div>
    </Fragment>
    );
};

export default Cart;