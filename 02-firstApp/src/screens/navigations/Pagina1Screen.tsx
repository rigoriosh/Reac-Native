import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, Button } from 'react-native';
import { navigationTheme } from '../../theme/navigationTheme';

interface Propiedades extends StackScreenProps<any, any>{}

export const Pagina1Screen = ({navigation}: Propiedades) => {
    //console.log(props);


    return (
        <View style={navigationTheme.globalMargin}>
            <Text>Pagina1Screen</Text>
            <Button title="Ir pagina 2" onPress={()=> navigation.navigate('Pagina2Screen')}/>
        </View>
    )
}
