import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native';
import { Boton1 } from '../../components/Boton1';
import { AuthContext } from '../../context/AuthContext';
import { indexCss } from '../../styles/index';

export const ContactsScreen = () => {

    const {authState:{isLoggedIn}, signIn} = useContext(AuthContext);

    return (
        <View style={indexCss.globalMargin}>
            <Text style={indexCss.title}>ContactsScreen</Text>
            { !isLoggedIn && <Button onPress={signIn} title={'signIn'}/> }
        </View>
    )
}
