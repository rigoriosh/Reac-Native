import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/theme/ThemeContext';
import { styles } from '../theme/appTheme';

interface Props{
    title: String;
}
export const HeaderTitle = ({title}: Props) => {
    const { theme} = useContext(ThemeContext);
    const { top } = useSafeAreaInsets();
    return (
        <View style={{marginTop: top +20, marginBottom:20, marginLeft:20}}>
            <Text style={{...styles.title, color:theme.colors.text}}>{title}</Text>
        </View>
    )
}
