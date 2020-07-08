import React, { Component } from 'react';
import { Text, TextInput, Button } from 'react-native';
import styles from '../style';

export default class Mega extends Component{



    state = {
        quantidadeDeNumeros: this.props.quantidadeDeNumeros,
        numeros: []
    }

    alterarQuantidadeNumeros = (quantidade) =>{
        this.setState({ quantidadeDeNumeros: +quantidade })
    }

    

    gerarNumeroNaoContido = (numeros) => {
        const novoNumero = parseInt(Math.random() * 60) + 1;
        return numeros.includes(novoNumero) ? this.gerarNumeros(numeros) : novoNumero;
    }
    
    gerarNumeros = () =>{
        const numeros = Array(this.state.quantidadeDeNumeros)
            .fill()
            .reduce(nums => [...nums, this.gerarNumeroNaoContido(nums)], [])
            .sort((a, b) => a -b);
        this.setState({numeros})
    }

    render(){
        return(
            <>
                <Text style={styles.FontG}>
                    Gerador de Mega-Sena
                </Text>
                <TextInput
                keyboardType="numeric"
                    placeholder="Quantidade de numeros"
                    style={{borderBottomWidth: 1}}
                    value={`${this.state.quantidadeDeNumeros}`}
                    onChangeText={this.alterarQuantidadeNumeros}
                    placeholderTextColor="#fff"
                />
                <Button
                    title="Gerar"
                    onPress={this.gerarNumeros}
                />
                <Text>
                    {this.state.numeros.join(',')}
                </Text>
            </>
        )
    }
}