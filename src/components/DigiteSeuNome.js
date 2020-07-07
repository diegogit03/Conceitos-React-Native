import React, {useState} from 'react';
import { Text, View, TextInput } from 'react-native';

import styles from './style';

export default props => {
    const [nome, setNome] = useState('');
    return(
        <View>
            <Text style={{ fontSize: 24 }}>{nome}</Text>
            <TextInput
                placeholder="Digite seu nome"
                placeholderTextColor="#801"
                value={nome}
                onChangeText={text => setNome(text)}
            />
        </View>
    )
}