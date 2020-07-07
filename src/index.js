import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';

import FlexBoxV4 from './components/layout/FlexboxV4';
import FlexBoxV3 from './components/layout/FlexboxV3'
import FlexBoxV2 from './components/layout/FlexboxV2'
import FlexBoxV1 from './components/layout/FlexboxV1';
import Quadrado from './components/layout/Quadrados';
import DigiteSeuNome from './components/DigiteSeuNome';
import ListaProdutosV2 from './components/produtos/ListaProdutosV2';
import ListaProdutos from './components/produtos/ListaProdutos';
import UsuarioLogado from './components/UsuarioLogado';
import Familia from './components/relacao/Familia';
import Membro from './components/relacao/Membro';
import ParImpar from './components/ParImpar';
import DiferenciarPlataforma from './components/Diferenciar';
import Contador2 from './components/contador 2.0/Contador2';
import PaiIndireto from "./components/indireta/Pai";
import PaiDireto from './components/direta/Pai';
import Titulo from "./components/Titulo";
import Botao from "./components/Botao";
import Primeiro from './components/Primeiro';
import X, { Comp1, Comp2 } from './components/Multi';
import MinMax from "./components/MinMax";
import Aleatorio from "./components/Aleatorio"
import Contador from "./components/Contador";

import styles from './components/style';

export default function Principal() {
  return (
    <SafeAreaView style={styles.container}>

      <FlexBoxV4/>
      {/*
      <FlexBoxV3/>
      <FlexBoxV2/>
      <FlexBoxV1/>
      <DigiteSeuNome/>
      <ListaProdutosV2/>
      <ListaProdutos/>
      <UsuarioLogado usuario={{nome: 'Diego Henrique', email: 'seiLá@email.com'}}/>
      <Familia>
        <Membro nome="Diego" sobrenome="Madero"/>
        <Membro nome="Victor" sobrenome="Madero"/>
      </Familia>
      <ParImpar num={2}/>
      <DiferenciarPlataforma/>     
      <Contador2 inicial={10} passo={1}/>
      <PaiIndireto/>
      <PaiDireto/>
      <Botao/>
      <X/>
      <Comp1/>
      <Comp2/>
      <Primeiro />
      <MinMax min={22} max={42}/>
      <Aleatorio min={22} max={80}/>
      <Aleatorio min={22} max={80}/>
      <Aleatorio min={22} max={80}/>
      <Aleatorio min={22} max={80}/>
      <Aleatorio min={22} max={80}/>
      <Aleatorio min={22} max={80}/>
      <Contador inicial={22} passo={14}/>
      <Titulo principal="Cadastro produto" segundario="Tela de cadastro de produto"/>
      */}
    </SafeAreaView>
  );
}
