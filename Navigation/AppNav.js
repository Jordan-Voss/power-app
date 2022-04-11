import { createStackNavigator } from 'react-navigation-stack'
import Home from '../Screens/Home'
import ReferScreen from '../Screens/ReferScreen'
import ProfileScreen from '../Screens/ProfileScreen'

import {DrawerNavigator} from 'react-navigation'
import { NavigationContainer } from '@react-navigation/native';
import DrawerContent from './DrawerContent'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
export default function AppNav() {
  return (
      <NavigationContainer>
      <Drawer.Navigator
             drawerType="front"
             initialRouteName="Profile"
             drawerContentOptions={{
               activeTintColor: '#e91e63',
               itemStyle: { marginVertical: 10 },
             }}
      
      >
        <Drawer.Screen
                name="Home"
                component={Home}/>
                <Drawer.Screen
                name="ProfileScreen"
                component={ProfileScreen}/>
                <Drawer.Screen
                name="ReferScreen"
                component={ReferScreen}/>
    
      </Drawer.Navigator>
      </NavigationContainer>
       );
      }