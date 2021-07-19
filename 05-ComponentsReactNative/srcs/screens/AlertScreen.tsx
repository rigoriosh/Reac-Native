import React from 'react'
import { View, Button, Alert } from 'react-native';
import prompt from 'react-native-prompt-android';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const AlertScreen = () => {
    const showAlert = ()=>{
        Alert.alert('Alerta', 'Este es una prueba de un alert', 
            [{text: 'Cancelar', style:'destructive'}, {text: 'Cancelar2', style:'default'}],
            {
                cancelable: true,
                
            }
        );
    }

    const showPromt = () => {
        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
             {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
             {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        );
    }
    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title={'Alerts'}/>
            <Button title="show alert" onPress={showAlert}/>

            <View style={{height:10}}/>

            <Button title="show Promt" onPress={showPromt}/>

            
        </View>
    )
}
