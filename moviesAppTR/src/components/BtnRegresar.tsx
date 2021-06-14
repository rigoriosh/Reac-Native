import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props{
    accion: () => void
}

export const BtnRegresar = ({accion}:Props) => {
    return (
        <View style={styles.backButton}>
            <TouchableOpacity onPress={accion}>
                <Icon name="arrow-back-outline" size={60} color="white"/>
            </TouchableOpacity> 
        </View>
    )
}


const styles = StyleSheet.create({
    
    backButton:{
        
        position: 'absolute', zIndex: 999, elevation: 10, top: 10, left:5
    }
})