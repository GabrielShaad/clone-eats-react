import React, { Component } from "react";
import Card from "../components/Card";
import { AppConsumer } from "../appContext";

class Home extends Component {
  state = {
    search: ""
  };

  getFilteredList(list) {
    const { search } = this.state;
    return list.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  render() {
    const { search } = this.state;
    return (
      <main className="container">
        <div className="search">
          <img src="/assets/search.svg" alt="Search Icon" />
          <input
            type="text"
            onChange={event => this.setState({ search: event.target.value })}
            value={search}
            placeholder="Pesquisar restaurante"
          />
        </div>
        <div className="places">
          <AppConsumer>
            {({ places }) => {
              return this.getFilteredList(places).length > 0
                ? this.getFilteredList(places).map(({ ...item }) => (
                    <Card key={item.id} {...item} />
                  ))
                : "Nenhum resultado encontrado";
            }}
          </AppConsumer>
        </div>
      </main>
    );
  }
}

export default Home;
