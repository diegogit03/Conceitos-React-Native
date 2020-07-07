import React from 'react';
import { Text } from 'react-native';

import Filho from './Filho';

import styles from '../style';

export default props => {
    let x = 13;
    let y = 100;
    return(
        <>
            {/*relação direta de componente pai e componente filho :D*/}
            <Filho a={x} b={y} />
            <Filho a={x + 2} b={y + 200} />
        </>
    )
}