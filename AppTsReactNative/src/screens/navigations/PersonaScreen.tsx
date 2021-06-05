import React from 'react'
import { View, Text } from 'react-native';
import { navigationTheme } from '../../theme/navigationTheme';
import { useEffect } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootParams } from '../../routes/StackNavigator';

/* interface RouterParams {
    id: number,
    nombre: string
} */


interface Propiedades extends StackScreenProps<RootParams, 'PersonaScreen'>{
    params: {}
}

//export const PersonaScreen = ({navigation, argumentos}: Propiedades) => {
export const PersonaScreen = (props: Propiedades) => {
    //console.log(props);
    const {navigation, route} = props;
    //const params = route.params as RouterParams;
    const params = route.params;
    //console.log(JSON.stringify(props, null, 3));

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre, // le quita el titulo que aparece x defecto al lado de la flecha de regresar
            headerBackTitle: 'Atras' // aplica para ios, modifica lo anterior
        })
        return () => { }
    }, [])

    return (
        <View style={navigationTheme.globalMargin}>
            <Text style={navigationTheme.title1}>
                props={
                    JSON.stringify(props, null, 2)
                }
            </Text>
        </View>
    )
}
