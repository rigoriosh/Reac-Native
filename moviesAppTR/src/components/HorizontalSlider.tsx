import React from 'react'
import { Movie } from '../interfaces/movieInterface'
import { View, Text, FlatList } from 'react-native';
import { MoviePoster } from './MoviePoster';

interface Props {
    title?: string;
    movies: Movie[]
}

export const HorizontalSlider = ({title, movies}: Props) => {
    return (
        <View style={{/* backgroundColor:'red',  */height: title ? 260 : 220}}>
            <Text style={{color: 'blue', fontSize:30}}>{title}</Text>
            <FlatList data={movies}  renderItem={({item})=>(
                <MoviePoster movie={item}  altura={180} ancho={120}/>
                )} keyExtractor={(item)=> item.id.toString()} horizontal={true} showsHorizontalScrollIndicator={true} ItemSeparatorComponent={()=><Text>   </Text>}/>
        </View>
    )
}
