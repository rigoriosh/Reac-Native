import React from 'react'
import { Cast } from '../interfaces/movieInterface';
import { View, Text, FlatList } from 'react-native';
import { Cast_Item } from './Cast_Item';

interface Props{
    casting: Cast[]
}

export const Casting = ({casting}: Props) => {
    return (
        <View style={{marginVertical:5, height:150}}>
            <Text style={{fontSize:20, fontWeight:'bold', paddingHorizontal:5}}>Actores</Text>

            <FlatList data={casting} renderItem={({item}) => <Cast_Item actor={item}/>} keyExtractor={(item) => item.id.toString()} horizontal={true}
                style={{}}/>
            
            {/* <Text >{JSON.stringify(casting[0]?.name, null, 2)}</Text> */}
        </View>
    )
}
