import React from 'react'
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableIcon } from '../../components/TouchableIcon';
import { indexCss, colores } from '../../styles/index';
import { useState } from 'react';
import { Tarea4 } from '../diseniosApp/Tarea4';


export const ChatScreen = () => {
    //const myIcon = <Icon name="rocket" size={30} color="#900" />;
    const [btnOp, setBtnOp] = useState('');
    const btnOprimido=(btn:string)=>{
        setBtnOp(btn)
    }
    return (
        <View style={indexCss.globalMargin}>
            <Text style={indexCss.title}>ChatScreen</Text>
            <Text style={indexCss.title2}>
                {/* <Icon name="airplane-outline" size={40} color={colores.color1} /> */}
                Boton oprimido: {btnOp}
            </Text>
            <View style={indexCss.flexDirR}>
                <TouchableIcon accion={btnOprimido} colorIcon={colores.color1} nombreIcon={'airplane-outline'} sizeIcon={50} />
                <TouchableIcon accion={btnOprimido} colorIcon={colores.color1} nombreIcon={'attach-outline'} sizeIcon={50} />
                <TouchableIcon accion={btnOprimido} colorIcon={colores.color1} nombreIcon={'bonfire-outline'} sizeIcon={50} />
                <TouchableIcon accion={btnOprimido} colorIcon={colores.color1} nombreIcon={'calculator-outline'} sizeIcon={50} />
                <TouchableIcon accion={btnOprimido} colorIcon={colores.color1} nombreIcon={'chatbubble-ellipses-outline'} sizeIcon={50} />
                <TouchableIcon accion={btnOprimido} colorIcon={colores.color1} nombreIcon={'images-outline'} sizeIcon={50} />
                <TouchableIcon accion={btnOprimido} colorIcon={colores.color1} nombreIcon={'leaf-outline'} sizeIcon={50} />
            </View>
            <Tarea4/>            
        </View>
    )
}
