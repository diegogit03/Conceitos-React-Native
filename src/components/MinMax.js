import React from 'react';
import { Text } from 'react-native';

import styles from './style'

export default (props) => {
    return <Text style={styles.FontG}>O valor {props.max} e maior que o valor {props.min}!</Text>
}