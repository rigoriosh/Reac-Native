import { useNavigation } from '@react-navigation/native';
import React from 'react'

import { View, Text, Button } from 'react-native';
import { navigationTheme } from '../../theme/navigationTheme';
import { Tarea2 } from '../diseniosApp/Tarea2';


export const Pagina2Screen = () => {

    const navigation = useNavigation()

    return (
        <View style={navigationTheme.globalMargin}>
            <Text>Pgina2Screens</Text>
            <Button title="Ir pagina 3" onPress={()=> navigation.navigate('Pagina3Screen')}/>
            <Tarea2/>
        </View>
    )
}
