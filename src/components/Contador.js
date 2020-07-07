import React, { useState } from 'react';
import { Text, Button } from 'react-native';
import styles from './style';

export default ({ inicial = 0, passo = 1 }) => {
    const [numero, setNumero] = useState(/*props.inicial*/inicial);

    const inc = () => setNumero(numero + passo/*props.passo*/);
    const dec = () => setNumero(numero - passo/*props.passo*/);

    return (
        <>
            <Text style={styles.FontG}>{numero}</Text>
            <Button title="+" onPress={inc}/>
            <Button title="-" onPress={dec}/>
        </>
    )
}