import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };
    this.getInventory = this.getInventory.bind(this);
  };

  getInventory() {
    axios
      .get(`/api/inventory`)
      .then(res => {
        this.setState({
          products: res.data,
        });
      })
      .catch(err => { console.log(`nossa você quebrou algo né? bom trabalho xd. Ler o problemo aqui: ${err} `) });
  };

  componentDidMount = () => {
    this.getInventory();
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="product-column">
          <Dashboard products={this.state.products} />
        </div>
        <Form getInventory={this.getInventory} />
      </div>
    );
  };
};

export default App;
