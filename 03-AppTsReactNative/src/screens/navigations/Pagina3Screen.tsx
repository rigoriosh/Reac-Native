import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, Button } from 'react-native';
import { navigationTheme } from '../../theme/navigationTheme';
import { useEffect } from 'react';
import { Tarea3 } from '../diseniosApp/Tarea3';

interface Propiedades extends StackScreenProps<any, any>{}

export const Pagina3Screen = ({navigation}: Propiedades) => {

    useEffect(() => {
        navigation.setOptions({
            title:'', // le quita el titulo que aparece x defecto al lado de la flecha de regresar
            headerBackTitle: 'Atras' // aplica para ios, modifica lo anterior
        })
        return () => { }
    }, [])
    
    return (
        <View style={navigationTheme.globalMargin}>
            <Text style={navigationTheme.title}>Pgina3Screens</Text>
            <Button title="Regresar" onPress={()=> navigation.pop()}/>
            <Button title="Ir pagina 1" onPress={()=> navigation.popToTop()}/>
            <Tarea3/>
        </View>
    )
}
