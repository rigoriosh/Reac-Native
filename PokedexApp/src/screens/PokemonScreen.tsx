import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../Navigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {};

export const PokemonScreen = ({navigation, route}: any) => {

    const {top} = useSafeAreaInsets();
    const {pokemon, color} = route.params;
    const {id, picture, name, } = pokemon;
    return (
        <View>
            <View style={{backgroundColor:color, ...styles.headerCointainer}}>
                {/* back button */}
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={{...styles.backBtn, top:top +10}}
                    onPress={()=> navigation.pop()}
                >
                    <Icon name="arrow-back-outline" size={35} color="#FFF" />
                </TouchableOpacity>
                {/* Nombre del pokemon */}
                <Text>{pokemon.name}</Text>
            </View>
            <Text>{JSON.stringify(route.params,null,4)}</Text>

        </View>
    )
}


const styles = StyleSheet.create({
    headerCointainer:{
        height:370,
        zIndex:999,
        alignItems:'center',
        borderBottomRightRadius:1000,
        borderBottomLeftRadius:1000
    },
    backBtn:{
        position:'absolute',
        left:20
    }
})