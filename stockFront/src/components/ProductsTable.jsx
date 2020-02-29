import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { DataTable } from 'react-native-paper';
import ProductItem from './ProductItem.jsx';

export default function ProductTable(props) {
	const { productsRows, rowsPerPage, editButtonHandler, removeButtonHandler } = props;

	const ROWS_PER_PAGE = rowsPerPage || 4;

    const getInitialPosition = page => page * ROWS_PER_PAGE;
	const getFinalPosition = page => page * ROWS_PER_PAGE + ROWS_PER_PAGE;
	const getNumberOfPages = rows => parseInt(rows.length / ROWS_PER_PAGE) + (rows.length !== 0 && (rows.length % ROWS_PER_PAGE) === 0 ? 0 : 1);
	const getPage = page => parseInt(page) > getNumberOfPages(productsRows) ? 1 : page;

	const [page, setPage] = useState(0);
	const [rows, setRows] = useState([].concat(productsRows).slice(getInitialPosition(page), getFinalPosition(page)));
	const [numberOfPages, setNumberOfPages] = useState(getNumberOfPages(productsRows));

	const renderItem = ({ item }) => <ProductItem item={item} editButtonHandler={editButtonHandler} removeButtonHandler={removeButtonHandler} />;

	return (
		<DataTable>
			<DataTable.Header>
				<DataTable.Title>Product</DataTable.Title>
				<DataTable.Title numeric>Qtd</DataTable.Title>
				<DataTable.Title numeric>Price</DataTable.Title>
				<DataTable.Title></DataTable.Title>
				<DataTable.Title></DataTable.Title>
			</DataTable.Header>

			<FlatList
				data={[].concat(productsRows).slice(getInitialPosition(page), getFinalPosition(page))}
				renderItem={renderItem}
				keyExtractor={item => item.id.toString()} />

			<DataTable.Pagination
				page={getPage(page)}
				numberOfPages={getNumberOfPages(productsRows)}
				onPageChange={(page) => {
					setPage(page);
					setRows(productsRows.slice(getInitialPosition(getPage(page)), getFinalPosition(getPage(page))));
				}}
			/>
		</DataTable>
	);
}