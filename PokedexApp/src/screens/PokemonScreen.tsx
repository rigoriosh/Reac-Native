import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../Navigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetail } from '../components/PokemonDetail';

// interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {};

export const PokemonScreen = ({navigation, route}: any) => {

    const {top} = useSafeAreaInsets();
    const {pokemon, color} = route.params;
    const {id, picture, name, } = pokemon;
    const { isLoading, pokemonFull } = usePokemon(id);
    console.log(pokemonFull);

    return (
        <View style={{flex:1, backgroundColor:'black'}}>
            <View style={{backgroundColor:color, ...styles.headerCointainer}}>
                {/* back button */}
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={{...styles.backBtn, top:top +10}}
                    onPress={()=> navigation.pop()}
                >
                    <Icon name="arrow-back-outline" size={35} color="#555" />
                </TouchableOpacity>
                {/* Nombre del pokemon */}
                <Text style={{...styles.pokemonName, top:top + 40, color:'#000'}}>{name + '\n'} #{ id }</Text>
                {/* Pokebola blanca */}
                <Image source={require('../assets/pokebola-blanca.png')} style={styles.pokebola}/>
                <FadeInImage uri={picture} style={styles.pokemosImg}/>
                {/* detals and loading */}
            </View>
            {
                isLoading ?
                    <View style={styles.loading}>
                        <ActivityIndicator color={color} size={50} /* style={{top:top + 80}} *//>
                        {/* <Text>{JSON.stringify(pokemonFull.abilities,null,4)}</Text> */}
                    </View>
                : <PokemonDetail pokemonFull={pokemonFull} color={color}/>

            }
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
    },
    pokemonName:{
        color:'white',
        fontSize: 40,
        alignSelf:'flex-start',
        left:20
    },
    pokebola:{
        width:250, height:250,
        bottom:-20,
        opacity:0.7
    },
    pokemosImg:{
        width:250, height:250,
        position:'absolute',
        bottom:-30
    },
    loading:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'red'
    }
})