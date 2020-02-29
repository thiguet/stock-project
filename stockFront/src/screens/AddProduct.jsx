import React, { useState } from 'react';

import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Paper, Button, Portal } from 'react-native-paper';
import { CustomTextInput } from '../components/CustomTextInput.jsx';
import { Alert } from '../components/Alert.jsx';

import { useDispatch } from 'react-redux';
import { loadProducts, filterProducts } from '../redux/actions/index';

import ProductService from '../services/ProductService.js';
import MaskService from '../services/MaskService.js';

export default function AddProduct(props) {
	const [name, onChangeName] = useState('');
	const [qtd, onChangeQtd] = useState('0');
	const [price, onChangePrice] = useState('0,00');
	const [nameFieldError, setNameFieldError] = useState(false);
	const [isVisible, setIsVisible] = useState(false),
		[dialogMessage, setDialogMessage] = useState('');

	const productService = new ProductService();
	const dispatch = useDispatch();

	const isValidName = productName => /^\s*(\w+\s*)+$/g.test(productName);

	const backToSearchScreen = () => props.navigation.navigate('SearchProduct');

	const saveProduct = evt => {
		if (isValidName(name)) {
			(async () => {
				await productService.newProduct({
					name: name,
					qtd: parseInt(qtd),
					price: (price + '').replace(',', '.')
				});
				const { products } = await productService.getProducts();
				dispatch(loadProducts(products));
				dispatch(filterProducts(products));
				backToSearchScreen();
			})();
		} else {
			setNameFieldError(true);
			setIsVisible(true);
			setDialogMessage('O nome do produto informado não é válido !');
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>Product</Text>
			</View>

			<View>
				<CustomTextInput
					onChangeText={val => {
						setNameFieldError(!isValidName(val));
						onChangeName(val);
					}}
					value={name}
					label={'Produto:'}
					styles={customTextInputStyles}
					error={nameFieldError} />

				<CustomTextInput
					onChangeText={val => onChangeQtd(MaskService.integerMask(val))}
					value={qtd}
					label={'Quantidade:'}
					styles={customTextInputStyles} />

				<CustomTextInput
					onChangeText={val => onChangePrice(MaskService.floatMask(val))}
					value={price}
					label={'Valor Unitário:'}
					styles={customTextInputStyles} />
			</View>
			<View style={styles.buttonContainer}>
				<Button
					label="Salvar"
					mode="contained"
					onPress={saveProduct}>Salvar</Button>
			</View>

			<Portal>
				<Alert
					isVisible={isVisible}
					message={dialogMessage}
					hideDialog={() => setIsVisible(false)} />
			</Portal>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		marginHorizontal: 40,
	},
	title: {
		fontSize: 40
	},
	titleContainer: {
		marginTop: 20,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonContainer: {
		flex: 2,
		justifyContent: 'center',
		width: '100%'
	},
});

const customTextInputStyles = StyleSheet.create({
	textInput: {
		backgroundColor: 'none',
		marginVertical: 8,
	},
});