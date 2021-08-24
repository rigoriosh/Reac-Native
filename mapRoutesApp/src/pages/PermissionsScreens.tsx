import React, { useContext } from 'react'
import { View, Text, StyleSheet, Button, Platform,  } from 'react-native';
import { PermissionsContext } from '../context/PermissionsContext';

export const PermissionsScreens = () => {
    
    const {permissions, askLocationsPermission} = useContext(PermissionsContext);

    return (
        <View style={styles.container}>
            <Text>PermissionsScreens</Text>

            <Button title="Permiso" onPress={askLocationsPermission}/>

            <Text>
                {JSON.stringify(permissions, null, 5)};
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
