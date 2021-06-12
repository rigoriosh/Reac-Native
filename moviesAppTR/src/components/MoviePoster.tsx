import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { useNavigation } from '@react-navigation/native';

interface Props {
    movie: Movie;    
    altura?: number;
    ancho?: number;
}

export const MoviePoster = ({movie, altura=420, ancho=300}:Props) => {


    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const navigation = useNavigation();
    return (
        <TouchableOpacity activeOpacity={0.8}
         onPress={()=>navigation.navigate('Notifications', movie)} style={{flex:1, paddingVertical:5/* justifyContent:'center', */ }}>
            {/* <Text>MoviePoster</Text> */}
            {
               <View style={{...styles.poster, height:altura, width: ancho}}>
                    <Image source={{uri}} style={styles.img}/>
               </View>
            }
            
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    img:{
        flex: 1,
        borderRadius: 20,
      },
    poster:{
        width:300, 
        height: 420, 
        //backgroundColor: 'red', 
        borderRadius: 20,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 10,
    }
})