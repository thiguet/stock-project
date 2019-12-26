import React from 'react';
import SearchProduct from './screens/SearchProduct.jsx';
import AddProduct from './screens/AddProduct.jsx';
import EditProduct from './screens/EditProduct.jsx';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const Index = createStackNavigator(
    {
        SearchProduct: SearchProduct,
        AddProduct: AddProduct,
        EditProduct: EditProduct
    },
    {
        initialRouteName: 'SearchProduct',
    }
);

export default createAppContainer(Index);
