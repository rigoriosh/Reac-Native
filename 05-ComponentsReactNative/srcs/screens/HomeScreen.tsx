import React from 'react'
import { View, Text, FlatList } from 'react-native';

import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { data } from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';

export const HomeScreen = () => {

    
    

    const renderListheader = () => {
        return <HeaderTitle title={'Opciones de Menu'}/>
    }

    const itemSepartor = () => {
        return (
            <View style={{borderBottomWidth:1, opacity:0.4, marginVertical:5}}></View>
        )
    }
    
    return (
        <View style={{flex:1, ...styles.globalMargin}}>            
            <FlatList ListHeaderComponent={()=>renderListheader()} ItemSeparatorComponent={()=>itemSepartor()}
             data={data} renderItem= {({item, index})=><FlatListMenuItem menuItem={item}/>} keyExtractor={(item)=>item.name}/>
        </View>
    )
}
