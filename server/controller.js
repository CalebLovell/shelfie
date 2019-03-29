module.exports = {
    getAllProducts: (req, res) => {
        req.app
            .get('db')
            .get_inventory()
            .then((products) => {
                res.status(200).send(products)
            });
    },
    addProduct: (req, res) => {
        req.app
            .get('db')
            .create_product([imageURL, product_name, price])
            .then(() => {
                res.status(200).send(`Product Added!`)
            });
    },
};