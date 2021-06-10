import React, { useContext } from 'react'
import { View, Text } from 'react-native';

import { AuthContext } from '../../context/AuthContext';
import { colores, indexCss } from '../../styles/index';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tab1Screen = () => {

    const {authState} = useContext(AuthContext);
    
    return (
        <View style={indexCss.globalMargin}>
            <Text>{JSON.stringify(authState, null, 3)}</Text>
            {authState.favoriteIcon && <Icon name={authState.favoriteIcon} size={50} color={colores.color2} />}
            
        </View>
    )
}
