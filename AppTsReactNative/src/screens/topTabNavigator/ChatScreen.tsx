import React from 'react'
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { indexCss, colores } from '../../styles/index';


export const ChatScreen = () => {
    //const myIcon = <Icon name="rocket" size={30} color="#900" />;
    
    return (
        <View style={indexCss.globalMargin}>
            <Text>ChatScreen</Text>
            <Text>
                <Icon name="airplane-outline" size={30} color={colores.color1} />
            </Text>
        </View>
    )
}
