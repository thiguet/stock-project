const dbService = require('../util/db.js');

class StockDTO {
	constructor() {
		this.INSERT_NEW_PRODUCT_QTD = "INSERT INTO `stock` (`product_id`, `qtd`) VALUES (@productId, @qtd)";
		this.DELETE_PRODUCT_QTD		= "DELETE FROM `stock` WHERE `product_id` = @productId";
		this.UPDATE_PRODUCT_QTD     = "UPDATE `stock` SET `qtd` = @qtd WHERE `product_id` = @productId";
	}

	addProductQtd(productId, qtd) {
		const queryParams = {
			productId: productId,
			qtd: qtd
		};

		return dbService.runQuery(this.INSERT_NEW_PRODUCT_QTD, queryParams, result => {
			return result;
		});
	}

	editProductQtd(productId, qtd) {
		const queryParams = {
			productId: productId,
			qtd: qtd
		};

		return dbService.runQuery(this.UPDATE_PRODUCT_QTD, queryParams, result => {
			return result;
		});
	}

	removeProduct(productId) {
		const queryParams = {
			productId: productId
		};

		return dbService.runQuery(this.DELETE_PRODUCT_QTD, queryParams, result => {
			return result;
		});
	}
}

module.exports = StockDTO;