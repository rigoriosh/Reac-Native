import React, {useState} from 'react'
import { TextInput, View, StyleSheet, Text, Platform, ScrollView, KeyboardAvoidingView } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle'
import { SwitchCustom } from '../components/SwitchCustom';
import { useForm } from '../hooks/useForm';

export const TextInputScreen = () => {

    const { formulario, handleForm } = useForm({ name:'', email:'', phone:'', isSubscribe:false });
 
    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>
                <View style={{backgroundColor:'rgba(0,0,0,0.2)', paddingHorizontal:5, flex: 1}}>
                    <HeaderTitle title="Text Inputs" />

                    <TextInput style={stilos.inputStyle}
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
                    <View style={stilos.estiloSwitch}>
                        <Text >Suscribirme</Text>
                        <SwitchCustom isEnabled={formulario.isSubscribe} toggleSwitch={()=>{handleForm(!formulario.isSubscribe, 'isSubscribe')}}/>
                    </View>
                    <View>
                        <Text>
                            {JSON.stringify(formulario, null, 6)}
                        </Text>
                    </View>
                    <View>
                        <Text>
                            {JSON.stringify(formulario, null, 6)}
                        </Text>
                    </View>
                    <View>
                        <Text>
                            {JSON.stringify(formulario, null, 6)}
                        </Text>
                    </View>
                    <View>
                        <Text>
                            {JSON.stringify(formulario, null, 6)}
                        </Text>
                    </View>
                    <View>
                        <Text>
                            {JSON.stringify(formulario, null, 6)}
                        </Text>
                    </View>
                    <View>
                        <Text>
                            {JSON.stringify(formulario, null, 6)}
                        </Text>
                    </View>
                    <TextInput style={{...stilos.inputStyle, marginBottom:100}}
                        placeholder="input your phone"
                        keyboardType = "phone-pad"
                        onChangeText={(v)=>{handleForm(v, 'phone')}}
                    />

                    
                </View>
                
            </ScrollView>
        </KeyboardAvoidingView>
        
 



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
    },
    estiloSwitch:{flexDirection: 'row', justifyContent:'space-between', width:'100%', paddingHorizontal:20/* , backgroundColor:'red' */,}
})