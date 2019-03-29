import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
    constructor() {
        super();

        this.state = {
            imageURL: '',
            product_name: '',
            price: 0,
        };
    };

    handleChangeImg = (e) => {
        this.setState({ imageURL: e.target.value })
    };

    handleChangeName = (e) => {
        this.setState({ product_name: e.target.value })
    };

    handleChangePrice = (e) => {
        this.setState({ price: e.target.value })
    };

    handleCancel = () => {
        this.setState({
            imageURL: '',
            product_name: '',
            price: 0,
        });
    };

    addProduct = (e) => {
        e.preventDefault();
        axios
            .post('/api/product', this.state)
            .then(res => {
                this.setState({
                    imageURL: '',
                    product_name: '',
                    price: 0,
                });
            })
            .catch(err => { console.log(`¿que hiciste pendejo?: ${err} `) });
        this.props.getInventory();
        this.handleCancel();
    };

    render() {
        return (
            <div className="form">
                <div className="form-img-prev">

                </div>
                <p>Image URL:</p>
                <input value={this.state.imageURL} onChange={this.handleChangeImg}></input>
                <p>Product Name:</p>
                <input value={this.state.product_name} onChange={this.handleChangeName}></input>
                <p>Price:</p>
                <input value={this.state.price} onChange={this.handleChangePrice}></input>
                <div className="button-box">
                    <button onClick={this.handleCancel}>Cancel</button>
                    <button onClick={this.addProduct}>Add to Inventory</button>
                </div>
            </div>
        )
    };
};

export default Form;