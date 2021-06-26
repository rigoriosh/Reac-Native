import React, { useState } from "react";
import { View, StyleSheet, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { SwitchCustom } from "../components/SwitchCustom";

export const SwitchScreen = () => {
    const [state, setState] = useState(
        {
            isActive: false,
            isHungry: false,
            isHappy: false
        }
    )

    const {isActive, isHappy, isHungry} = state;
    
    const toggleSwitch = () => setState({...state, isActive: !state.isActive})
    const toggleSwitchHappy = () => setState({...state, isHappy: !state.isHappy})
    const toggleSwitchHungry = () => setState({...state, isHungry: !state.isHungry})
    
    return (
        <View>
            <HeaderTitle title={'Switches'}/>
            <View style={styles.container}>
                <View style={styles.estiloSwitch}>
                    <Text >isActive</Text>
                    <SwitchCustom isEnabled={isActive} toggleSwitch={toggleSwitch}/>
                </View>
                <View style={styles.estiloSwitch}>
                    <Text >isHappy</Text>
                    <SwitchCustom isEnabled={isHappy} toggleSwitch={toggleSwitchHappy}/>
                </View>
                <View style={styles.estiloSwitch}>
                    <Text >isHungry</Text>
                    <SwitchCustom isEnabled={isHungry} toggleSwitch={toggleSwitchHungry}/>
                </View>
                <Text>
                    {JSON.stringify(state, null, 5)}
                </Text>
                {
                    isActive &&
                    <Text style={{marginBottom:30, fontSize:30, fontWeight: 'bold'}}>Hola Thiago</Text>
                }

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
   //     flexDirection:'column',
        alignItems: "center",
     //   justifyContent: "space-between"
    },
    estiloSwitch:{flexDirection: 'row', justifyContent:'space-between', width:'100%', paddingHorizontal:20/* , backgroundColor:'red' */,
    marginBottom:10}
});