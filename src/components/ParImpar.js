import React from 'react';
import { Text, View } from 'react-native';

import styles from './style';

export default ({num = 0}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.FontG}>o Resultado é:</Text>
            {num % 2 === 0
                ? <Text style={[styles.FontG, styles.FontDestaque]}>Par</Text> 
                : <Text style={[styles.FontG, styles.FontDestaque]}>Impar</Text>
            }
        </View>
    )
}