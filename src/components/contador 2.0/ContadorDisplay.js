import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import styles from '../style';

export default props => {
    
    return(
        <View style={style.Display}>
            <Text style={[styles.FontG, style.DisplayText]}>
                {props.num}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    Display:{
        backgroundColor: '#000',
        padding: 20,
        width: 300,
        alignItems: 'center'
    },
    DisplayText:{
        color: '#fff'
    }
});