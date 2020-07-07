import React, { useState } from 'react';
import { Text } from 'react-native';

import ContadorDisplay from './ContadorDisplay';
import ContadorBotoes from './ContadorBotoes';

import styles from '../style';

export default ({inicial, passo}) => {
    const [num, setNum] = useState(inicial);

    const inc = () => setNum(num + passo);
    const dec = () => setNum(num - passo);

    return(
        <>
            <Text style={styles.FontG}>
                Contador
            </Text>
            <ContadorDisplay num={num}/>
            <ContadorBotoes inc={inc} dec={dec}/>
        </>
    )
}