import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import Quadrado from './Quadrados';

import styles from '../style';

export default props => {
    
    return(
        <View style={style.FlexV4}>
            <View style={style.V0}></View>
            <View style={style.V1}></View>
            <View style={style.V2}></View>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV4: {
        flex: 1,
        width: 100,
        backgroundColor: '#fff'
    },
    V0: {
        backgroundColor: '#36c9a7',
        height: 0,
    },
    V1: {
        backgroundColor: '#ff801a',
        flex: 5
    },
    V2: {
        backgroundColor: '#dd22c1',
        flex: 6
    }
});