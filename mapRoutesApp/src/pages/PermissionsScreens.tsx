import React, { useContext } from 'react'
import { View, Text, StyleSheet,} from 'react-native';
import { BlackButton } from '../components/BlackButton';
import { PermissionsContext } from '../context/PermissionsContext';

export const PermissionsScreens = () => {
    
    const {permissions, askLocationsPermission} = useContext(PermissionsContext);

    return (
        <View style={styles.container}>
            <Text style={{marginBottom:50, fontSize:20, textAlign:'center', paddingHorizontal:10}}>Es necesario el uso del gps para utilizar esta aplicación</Text>

            <BlackButton title="Permiso" onPress={askLocationsPermission}/>

            <Text style={{marginTop:50}}>
                El estado actual del GPS es {`${permissions.locationStatus}\n`}
                {/* {JSON.stringify(permissions, null, 5)}; */}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})
