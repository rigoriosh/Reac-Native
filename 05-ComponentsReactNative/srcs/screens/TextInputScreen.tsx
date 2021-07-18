import React, {useState} from 'react'
import { TextInput, View, StyleSheet, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle'

export const TextInputScreen = () => {

    const [formulario, setFormulario] = useState({ name:'', email:'', phone:'' })

    const handleForm = (value: string, field: string) => {
        setFormulario({...formulario, [field]: value})
    }
    return (
        <View style={{backgroundColor:'gray', paddingHorizontal:5, flex: 1}}>
            <HeaderTitle title="Text Inputs" />

            <TextInput
                style={stilos.inputStyle}
                placeholder="input your name"
                autoCorrect={false}
                autoCapitalize="words"
                keyboardAppearance="light"
                onChangeText={(v)=>{handleForm(v, 'name')}}
            />
            <TextInput
                style={stilos.inputStyle}
                placeholder="input your email"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType = "email-address"
                onChangeText={(v)=>{handleForm(v, 'email')}}
            />
            <TextInput
                style={stilos.inputStyle}
                placeholder="input your phone"
                keyboardType = "phone-pad"
                onChangeText={(v)=>{handleForm(v, 'phone')}}
            />

            <View>
                <Text>
                    {JSON.stringify(formulario, null, 6)}
                </Text>
            </View>
        </View>
    )
}


const stilos = StyleSheet.create({
    inputStyle:{
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        borderRadius: 10,
        color:'black',
        marginVertical:5,
        height: 50,
        fontWeight: 'bold',
        padding: 10,
    }
})