import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react'
import { Text, TouchableOpacity, View, StyleSheet, Dimensions, Image } from 'react-native';
import ImageColors from 'react-native-image-colors'
import { SimplePokemon } from '../interfaces/pokemonInteface';
import { FadeInImage } from './FadeInImage';

const {width:windowsWidth} = Dimensions.get('window');

interface Props{
    pokemon: SimplePokemon,
    navigation: any
}
export const PokemonCard = ({pokemon, navigation}:Props ) => {
    const [bgColor, setBgColor] = useState ('gray');
    const isMounted = useRef(true);

    const getColorImg = async() => {
        const colors = await ImageColors.getColors(pokemon.picture, {
            fallback: '#228B22',
            cache: false,
            key: 'unique_key',
        });
        let background = 'gray';

        if (colors.platform === 'android') {
            background = colors.dominant? colors.dominant : 'gray';
        } else {
            background = colors.background;
        }
        setBgColor(background);
    }

    useEffect(() => {
        // IOS: background
        // Android: dominant  
        if (!isMounted) return;
        getColorImg();
        return () => { isMounted.current = false }
    }, [])

    const goDetailPokemon = (poke: SimplePokemon)=> {
        navigation.navigate('PokemonScreen', {pokemon:pokemon, color:bgColor});
    }
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={()=>goDetailPokemon(pokemon)}>
            <View style={{...styles.cardContainer, width:windowsWidth * 0.4, backgroundColor: bgColor}}>
                {/* Nombre del pokemon */}
                <View><Text style={{...styles.name}}>{pokemon.name}{'\n#'+pokemon.id}</Text></View>
                <View style={styles.pokebolaCointarner}>
                    <Image source={require('../assets/pokebola-blanca.png')} style={styles.pokemonBola}/>
                </View>
                <FadeInImage uri={pokemon.picture} style={{width:100, height:100, position:'absolute', right:-10, bottom:-10}} colorActivity='white'/>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer:{
        marginHorizontal:15,
        // backgroundColor:'grey',
        height:120,
        width:150,
        marginVertical:10,
        borderRadius: 10,
        shadowColor: "#000",

        // shadow
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    name:{
        color:'black',
        fontSize:20,
        fontWeight:'bold',
        top:20,
        left:10
    },
    pokemonBola:{
        width:120,
        height:120,
        position:'absolute',
        right:-25,
        bottom:-25,
    },
    pokebolaCointarner:{
        width:100, height:100,
        position:'absolute',
        bottom:0,
        right:0,
        overflow:'hidden',
        opacity:0.5
    }
})