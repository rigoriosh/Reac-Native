import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../styles/index';
import { Platform, Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';


export const TabsNavigator = () => {
  return Platform.OS === 'ios' ? <TabsNavigatorToIOS/> : <TabsNavigatorToIOS/>
  //return Platform.OS === 'ios' ? <TabsNavigatorToIOS/> : <TabsAndroid/>
}


const BottomTabIOS = createBottomTabNavigator();

export const TabsNavigatorToIOS = () => {

  
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      tabBarOptions={{
        activeTintColor: colores.color2,
        style:{
          borderTopColor: colores.color2,
          borderTopWidth: 5,
          //elevation: 10,
          backgroundColor: colores.color1
        },
        labelStyle:{
          fontSize:15,
          fontWeight: 'bold'
        }
      }}
      screenOptions={(props)=>({
        tabBarIcon:(prop) => {
          let nombreIcon = '';
          switch (props.route.name) {
            case 'Tab1Screen':
              nombreIcon = 'american-football-outline'
              break;
            case 'TopTabNavigator':
              nombreIcon = 'barbell-outline'
              break;
            case 'StackNavigator':
              nombreIcon = 'bar-chart-outline'
              break;
          }
          console.log(prop.focused)
          console.log('props.route :', props.route.name)
          return <Icon name={nombreIcon} size={20} color={prop.color} />
        }
      })}
    >
      {/* <BottomTabIOS.Screen name="Tab1Screen" options={{title: 'Tab1', tabBarIcon:({focused, color, size})=>{
        return focused ? <Text style={{color:color, fontSize: size}}>T1</Text> : <Text>--</Text>
      }}}  component={Tab1Screen} /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{title: 'Tab1', }}  component={Tab1Screen} />
      <BottomTabIOS.Screen name="TopTabNavigator" options={{title: 'Tab2'}}   component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{title: 'Stack'}}   component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
}

/* 
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const BottomTabANDROID = createMaterialBottomTabNavigator();

function TabsAndroid() {
  return (
    <BottomTabANDROID.Navigator
      sceneAnimationEnable={true}
      barStyle={{
        backgroundColor: colores.color1
      }}
      screenOptions={(props)=>({
        tabBarIcon:(prop) => {
          let nombreIcon = '';
          switch (props.route.name) {
            case 'Tab1Screen':
              nombreIcon = 'T1'
              break;
            case 'TopTabNavigator':
              nombreIcon = 'T2'
              break;
            case 'StackNavigator':
              nombreIcon = 'Stack'
              break;
          }
          console.log(prop.focused)
          console.log('props.route :', props.route.name)
          return <Text style={{color: prop.color}}>{nombreIcon}</Text>
        }
      })}
    >
      <BottomTabANDROID.Screen name="Tab1Screen" options={{title: 'Tab1', }}  component={Tab1Screen} />
      <BottomTabANDROID.Screen name="TopTabNavigator" options={{title: 'Tab2'}}   component={TopTabNavigator} />
      <BottomTabANDROID.Screen name="StackNavigator" options={{title: 'Stack'}}   component={StackNavigator} />
    </BottomTabANDROID.Navigator>
  );
}

 */