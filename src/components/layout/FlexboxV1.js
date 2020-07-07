import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import Quadrado from './Quadrados';

import styles from '../style';

export default props => {
    
    return(
        <View style={style.FlexV1}>
            <Quadrado cor="#ff801a"/>
            <Quadrado cor="#50d1f6"/>
            <Quadrado cor="#dd22c1"/>
            <Quadrado cor="#8312ed"/>
            <Quadrado cor="#36c9a7"/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1: {
        flex: 1,
        justifyContent: 'space-evenly'/*pode ser também flex-end, flex-start, space-around, space-between e space-evenly*/,
        backgroundColor: '#000',
    }
});