import React, { useState } from 'react'
import { FlatList, Text, View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { FadeInImage } from '../components/FadeInImage';
import { HeaderTitle } from '../components/HeaderTitle';

export const InfinitiScrollScreen = () => {
    const [numbers, setNumbers] = useState([0,1,2,3,4,5,6,7])
    const renderItem = (item:number) => {
        return (
            <FadeInImage uri={`https://picsum.photos/id/${item}/500/400`}/>

            // <Image
            //     source={{
            //         uri:`https://picsum.photos/id/${item}/500/400`
            //     }}
            //     style={{width:'100%', height:400}}
            // />

            // <Text style={styles.textItem}>
            //     { item }
            // </Text>
        )
    }
    
    const loadMore = () => {
        const newArray: number[] = [...numbers];
        for (let i = numbers.length; i < (numbers.length + 5); i++) {
            newArray[i] = i;
        }
        setTimeout(() => {
            setNumbers(newArray);
        }, 1000);
    }
    return (
        <View style={{flex:1,/* backgroundColor:'red' */}}>
            
            <FlatList
                ListHeaderComponent={<HeaderTitle title="InfinitiScrollScreen"/>}
                data={numbers}
                keyExtractor={(item, index)=> item.toString()+ index}
                renderItem={({item})=>renderItem(item)}

                onEndReached={loadMore}
                onEndReachedThreshold={0.5}

                ListFooterComponent={()=>(
                    <View style={{ height:150, width:'100%', justifyContent:'center',alignItems:'center' }}>
                        <ActivityIndicator size={30} color="#5856D6"/>
                    </View>
                )}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    textItem:{
        backgroundColor:'green',
        height:150
    }
})