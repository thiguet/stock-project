import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';

export function CustomTextInput (props) {
    const {onChangeText, value, label, styles, error} = props;

    return (
        <TextInput
            mode='flat'
            style={styles.textInput}
            label={label}
            value={value}
            onChangeText={onChangeText}
            error={error}
        />
    );    
};