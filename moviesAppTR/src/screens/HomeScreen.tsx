import React from 'react'
//import Carousel from 'react-native-snap-carousel';
import { View/*, Text  */, Text, Dimensions, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '../hooks/useMovies';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { CaruselComp } from '../components/CaruselComp';
import { colores } from '../styles/index';

const {width: width_Wind} = Dimensions.get('window')

export const HomeScreen = () => {

    const {top} = useSafeAreaInsets();
    
    const {nowPlaying, popular, topRated, upComing, isLoading, responseError} = useMovies();
    //const {pelicualasEnCine, isLoading} = useMovies({path:'/popular'});


    return (
        <ScrollView>
            <View style={{marginTop:top}}>
            {
                isLoading
                    ? 
                        <View>
                            <ActivityIndicator color="red" size={100}/>
                            <Text>
                                {responseError && JSON.stringify(responseError.message, null, 3)}
                            </Text>
                        </View>
                    : 
                        <View style={{backgroundColor: colores.color1}}>
                            <Text style={estilos.titleThiago}>Movie App by Thiago Rios</Text>
                            <CaruselComp movies={nowPlaying} sliderWidth={width_Wind}/>                            
                            
                            <HorizontalSlider movies={popular} title={'Populares'}/>
                            
                            <HorizontalSlider movies={topRated} title={'topRated'}/>
                            
                            <HorizontalSlider movies={upComing} title={'upComing'}/>
                        </View>
                }
            
            </View>

            {/* <Text style={{color: 'blue'}}>{'movie:' + JSON.stringify(pelicualasEnCine[4], null, 3)}</Text> */}
        </ScrollView>
    )
}


const estilos = StyleSheet.create({
    titleThiago:{
        fontSize: 20, 
        alignSelf: 'center', 
        fontWeight:'bold', 
        //backgroundColor: 'green', 
        borderRadius: 20, 
        paddingHorizontal:50,
        color: 'white'
    }
})