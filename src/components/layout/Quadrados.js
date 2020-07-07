import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import styles from '../style';

export default props => {
    const lado = 50;
    return(
        <View
            style={{
                height: lado,
                width: lado,
                backgroundColor: props.cor || '#000'
            }}
        />
    )
}

const style = StyleSheet.create({

});