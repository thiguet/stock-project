const dbService = require('../util/db.js');
const StockDTO = require('./stockDTO.js');

class ProductDTO {    
    constructor() {
		this.stockDTO = new StockDTO ();
		
        this.GET_ALL_PRODUCTS   = "SELECT P.`id`, P.`name`, SUM(S.`qtd`) AS qtd, P.`price` FROM `product` P JOIN `stock` S ON P.`id` = S.`product_id` GROUP BY  P.`id`, P.`name`, P.`price` ORDER BY P.`name` ";
		this.INSERT_NEW_PRODUCT = "INSERT INTO `product` (`name`, `price`) VALUES (@name, @price)";
		this.DELETE_PRODUCT     = "DELETE FROM `product` WHERE `id` = @productId";
		this.UPDATE_PRODUCT     = "UPDATE `product` SET `name` = @name, `price` = @price WHERE `id` = @productId"; 

		this.addProduct = this.addProduct.bind(this);
	}

	getAllProducts () {
		return dbService.runQuery(this.GET_ALL_PRODUCTS, false);
	}

    addProduct(name, qtd, price) {
		const queryParams = {
			name : name,
			price: price
		};
		
		return dbService.runQuery(this.INSERT_NEW_PRODUCT, queryParams).then(result => {
			return this.stockDTO.addProductQtd(result.insertId, qtd);	
		});
	}

	editProduct(productId, name, qtd, price) {
		const queryParams = {
			productId: productId,
			name : name,
			price: price
		};
		
		return dbService.runQuery(this.UPDATE_PRODUCT, queryParams).then(result => {
			return this.stockDTO.editProductQtd(productId, qtd);	
		});
	}
	
	removeProduct(productId) {
		const queryParams = {
			productId : productId
		};
		return this.stockDTO.removeProduct(productId).then(result => {
			return dbService.runQuery(this.DELETE_PRODUCT, queryParams);
		});
	}
}

module.exports = ProductDTO;