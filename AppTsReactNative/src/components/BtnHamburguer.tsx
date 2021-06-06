import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';

interface Propiedades extends DrawerScreenProps<any, any>{}

export const BtnHamburguer = ({navigation}:any) => {
    return (
        <TouchableOpacity style={{backgroundColor:'red', borderRadius:100, paddingVertical:10, paddingHorizontal:10, marginLeft:5}}
            onPress={()=>{navigation.toggleDrawer()}}>
            <Text style={{color: 'white', fontWeight:'bold'}}>Menu</Text>
        </TouchableOpacity>
    )
}
