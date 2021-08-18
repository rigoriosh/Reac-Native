import React, { useContext } from 'react'
// import { useTheme } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/theme/ThemeContext';

export const ChangeThemeScreen = () => {
    // const {colors} = useTheme();
    const {setDarkTheme, setLightTheme, theme} = useContext(ThemeContext);
    const {currentTheme} = theme;

    const changeTheme = () => {
        if (currentTheme === 'dark') {
            setLightTheme()
        } else {
            setDarkTheme()
        }
    }
    
    return (
        <View>
            <HeaderTitle title="Theme"/>
            <TouchableOpacity 
                onPress={changeTheme}
                activeOpacity={0.5}
                style={{backgroundColor:theme.colors.border, borderRadius:20, justifyContent:'center', width:150, height:50}}>
                <Text style={{color:theme.colors.text, textAlign:'center', fontSize:20, fontWeight:'bold'}}>{currentTheme === 'dark' ? 'light' : 'dark'}</Text>
            </TouchableOpacity>
        </View>
    )
}
