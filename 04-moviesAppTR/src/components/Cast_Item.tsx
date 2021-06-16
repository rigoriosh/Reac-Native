import React from 'react'
import { Cast } from '../interfaces/movieInterface'
import { View, Text, Image, StyleSheet } from 'react-native';
import { colores } from '../styles/index';

interface Props {
    actor: Cast
}

export const Cast_Item = ({actor}: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500${actor?.profile_path}`;
    return (
        <View style={{...estilos.container, ...estilos.sombra}}>
            <View style={{...estilos.containerImg/* , ...estilos.sombra */}}>
                {
                    actor?.profile_path &&
                    <Image style={estilos.containerImg}
                        source={{uri}}
                        
                    />
                }
            </View>
            <View style={{alignSelf:'center', alignItems:'center', paddingHorizontal:5}}>
                <Text style={{fontSize:18, fontWeight:'bold'}}>
                    {actor?.name}
                </Text>

                <Text style={{fontSize:16, opacity:0.7}}>
                    {actor?.character}
                </Text>
            </View>
        </View>
    )
}


const estilos = StyleSheet.create({
    container:{ 
        //width:210, 
        height: 100, 
        marginVertical:5, 
        flexDirection:'row', 
        backgroundColor: colores.color1, /* opacity: 0.2, */
        borderRadius: 20,
        marginHorizontal:5,
        //paddingRight:10
    },
    containerImg:{
        width:110, 
        height:100,
        borderRadius:20,
        
        //backgroundColor: 'yellow', opacity: 0.2,
    },
    sombra:{
        shadowColor: "#000",
        
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 10,
    }




})