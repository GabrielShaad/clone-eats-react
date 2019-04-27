import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AppConsumer } from "../appContext";

class Place extends Component {
  render() {
    const { id } = this.props.match.params;

    return (
      <AppConsumer>
        {({ places, addToCart }) => {
          const currentPlace = places.find(item => item.id === parseInt(id));
          return currentPlace ? (
            <div>
              <div
                className="place-header"
                style={{ backgroundImage: `url(/assets/${currentPlace.img})` }}
              >
                <div className="container">
                  <div className="place-title">{currentPlace.title}</div>
                </div>
              </div>
              <div className="container">
                <div className="options">
                  {currentPlace.options.map(item => (
                    <div
                      onClick={() =>
                        addToCart({ newItem: item, place: currentPlace })
                      }
                      key={`option-${item.id}`}
                      className="option"
                    >
                      <div className="option-text">
                        <div className="option-title">{item.name}</div>
                        <div className="option-price">R$ {item.price}</div>
                      </div>
                      <div
                        className="option-image"
                        style={{ backgroundImage: `url(/assets/${item.img})` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="payment">
                  <Link className="payment-button" to="/cart">
                    Pagamento
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="container">Carregando...</div>
          );
        }}
      </AppConsumer>
    );
  }
}

export default Place;
