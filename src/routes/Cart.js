import React from "react";
import { AppConsumer } from "../appContext";

const Cart = () => {
  return (
    <AppConsumer>
      {({ cart }) => (
        <div className="container">
          <h1 className="cart-title">Pagar</h1>
          <div className="cart-container">
            {cart.length ? (
              <ul className="cart-list">
                {cart.map(item => {
                  return (
                    <li key={`cart-${item.id}`} className="cart-item">
                      <div className="cart-text">
                        <div className="cart-place">{item.place.title}</div>
                        <div className="cart-order">{item.name}</div>
                      </div>
                      <span className="cart-price">R$ {item.price}</span>
                    </li>
                  );
                })}
              </ul>
            ) : (
              "Nenhum produto no carrinho"
            )}
            {cart.length > 0 && (
              <div className="payment">
                <button className="payment-button">Finalizar</button>
              </div>
            )}
          </div>
        </div>
      )}
    </AppConsumer>
  );
};

export default Cart;
