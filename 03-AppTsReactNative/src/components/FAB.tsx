import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  TouchableNativeFeedback,
  View,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';

interface Props {
  title: string;
  posicion?: 'botonRigh' | 'botonLeft';
  onPress: () => void;
}

export const FAB = ({title, onPress, posicion = 'botonLeft'}: Props) => {

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
        style={[
          styles.positionDefault,
          posicion === 'botonLeft' ? styles.lef : styles.right,
        ]}>
        {/* TouchableOpacity */}
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('blue', false, 30)}>
          <View style={styles.fab}>
            <Text style={styles.fabTexto}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }

  return (Platform.OS === 'android') ? android() : ios();

  
};

const styles = StyleSheet.create({
  positionDefault: {position: 'absolute', bottom: 10},
  lef: {left: 10},
  right: {right: 10},
  fabLocationBL: {position: 'absolute', bottom: 10, left: 10},
  fabLocationBR: {position: 'absolute', bottom: 10, right: 10},
  fabTexto: {color: '#fff', textAlign: 'center', fontSize: 30},
  fab: {
    backgroundColor: '#5856D6',
    borderRadius: 100,
    width: 60,
    height: 60,
    alignSelf: 'center',
    justifyContent: 'center',
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
