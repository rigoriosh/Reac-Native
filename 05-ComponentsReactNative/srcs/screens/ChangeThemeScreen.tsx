import React, { useContext } from 'react'
import { useTheme } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/theme/ThemeContext';

export const ChangeThemeScreen = () => {
    const {colors} = useTheme();
    const {setDarkTheme} = useContext(ThemeContext);
    return (
        <View>
            <HeaderTitle title="Theme"/>
            <TouchableOpacity 
                onPress={setDarkTheme}
                activeOpacity={0.5}
                style={{backgroundColor:colors.primary, borderRadius:20, justifyContent:'center', width:150, height:50}}>
                <Text style={{color:colors.text, textAlign:'center', fontSize:20, fontWeight:'bold'}}>Light</Text>
            </TouchableOpacity>
        </View>
    )
}
