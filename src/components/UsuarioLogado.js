import React from 'react';
import { Text } from 'react-native';
import If from './If'

import styles from './style';

export default props => {
    const usuario = props.usuario || {};
    return(
        <If teste={usuario && usuario.email && usuario.email}>
            <Text style={styles.FontG}>Usúario Logado:</Text>
            <Text>{props.usuario.nome} - {props.usuario.email}</Text>
        </If>
    )
}