import { serverUrl } from '../config/config.js';
import FetchJson from './FetchJson.js';

export default class ProductService {
    constructor() {
        this.fecthJsonService = new FetchJson ();
        this.getProducts      = this.getProducts.bind(this);
        this.newProduct       = this.newProduct.bind(this);
        this.editProduct      = this.editProduct.bind(this);
        this.removeProduct    = this.removeProduct.bind(this);
    }

    getProducts() {
        return this.fecthJsonService.get(serverUrl + '/products').then(response => {
            response.products = response.products.map(product => ({
                ...product,
                qtd: (product.qtd+''),
                price: (product.price+'').replace('.', ',')
            }));
            return response; 
        });
    }

    newProduct({ name, price, qtd }) {
        const bodyData = {
            name,
            price,
            qtd
        };
        return this.fecthJsonService.post(serverUrl + '/product/add', bodyData);
    }

    editProduct({ productId, name, price, qtd }) {
        const bodyData = {
            productId, 
            name,
            price,
            qtd
        };
        return this.fecthJsonService.post(serverUrl + '/product/edit', bodyData);    
    }

    removeProduct(productId) {
        const bodyData = {
            productId 
        };
        return this.fecthJsonService.post(serverUrl + '/product/rm', bodyData);    
    }
}