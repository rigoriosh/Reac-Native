import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FAB } from '../../components/FAB';


export const ContadorScreen = () => {
    const [constador, setConstador] = useState(0);

    
    return (
        <View style={styles.container}>
            <Text style={styles.title1}>Contador: {constador}</Text>
            <FAB title="-1" onPress={()=> setConstador(constador - 1) } posicion="botonLeft" />
            <FAB title="+1" onPress={()=> setConstador(constador + 1) } posicion={'botonRigh'}/>            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: "#eaeaea",
      justifyContent: 'center'
    },
    title1: {
      marginTop: 16,
      paddingVertical: 8,
      borderWidth: 4,
      borderColor: "#20232a",
      borderRadius: 6,
      backgroundColor: "#61dafb",
      color: "#20232a",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold",
      marginBottom: 20
    },
    fabLocationBR: {position:'absolute', bottom: 10, left:10},
    fabLocationBL: {position:'absolute', bottom: 10, right:10},
    title2: {textAlign:'center', fontSize:30, position:'relative', top: 0, color:'#fff'},
    fabTexto: {color:'#fff', textAlign:'center', fontSize:30},
    fab: {backgroundColor:'#5856D6', borderRadius:100, width: 60, height:60 , alignSelf:'center', justifyContent: 'center'}
  });
