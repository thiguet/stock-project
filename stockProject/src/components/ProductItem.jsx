import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { useSelector } from 'react-redux';
import { DataTable, Button } from 'react-native-paper';

export default function ProductItem({ item, editButtonHandler, removeButtonHandler }) {
	const { name, qtd, price, id } = item;
	return (
		<View style={styles.itemWrapper}>
			<DataTable.Row>
				<DataTable.Cell>{name}</DataTable.Cell>
				<DataTable.Cell numeric>{qtd}</DataTable.Cell>
				<DataTable.Cell numeric>{price}</DataTable.Cell>
				<DataTable.Cell style={styles.buttonCell}><Button compact contentStyle={styles.button} icon="pencil" onPress={() => editButtonHandler(id)}></Button></DataTable.Cell>
				<DataTable.Cell style={styles.buttonCell}><Button compact contentStyle={styles.button} icon="delete" onPress={() => removeButtonHandler(id)}></Button></DataTable.Cell>
			</DataTable.Row>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonCell: {
		height: 40,
		width: 10
	},
	button: {
		width: '100%'
	},
	itemWrapper: {
		marginVertical: 10,
	}
});

