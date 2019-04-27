import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import posed, { PoseGroup } from "react-pose";
import Header from "./components/Header";
import Home from "./routes/Home";
import Place from "./routes/Place";
import Cart from "./routes/Cart";
import { AppProvider } from "./appContext";
import data from "./data.json";

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});

class App extends Component {
  state = {
    places: [],
    cart: []
  };

  componentDidMount() {
    this.setState({ places: data });
  }

  addToCart = ({ newItem, place }) => {
    const { cart } = this.state;
    if (!cart.some(item => item.id === newItem.id)) {
      this.setState({
        cart: [...cart, { ...newItem, place }]
      });
    }
  };

  render() {
    return (
      <Route
        render={({ location }) => (
          <AppProvider
            value={{
              ...this.state,
              addToCart: this.addToCart
            }}
          >
            <Header />
            <PoseGroup flipMove={false}>
              <RouteContainer key={location.pathname}>
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route path="/cart" component={Cart} />
                  <Route path="/:id" component={Place} />
                </Switch>
              </RouteContainer>
            </PoseGroup>
          </AppProvider>
        )}
      />
    );
  }
}

export default App;
