import React from 'react';
import { Text } from 'react-native';

import styles from "../style";

export default ({a , b}) => {
    return(
        <>
            <Text style={styles.FontG}>{a}</Text>
            <Text style={styles.FontG}>{b}</Text>
        </>
    )
}