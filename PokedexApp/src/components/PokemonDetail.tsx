import React from 'react'
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { PokemonFull } from '../interfaces/pokemonInteface';
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemonFull: PokemonFull;
    color:string
}

export const PokemonDetail = ({pokemonFull, color}:Props) => {

    const {} = pokemonFull;
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{
            ...StyleSheet.absoluteFillObject,
            marginTop:400
        }}>
            <View style={{
                ...styles.container
            }}>
                <Text style={styles.title}>Types</Text>
                {/* types y peso */}
                <View style={{flexDirection:'row'}}>
                    {
                        pokemonFull.types.map(({type})=>(
                            <Text style={{...styles.regularText, marginRight:10}} key={type.name}>
                                {type.name}
                            </Text>
                        ))
                    }
                </View>
                {/* peso */}
                <Text style={styles.title}>Peso</Text>
                <Text style={styles.regularText}>{pokemonFull.weight}Kg</Text>

                {/* sprites */}
                <Text style={styles.title}>Sprites</Text>
                <ScrollView horizontal >
                    <FadeInImage uri={pokemonFull.sprites.front_default} style={styles.basicSprite} />
                    <FadeInImage uri={pokemonFull.sprites.back_default} style={styles.basicSprite} />
                    <FadeInImage uri={pokemonFull.sprites.front_shiny} style={styles.basicSprite} />
                    <FadeInImage uri={pokemonFull.sprites.back_shiny} style={styles.basicSprite} />
                </ScrollView>
                {/* Abilities */}
                <View style={{ }}>
                    <Text style={styles.title}>Base Abilities</Text>
                    <View style={{flexDirection:'row'}}>
                        {
                            pokemonFull.abilities.map(({ability})=>(
                                <Text style={{...styles.regularText, marginRight:10}} key={ability.name}>
                                    {ability.name}
                                </Text>
                            ))
                        }
                    </View>
                </View>
                {/* Moves */}
                <View style={{ }}>
                    <Text style={styles.title}>Moves</Text>
                    <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                        {
                            pokemonFull.moves.map(({move})=>(
                                <Text style={{...styles.regularText, marginRight:10}} key={move.name}>
                                    {move.name}
                                </Text>
                            ))
                        }
                    </View>
                </View>
                {/* stats */}
                <View style={{ }}>
                    <Text style={styles.title}>Stats</Text>
                    <View >
                        {
                            pokemonFull.stats.map(({stat, base_stat} , i)=>(
                                <View key={stat.name + i} style={{flexDirection:'row'}}>
                                    <Text style={{...styles.regularText, marginRight:10, width:'80%'}} >
                                        {stat.name}
                                    </Text>
                                    <Text style={{...styles.regularText, marginRight:10, fontWeight:'bold'}}>
                                        {base_stat}
                                    </Text>
                                </View>
                            ))
                        }
                    </View>

                    {/* FinalSprite */}
                    <View style={{marginBottom:30, alignItems:'center'}}>
                        <FadeInImage uri={pokemonFull.sprites.front_default} style={styles.basicSprite} />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:20
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:20
    },
    regularText:{
        fontSize:19
    },
    basicSprite:{
        width:100, height:100,
    }
})