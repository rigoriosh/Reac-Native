import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/interfacesApp';
import { useNavigation, useTheme } from '@react-navigation/native';

interface Props{
    menuItem: MenuItem
}

export const FlatListMenuItem = ({menuItem}:Props) => {
    const {colors}=useTheme();
    const navigation = useNavigation();
    return (
        <TouchableOpacity activeOpacity={0.1} onPress={()=>navigation.navigate(menuItem.component)}>
            <View style={styles.container}>
                <Icon name={menuItem.icon} size={20} color="#5856D6"/>
                <Text style={{...styles.itemText, color:colors.text}}>{menuItem.name}</Text>
                <View style={{flex:1}}/>
                <Icon style={{justifyContent:'flex-end'}} name='chevron-forward-outline' size={20} color="#5856D6"/>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',   
    },
    itemText:{
        marginLeft:10,
        fontSize:20
    }
})