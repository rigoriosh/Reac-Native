import React, { useState } from 'react'
import { View, Text } from 'react-native';
import { stylesCalculadora } from '../../theme/calculadoraTheme';
import { FAB } from '../../components/FAB';
import { BotnCalc } from '../../components/BotnCalc';

export const CalculadoraScreen = () => {
    const [contador, setContador] = useState(0);
    return (
        <View style={stylesCalculadora.container}>
            <Text style={stylesCalculadora.resultado2}>1,500.00</Text>
            <Text style={stylesCalculadora.resultado}>1,500.00</Text>
            {/* Fila de botones */}
            <View style={stylesCalculadora.fila}>
                <BotnCalc texto="C"   backgroundColor='#9B9B9B' />
                <BotnCalc texto="+/-" backgroundColor='#9B9B9B' />
                <BotnCalc texto="del" backgroundColor='#9B9B9B' />
                <BotnCalc texto="/"   backgroundColor='#FF9127' />
            </View>
            {/* Fila de botones */}
            <View style={stylesCalculadora.fila}>
                <BotnCalc texto="7"   />
                <BotnCalc texto="8" />
                <BotnCalc texto="9" />
                <BotnCalc texto="X"   backgroundColor='#FF9127' />
            </View>
            {/* Fila de botones */}
            <View style={stylesCalculadora.fila}>
                <BotnCalc texto="4"   />
                <BotnCalc texto="5" />
                <BotnCalc texto="6" />
                <BotnCalc texto="-"   backgroundColor='#FF9127' />
            </View>
            {/* Fila de botones */}
            <View style={stylesCalculadora.fila}>
                <BotnCalc texto="1"   />
                <BotnCalc texto="2" />
                <BotnCalc texto="3" />
                <BotnCalc texto="+"   backgroundColor='#FF9127' />
            </View>
            {/* Fila de botones */}
            <View style={stylesCalculadora.fila}>
                <BotnCalc texto="0" ancho  />                
                <BotnCalc texto="." />
                <BotnCalc texto="="   backgroundColor='#FF9127' />
            </View>
            
            
        </View>
    )
}



/* colors
    #2D2D2D
    #FF9127
*/