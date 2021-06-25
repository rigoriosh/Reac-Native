import React from 'react'
import { View, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MenuItem } from '../interfaces/interfacesApp';
import { FlatListMenuItem } from '../components/FlatListMenuItem';



const data:MenuItem[] = [
    {
        name: 'Animation 101',
        icon: 'cube-outline',
        component: 'Animation101Screen'
    },
    {
        name: 'Animation 102',
        icon: 'albums-outline',
        component: 'Animation102Screen'
    }
]
//


export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();

    const renderListheader = () => {
        return (
            <View style={{marginTop: top +20, marginBottom:20}}>
                <Text style={styles.title}>Opciones de Menu</Text>
            </View>
        )
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
