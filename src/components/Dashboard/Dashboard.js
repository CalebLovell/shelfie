import React, { Component } from 'react';
import Product from '../Product/Product'


class Dashboard extends Component {
    render() {
        let mappedProducts = this.props.products.map((product, i) => {
            return (
                <Product key={i} imageURL={product.imageURL} product_name={product.product_name} price={product.price} />
            )
        })
        return (
            <>
                {mappedProducts}
            </>
        );
    };
};

export default Dashboard;
