import React from 'react';
import { Text, Platform } from 'react-native';

import styles from './style';

export default props => {
    if(Platform.OS === 'android'){
        return <Text style={styles.FontG}>Android</Text>
    }else if(Platform.OS === 'ios'){
        return <Text style={styles.FontG}>IOS</Text>
    }
}