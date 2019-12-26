import React, { useState, useEffect, useRef } from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { Button, DataTable, Searchbar } from 'react-native-paper';

import { useSelector, useDispatch } from 'react-redux';
import { editProduct, loadProducts, filterProducts } from '../redux/actions/index.js';

import ProductsTable from '../components/ProductsTable.jsx';
import ProductService from '../services/ProductService.js';

export default function SearchProduct(props) {
	const dispatch = useDispatch();

	const shouldLoadData = useRef(true);

	const getProducts = async () => {
		const { products } = await productService.getProducts();
		return products;
	}

	const productService = new ProductService();

	const productsRows = useSelector(({ productState }) => productState.productsRows);
	const displayedProducts = useSelector(({ productState }) => productState.filteredProducts);

	const [firstQuery, setFirstQuery] = useState('');

	const handleNewProductBtn = () => {
		props.navigation.navigate('AddProduct');
	};
	
	const handleEditButton = productId => {
		const selectedProduct = displayedProducts.filter(row => row.id === productId)[0];
		dispatch(editProduct(selectedProduct));
		props.navigation.navigate('EditProduct', { productId });
	};

	const handleRemoveButton = async productId => {
		productService.removeProduct(productId);
		const products = await getProducts();
		dispatch(loadProducts(products));
		dispatch(filterProducts(products));
	};

	const filterData = query => {
		const filteredProducts = productsRows.filter(({ name }) => name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
		dispatch(filterProducts(filteredProducts));
		setFirstQuery(query);
	};

	useEffect(() => {
		(async () => {
			if (shouldLoadData.current) {
				const products = await getProducts();
				dispatch(loadProducts(products));
				dispatch(filterProducts(products));
			}
		})();
		return () => {
			shouldLoadData.current = false;
		};
	}, []);

	return (
		<View style={styles.container}>
			<Searchbar
				style={styles.searchBar}
				placeholder="Search"
				onChangeText={filterData}
				value={firstQuery}
			/>
			<ProductsTable
				productsRows={displayedProducts}
				removeButtonHandler={handleRemoveButton}
				editButtonHandler={handleEditButton} />

			<View style={styles.container}>
				<Button icon="plus" mode="contained" onPress={handleNewProductBtn}>
					New Product
				</Button>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 32,
	},
	titleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 12,
		marginVertical: 8,
	},
	title: {
		fontSize: 26,
	},
	item: {
		backgroundColor: '#f9c2ff',
		padding: 20,
		marginVertical: 8,
	},
	searchBar: {
		marginVertical: 30,
	},
});
