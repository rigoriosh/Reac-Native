import React from 'react'
import { View, Text, FlatList } from 'react-native';

import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { data } from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';

export const HomeScreen = () => {

    
    

    const renderListheader = () => {
        return <HeaderTitle title={'Home Screem'}/>
    }

    return (
        <View style={{flex:1, ...styles.globalMargin}}>            
            <FlatList 
                ListHeaderComponent={()=>renderListheader()}
                ItemSeparatorComponent={()=><ItemSeparator/>}
                data={data} 
                renderItem= {({item, index})=><FlatListMenuItem menuItem={item}/>} keyExtractor={(item)=>item.name}
            />
        </View>
    )
}
