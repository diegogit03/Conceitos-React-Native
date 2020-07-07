import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import Quadrado from './Quadrados';

import styles from '../style';

export default props => {
    
    return(
        <View style={style.FlexV2}>
            <Quadrado cor="#ff801a"/>
            <Quadrado cor="#50d1f6"/>
            <Quadrado cor="#dd22c1"/>
            <Quadrado cor="#8312ed"/>
            <Quadrado cor="#36c9a7"/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV2: {
        flex: 1,
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: '#bbb',
        alignItems: 'center',
    }
});