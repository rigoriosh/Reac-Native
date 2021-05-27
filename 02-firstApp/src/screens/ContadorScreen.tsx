import React, { useState } from 'react'
import { View, Text, Button } from 'react-native';

export const ContadorScreen = () => {
    const [constador, setConstador] = useState(0);
    return (
        <View style={{flex: 10, backgroundColor: '#fff', justifyContent: 'center'}}>
            <Text style={{textAlign:'center', fontSize:30, position:'relative', top: -150 }}>Contador: {constador}</Text>
            <Button
                onPress={()=>{setConstador(constador + 1)}}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )
}
