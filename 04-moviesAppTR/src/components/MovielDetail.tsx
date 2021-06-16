import React from 'react'
import { View, Text } from 'react-native';
import { MovieFull, Cast} from '../interfaces/movieInterface';
import { HorizontalSlider } from './HorizontalSlider';
import Icon from 'react-native-vector-icons/Ionicons';

import { Casting } from './Casting';

interface Props{
    detalleMovie?: MovieFull;
    casting: Cast[];
}

export const MovielDetail = ({detalleMovie, casting}:Props) => {
    return (
        <>
            {/* detalles */}
            <View style={{flexDirection:'row'}}>
                <Icon name={'star-outline'} size={16} color={'black'} style={{marginLeft:10}}/>
                <Text style={{marginLeft:5}}>{detalleMovie?.vote_average}</Text>
                <Text style={{marginLeft:10}}>- {detalleMovie?.genres.map(g => g.name).join(', ')}</Text>
            </View>
            {/* historia */}
            <Text style={{fontSize:20, fontWeight:'bold', paddingHorizontal:5}}>Historia:</Text>
            <Text style={{fontSize:15, textAlign:'justify', paddingHorizontal:5}}>{detalleMovie?.overview}</Text>

            {/* Presupuesto */}
            <Text style={{fontSize:20, fontWeight:'bold', paddingHorizontal:5}}>Presupuesto:</Text>
            <Text style={{fontSize:15, textAlign:'justify', paddingHorizontal:5}}>{'$ ' + detalleMovie?.budget}</Text>

            {/* Casting */}
            <Casting casting={casting}/>
            
        </>
    )
}
