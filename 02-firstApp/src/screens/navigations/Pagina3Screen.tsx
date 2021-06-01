import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, Button } from 'react-native';
import { navigationTheme } from '../../theme/navigationTheme';

interface Propiedades extends StackScreenProps<any, any>{}

export const Pagina3Screen = ({navigation}: Propiedades) => {
    return (
        <View style={navigationTheme.globalMargin}>
            <Text>Pgina3Screens</Text>
            <Button title="Regresar" onPress={()=> navigation.pop()}/>
            <Button title="Ir pagina 1" onPress={()=> navigation.popToTop()}/>
        </View>
    )
}
