import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { indexCss } from '../../styles';

export const AlbumsScreen = () => {

    const {authState:{isLoggedIn}, logOut} = useContext(AuthContext);

    return (
        <View>
            <Text style={indexCss.title}>AlbumsScreen</Text>
            { isLoggedIn && <Button onPress={logOut} title={'LogOut'}/> }
        </View>
    )
}
