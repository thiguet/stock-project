const ProductService = require('../services/productService.js');
const Routable = require('./routable.js');

class ProductController extends Routable {
    constructor() {
        super();
        this.productService = new ProductService ();
        this.addProduct     = this.addProduct.bind(this);
        this.editProduct    = this.editProduct.bind(this);
        this.getAllProducts = this.getAllProducts.bind(this); 
        this.removeProduct  = this.removeProduct.bind(this);
        this.registerRoute  = this.registerRoute.bind(this);
    }

    addProduct(req, res, next) {
        try {
            res.setHeader('Access-Control-Allow-Origin', '*');
            const body = req.body;
            this.productService.addProduct(body).then(response => {
                res .status(200)
                    .json({ message: 'Produto cadastrado com sucesso!' });
            });
        } catch (e) {
            res .status(500)
                .json({
                    error: e.message
                });
        }
    }
    
    editProduct(req, res, next) {
        try {
            res.setHeader('Access-Control-Allow-Origin', '*');
            const body = req.body;
            this.productService.editProduct(body).then(response => {
                res .status(200)
                    .json({ message: 'Produto editado com sucesso!' });
            });
        } catch (e) {
            res .status(500)
                .json({
                    error: e.message
                });
        }
    }

    getAllProducts(req, res, next) {
        try {
            res.setHeader('Access-Control-Allow-Origin', '*');
            this.productService.getAllProducts().then(response => {
                res .status(200)
                    .json({ products: response });
            });
        } catch (e) {
            res .status(500)
                .json({ 
                    error: e.message 
                });
        }
    }

    removeProduct(req, res, next) {
        try {
            res.setHeader('Access-Control-Allow-Origin', '*');
            const body = req.body;
            this.productService.removeProduct(body).then(response => {
                res .status(200)
                    .json({ message: 'Produto removido com sucesso!' });
            });
        } catch (e) {
            res .status(500)
                .json({ 
                    error: e.message 
                });
        }
    }

    registerRoute(app) {
        app.post('/product/add',  this.addProduct);
        app.post('/product/edit', this.editProduct);
        app.post('/product/rm',   this.removeProduct);
        app.get ('/products',     this.getAllProducts);
    }
}

module.exports = new ProductController();