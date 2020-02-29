import React, { useState } from 'react';
import { Button, Dialog, Paragraph } from 'react-native-paper';

export function Alert(props) {
    const { isVisible, message, hideDialog } = props;

    return (<Dialog
        visible={isVisible}
        onDismiss={hideDialog}>
        <Dialog.Content>
            <Paragraph>{message}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
            <Button onPress={hideDialog}>Ok</Button>
        </Dialog.Actions>
    </Dialog>);
}