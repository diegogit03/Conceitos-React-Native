import React from 'react';
import { Text } from 'react-native';

import styles from '../style';

export default props => {
    
    return(
        <Text style={styles.FontG}>
            {props.nome} {props.sobrenome}
        </Text>
    )
}