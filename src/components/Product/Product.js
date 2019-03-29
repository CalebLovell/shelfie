import React, { Component } from 'react';
import axios from 'axios';

class Product extends Component {
    constructor() {
        super();

        this.state = {

        }
    };

    deleteProduct = (e) => {
        e.preventDefault();
    };

    render() {
        return (
            <div className="product">
                <div className="product-img-prev">
                    <img src={`${this.props.imageURL}`} alt="randomized productPicture" />
                </div>
                <div className="p-box">
                    <p>{this.props.product_name}</p>
                    <p>{this.props.price}</p>
                </div>
                <div className="button-box">
                    <button>Edit</button>
                    <button onClick={this.deleteProduct}>Delete</button>
                </div>
            </div>
        )
    }
}

export default Product;