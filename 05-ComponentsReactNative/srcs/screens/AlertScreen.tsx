import React from 'react'
import { View, Button, Alert } from 'react-native';
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
    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title={'Alerts'}/>
            <Button title="show alert" onPress={showAlert}/>

            
        </View>
    )
}
