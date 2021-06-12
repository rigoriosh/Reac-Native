import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, ActivityIndicator } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovielDetail } from '../components/MovielDetail';

const heightScreen = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'Notifications'>{}

export const DetailScreen = ({route}: Props) => {

    const movie = route.params;

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const {cast, detalleMovie, isLoading, error} = useMovieDetails(movie.id)

    console.log(error);
    return (
        <ScrollView>            
            <View>
                <View style={{...styles.poster}}>
                        <Image source={{uri}} style={styles.img}/>
                </View>
            </View>
            <View style={styles.containerTitles}>
                <Text style={styles.subTitle}>{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title}</Text>
                {/* <Text style={styles.popularidad}>
                    <Icon name={'star-outline'} size={20} color={'black'} />
                    {' ' + Math.round(movie.popularity)}
                </Text> */}
                {/* <Text style={styles.title}>{movie.overview}</Text> */}
            </View>
            {isLoading && <ActivityIndicator size={40} color={'red'}/>}
            {
                error
                ? <Text>{JSON.stringify(error, null, 2)}</Text>
                :<View>
                    <MovielDetail casting={cast} detalleMovie={detalleMovie}/>
                    <Text>{JSON.stringify(detalleMovie, null, 2)}</Text>
                    <Text>{JSON.stringify(cast, null, 2)}</Text>
                </View>
            }

            
            
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    img:{
        flex: 1,
        borderBottomLeftRadius:18,
        borderBottomRightRadius:18,        
      },
    poster:{
        
        borderRadius: 18,
        width:'100%', 
        height: heightScreen * 0.7, 
        backgroundColor: 'red', 
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 10,
    },
    containerTitles:{
        marginHorizontal:20,
        marginVertical:5
    },
    title:{ fontSize: 20, fontWeight: 'bold' },
    subTitle:{ fontSize: 16, opacity: 0.8 },
    popularidad:{fontSize:16}
})