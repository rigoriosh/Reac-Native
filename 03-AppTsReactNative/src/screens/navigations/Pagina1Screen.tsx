import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { navigationTheme } from '../../theme/navigationTheme';
import { useEffect } from 'react';
import { FAB } from '../../components/FAB';
import { Boton1 } from '../../components/Boton1';
import { indexCss } from '../../styles';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { BtnHamburguer } from '../../components/BtnHamburguer';
import { Tarea } from '../diseniosApp/Tarea';

//interface Propiedades extends StackScreenProps<any, any>{}
interface Propiedades extends DrawerScreenProps<any, any>{}

export const Pagina1Screen = ({navigation}: Propiedades) => {
    //console.log(props);

    useEffect(() => {
        navigation.setOptions({
            title:'Bienvenidos práctica navigation', // le quita el titulo que aparece x defecto al lado de la flecha de regresar
            //headerBackTitle: 'Atras', // aplica para ios, modifica lo anterior
            headerLeft: () => <BtnHamburguer navigation={navigation}/>
        })
        return () => { }
    }, [])

    
    const test = (btnOprimido:string) => {
        console.log(`btn oprimed: ${btnOprimido}`);
        const argumentos = {
            id: (Math.random()*10), nombre: btnOprimido
        }
        navigation.navigate('PersonaScreen', argumentos);
    }

    return (
        <View style={navigationTheme.globalMargin}>
            <Text style={navigationTheme.title}>Pagina1Screen</Text>
            <Button title="Ir pagina 2" onPress={()=> navigation.navigate('Pagina2Screen')}/>

            <Text style={navigationTheme.title1}>Navegando con propiedades</Text>
            <View style={indexCss.flexDirR}>
                <Boton1 colorFondo={'green'} colorText={'white'} titulo={'Thiago'} accionBtn={test} iconName={'color-palette'}/>
                <Boton1 colorFondo={'blue'} colorText={'white'} titulo={'Rigo'} accionBtn={test} iconName={'bicycle'}/>
            </View>
            <Tarea/>
        </View>
    )
}
