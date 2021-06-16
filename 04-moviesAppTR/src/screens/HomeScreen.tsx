import React, { useContext } from 'react'
//import Carousel from 'react-native-snap-carousel';
import { View/*, Text  */, Text, Dimensions, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';
//import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '../hooks/useMovies';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { CaruselComp } from '../components/CaruselComp';
//import { colores } from '../styles/index';
import { GradientBackGround } from '../components/GradientBackGround';
import { GradientContext } from '../context/GradientContext';
import { constantesApp } from '../helpers/constantes';
import { getPosterColors } from '../helpers/getPosterColors';
import { useEffect } from 'react';
import { colores } from '../styles/index';

const {width: width_Wind} = Dimensions.get('window')

export const HomeScreen = () => {

    const {top} = useSafeAreaInsets();
    
    const {nowPlaying, popular, topRated, upComing, isLoading, responseError, setPosterActual} = useMovies();
    const {setMainColors} = useContext(GradientContext);
    //const {pelicualasEnCine, isLoading} = useMovies({path:'/popular'});

    /* const getColors = async(index: number) => {
        console.log('posterActual: ', nowPlaying[index].original_title);
        const URI = `${constantesApp.uriBase}${nowPlaying[index].poster_path}`;
        const config = {};
        const [primary=colores.color1, secundary=colores.color2] = await getPosterColors(URI);
        //console.log(primary, secundary);
        setMainColors({primary, secundary})
        //setColorsPosterActual({primary, secundary});
    }

    useEffect(() => {
        if(nowPlaying.length > 0) getColors(0);
        return () => {}
    }, []) */


    return (
        <GradientBackGround>
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
                            <View style={{marginLeft:0/* backgroundColor: colores.color1 */}}>
                                <Text style={estilos.titleThiago}>Movie App by R1G0R10SH</Text>

                                <CaruselComp movies={nowPlaying} sliderWidth={width_Wind} posterActual={setPosterActual}/>                            
                                
                                <HorizontalSlider movies={popular} title={'Populares'}/>
                                
                                <HorizontalSlider movies={topRated} title={'TopRated'}/>
                                
                                <HorizontalSlider movies={upComing} title={'UpComing'}/>
                            </View>
                    }
                
                </View>

                {/* <Text style={{color: 'blue'}}>{'movie:' + JSON.stringify(pelicualasEnCine[4], null, 3)}</Text> */}
            </ScrollView>
        </GradientBackGround>
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