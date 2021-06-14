import React from 'react'
import { View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Movie } from '../interfaces/movieInterface';
import { MoviePoster } from './MoviePoster';

interface Props{
    movies: Movie[];
    sliderWidth: number;
    posterActual: React.Dispatch<React.SetStateAction<number>>
}

export const CaruselComp = ({movies, sliderWidth, posterActual}: Props) => {
    return (
        <View style={{ height: 440}}>
            <Carousel data={movies || []} renderItem={({item})=>
                <MoviePoster movie={item} />}
                sliderWidth={sliderWidth} itemWidth={300} inactiveSlideOpacity={0.8}
                onSnapToItem={(index)=>posterActual(index)}
            />
        </View>
    )
}
