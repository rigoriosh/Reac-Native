import React from 'react';
import { TouchableOpacity } from 'react-native';
import { colores } from '../styles/index';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  TouchableNativeFeedback,
  View,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';

interface Props {
  title: string;
  posicion?: 'botonRigh' | 'botonLeft' | 'topRigh' | 'topLeft';
  onPress: () => void;
  tamanio: number
}

export const FAB = ({title, onPress, posicion = 'botonLeft', tamanio}: Props) => {

  const ios = () => {
    return (
      <TouchableOpacity activeOpacity={0.8}  onPress={onPress}
        style={[ styles.positionDefault, posicion === 'botonLeft' ? styles.lef : styles.right, ]}>
        
          <View style={styles.fab}>
            <Text style={styles.fabTexto}>{title}</Text>
            
          </View>
       
      </TouchableOpacity>
    );
  }

  const android = () => {
    return (
      <View
        style={{...styles.positionDefault, ...styles[posicion]}}>
        {/* TouchableOpacity */}
        <TouchableOpacity
          onPress={onPress}
          /* background={TouchableNativeFeedback.Ripple('blue', false, 30)} */>
          <View style={{...styles.fab, width:tamanio, height:tamanio}}>
            {/* <Text style={styles.fabTexto}>{title}</Text> */}
            <Icon name="arrow-back-outline" color="white" size={20}/>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (Platform.OS === 'android') ? android() : ios();

  
};

const styles = StyleSheet.create({
  positionDefault: {position: 'absolute', bottom: 10},
  lef: {left: 10},
  right: {right: 10},
  botonRigh: {position: 'absolute', bottom: 10, right: 10} ,
  botonLeft: {position: 'absolute', bottom: 10, left: 10} ,
  topRigh: {position: 'absolute', top: 10, right: 10} ,
  topLeft: {position: 'absolute', top: 10, left: 10} ,/* 
  fabLocationBL: {position: 'absolute', bottom: 10, left: 10},
  fabLocationBR: {position: 'absolute', bottom: 10, right: 10}, */
  fabTexto: {color: '#fff', /* textAlign: 'center', */ fontSize: 30, /* justifyContent:'center' */},
  fab: {
    backgroundColor: colores.color1,
    borderRadius: 100,
    display:'flex',
    
    alignItems:'center',
    //alignContent:'center',
    //alignSelf: 'center',
    //justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
});
