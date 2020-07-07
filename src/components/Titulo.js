import React, { Fragment } from 'react';
import { View, Text } from 'react-native';

import styles from "./style";

export default props => {
    return(
        <Fragment>
            <Text style={styles.FontG}>{props.principal}</Text>
            <Text>{props.segundario}</Text>
        </Fragment>
    )
}