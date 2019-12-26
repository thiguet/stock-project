import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { Store } from './store.js';
import Index from './src/Index';
import SearchProduct from './src/screens/SearchProduct.jsx'; 

export default function App() {
	return (
		<PaperProvider theme={DefaultTheme}>
			<StoreProvider store={Store}>
				<Index />
			</StoreProvider>
		</PaperProvider>
	);
}