import { useNavigation } from '@react-navigation/native';
import React from 'react'

import { View, Text, Button } from 'react-native';
import { navigationTheme } from '../../theme/navigationTheme';
import { useEffect } from 'react';
import { Tarea2 } from '../diseniosApp/Tarea2';


export const Pagina2Screen = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            title:'', // le quita el titulo que aparece x defecto al lado de la flecha de regresar
            headerBackTitle: 'Atras' // aplica para ios, modifica lo anterior
        })
        return () => { }
    }, [])

    return (
        <View style={navigationTheme.globalMargin}>
            <Button title="Ir pagina 3" onPress={()=> navigation.navigate('Pagina3Screen')}/>
            <Tarea2/>
            <Text style={navigationTheme.title}>Pgina2Screens</Text>
        </View>
    )
}
