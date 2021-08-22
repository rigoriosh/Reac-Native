import React, { useEffect, useState } from 'react'
import { View, Text, Platform, ActivityIndicator, FlatList, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loading } from '../components/Loading';
import { PokemonCard } from '../components/PokemonCard';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { styles } from '../theme/appTheme';
import { SimplePokemon } from '../interfaces/pokemonInteface';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = ({ navigation }:any) => {
    const {top} = useSafeAreaInsets();
    const  {isFetching, simplePokemonList} = usePokemonSearch();
    const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);
    const [term, setTerm] = useState('');

    useEffect(() => {
        
        if(term.length < 1) return setPokemonFiltered([]);

        if (isNaN(Number(term))) {
            setPokemonFiltered(
                simplePokemonList.filter(poke => poke.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()))
            )
        } else {
            const pokeById = simplePokemonList.find( (poke) => poke.id === term )
            setPokemonFiltered( pokeById ? [pokeById] : [] )
        }


        return () => {}
    }, [term])

    if (isFetching) return (<Loading/>)

    return (
        <View style={{backgroundColor:'#F3F1F3', flex:1, /* paddingTop:(Platform.OS === 'ios') ? top : top + 10, */ paddingHorizontal:10, paddingBottom:80}}>
            <SearchInput onDebounce={setTerm}
                style={{backgroundColor: "transparent",position:'absolute', zIndex:999, width:screenWidth, paddingTop:(Platform.OS === 'ios') ? top : top + 20, paddingHorizontal:20}}/>
            {/* <View style={{marginTop:70}}> */}
                <FlatList
                        data={pokemonFiltered}
                        keyExtractor={(item, index)=>item.id}
                        numColumns={2}

                        // Header
                        ListHeaderComponent={(
                            <Text style={{...styles.tittle, ...styles.globalMargin, marginTop: top + 60}}>{term}</Text>
                        )}

                        renderItem={({item})=>(
                            <PokemonCard pokemon={item} navigation={navigation}/>
                        )}
                        
                        // infinite scroll
                        // onEndReached={loadPokemons}
                        // onEndReachedThreshold={0.4}

                        // ListFooterComponent={( <ActivityIndicator style={{height:200}} color="#4F8EF7" size={50}/>)}
                    />
            {/* </View> */}
        </View>
    )
}
