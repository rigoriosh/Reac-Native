import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, StyleProp, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDebounceValue } from '../hooks/useDebounceValue';

interface Props{
    style?: StyleProp<ViewStyle>,
    onDebounce:(value: string) => void
}

export const SearchInput = ({style, onDebounce}:Props) => {

    const [textValue, setTextValue] = useState('');
    const debouncedValue = useDebounceValue(textValue);

    useEffect(() => {
        onDebounce(debouncedValue);
        return () => {}
    }, [debouncedValue])

    return (
        <View style={{...styles.container, ...style as any}}>
            {/* <Text>SearchInput</Text> */}
            <View style={styles.textBackground}>
                <TextInput placeholder="Buscar pokémon" style={styles.textInput} autoCapitalize="none" autoCorrect={false} value={textValue} onChangeText={setTextValue}/>
                <Icon name="search-outline" color="black" size={30}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        // backgroundColor:'#F3F1F3',

        
    },
    textBackground:{
        backgroundColor:'#F3F1F3',
        height:40,
        borderRadius:50,
        paddingHorizontal:20,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',

        // shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 5,
    },
    textInput:{
        flex:1,
        width:'100%',
        fontSize:18,
        color:'black',
        height:50,
        // backgroundColor:'rgba(0,0,0,0.1)'
    }
})