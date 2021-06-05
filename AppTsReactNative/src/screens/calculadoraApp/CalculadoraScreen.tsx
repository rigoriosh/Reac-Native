import React from 'react'
import { View, Text, Button } from 'react-native';
import { stylesCalculadora } from '../../theme/calculadoraTheme';
import { BotnCalc } from '../../components/BotnCalc';
import { useCalculadora } from '../../hooks/useCalculadora';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { useEffect } from 'react';

interface Propiedades extends DrawerScreenProps<any, any>{}

enum Operadores { sumar, restar, dividir, multiplicar }

export const CalculadoraScreen = ({navigation}: Propiedades) => {
    
    const {resultadoAnterior, resultado, reset, positivoNegativo, del, caracterEspecialOprimido, armarExpresion} = useCalculadora();


    useEffect(() => {
        navigation.setOptions({
            title:'Bienvenidos práctica navigation', // le quita el titulo que aparece x defecto al lado de la flecha de regresar
            //headerBackTitle: 'Atras', // aplica para ios, modifica lo anterior
            headerLeft: () => <Button title='Menu' onPress={()=>{navigation.toggleDrawer()}}/>
        })
        return () => { }
    }, [])
    
    return (
        <View style={stylesCalculadora.container}>
            <Text style={stylesCalculadora.resultado2}>{resultadoAnterior}</Text>
            <Text numberOfLines={1} adjustsFontSizeToFit style={stylesCalculadora.resultado}>{resultado}</Text>
            {/* Fila de botones */}
            <View style={stylesCalculadora.fila}>
                <BotnCalc texto="C"   backgroundColor='#9B9B9B' accion={reset}/>
                <BotnCalc texto="+/-" backgroundColor='#9B9B9B' accion={positivoNegativo}/>
                <BotnCalc texto="del" backgroundColor='#9B9B9B' accion={del}/>
                <BotnCalc texto="/"   backgroundColor='#FF9127' accion={caracterEspecialOprimido}/>
            </View>
            {/* Fila de botones */}
            <View style={stylesCalculadora.fila}>
                <BotnCalc texto="7" accion={armarExpresion}   />
                <BotnCalc texto="8" accion={armarExpresion} />
                <BotnCalc texto="9" accion={armarExpresion} />
                <BotnCalc texto="X" accion={caracterEspecialOprimido}   backgroundColor='#FF9127' />
            </View>
            {/* Fila de botones */}
            <View style={stylesCalculadora.fila}>
                <BotnCalc texto="4" accion={armarExpresion}   />
                <BotnCalc texto="5" accion={armarExpresion} />
                <BotnCalc texto="6" accion={armarExpresion} />
                <BotnCalc texto="-" backgroundColor='#FF9127' accion={caracterEspecialOprimido}/>
            </View>
            {/* Fila de botones */}
            <View style={stylesCalculadora.fila}>
                <BotnCalc texto="1" accion={armarExpresion}   />
                <BotnCalc texto="2" accion={armarExpresion} />
                <BotnCalc texto="3" accion={armarExpresion} />
                <BotnCalc texto="+" backgroundColor='#FF9127' accion={caracterEspecialOprimido}/>
            </View>
            {/* Fila de botones */}
            <View style={stylesCalculadora.fila}>
                <BotnCalc texto="0" accion={armarExpresion} ancho  />                
                <BotnCalc texto="." accion={armarExpresion} />
                <BotnCalc texto="=" backgroundColor='#FF9127' accion={caracterEspecialOprimido}/>
            </View>
            
            
        </View>
    )
}



/* colors
    #2D2D2D
    #FF9127
*/