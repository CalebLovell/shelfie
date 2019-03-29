module.exports = {
    getAllProducts: (req, res) => {
        req.app
            .get('db')
            .get_inventory(this)
            .then((products) => {
                res.status(200).send(products)
            });
    },
    addProduct: (req, res) => {
        console.log((req.body))
        const { imageURL, product_name, price } = req.body
        req.app
            .get('db')
            .create_product([imageURL, product_name, price])
            .then((products) => {
                res.status(200).send(products)
            });
    },
};