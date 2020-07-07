import React from 'react';
import { Text } from 'react-native';

import styles from '../style';

import Produtos from './Produtos';

export default props => {
    return(
        <>
            <Text style={styles.FontG}>Lista produtos</Text>
            {Produtos.map(p => (
                <Text key={p.id}>{p.id}) {p.nome} Tem o preço de {p.preco}</Text>
            ))}
        </>
    )
}