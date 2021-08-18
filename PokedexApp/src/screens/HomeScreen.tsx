import React from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { FadeInImage } from '../components/FadeInImage';
import { PokemonCard } from '../components/PokemonCard';


export const HomeScreen = ({ navigation }:any) => {

    const {top} = useSafeAreaInsets();

    const {isLoading, simplePokemonList, loadPokemons} = usePokemonPaginated();

    return (
        <View >
            <Image source={require('../assets/pokebola.png')} style={styles.pokeBolaBG}/>
            
            {/* <Text>
                <Icon name="star-outline" size={30} color="#4F8EF7" />
            </Text> */}
            <View style={{...styles.globalMargin, alignItems:'center'}}>
                <FlatList
                    data={simplePokemonList}
                    keyExtractor={(item, index)=>item.id}
                    numColumns={2}

                    // Header
                    ListHeaderComponent={(
                        <Text style={{...styles.tittle, ...styles.globalMargin, top: top + 10}}>Pokedex</Text>
                    )}

                    renderItem={({item})=>(
                        <PokemonCard pokemon={item} navigation={navigation}/>
                    )}
                    
                    // infinite scroll
                    onEndReached={loadPokemons}
                    onEndReachedThreshold={0.4}

                    ListFooterComponent={( <ActivityIndicator style={{height:200}} color="#4F8EF7" size={50}/>)}
                />
            </View>
        </View>
    )
}
