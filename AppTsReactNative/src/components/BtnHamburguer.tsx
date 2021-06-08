import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity, Text } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { colores } from '../styles';

interface Propiedades extends DrawerScreenProps<any, any>{}

export const BtnHamburguer = ({navigation}:any) => {
    return (
        <TouchableOpacity style={{backgroundColor:'red', borderRadius:100, paddingVertical:10, paddingHorizontal:10, marginLeft:5}}
            onPress={()=>{navigation.toggleDrawer()}}>
            {/* <Text style={{color: 'white', fontWeight:'bold'}}>Menu</Text> */}
            <Icon name={'menu-outline'} size={30} color={'white'} style={{fontWeight:'bold', padding:0}}/>
        </TouchableOpacity>
    )
}
