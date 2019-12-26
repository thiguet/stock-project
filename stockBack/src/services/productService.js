const ProductDTO = require('../dto/productDTO.js');

class ProductService {
    constructor() {
        this.productDTO = new ProductDTO (); 
    }

    addProduct(productData) {
        const name  = productData.name,
              qtd   = productData.qtd,
              price = productData.price;

        return this.productDTO.addProduct(name, qtd, price);
    }

    editProduct(productData) {
        const productId = productData.productId, 
              name  = productData.name,
              qtd   = productData.qtd,
              price = productData.price;

        return this.productDTO.editProduct(productId, name, qtd, price);
    }

    getAllProducts() {
        return this.productDTO.getAllProducts();
    }

    removeProduct(productData) {
        const productId  = productData.productId;        
        return this.productDTO.removeProduct(productId);
    }
}

module.exports = ProductService;
