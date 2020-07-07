import React from 'react';
import { Text, FlatList } from 'react-native';

import styles from '../style';

import Produtos from './Produtos';

export default props => {
    
    return(
        <>
            <Text style={styles.FontG}>
                Lista De Produtos V2:
            </Text>
            <FlatList
                data={Produtos}
                keyExtractor={i => `${i.id}`}
                renderItem={({item: p})=>{
                    return <Text>{p.id}) {p.nome} - R$  {p.preco}</Text>
                }}
            />
        </>
    )
}