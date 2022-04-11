import { createStackNavigator } from 'react-navigation-stack'
import Home from '../Screens/Home'
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
             {
               DrawerContent.map(drawer=><Drawer.Screen
                 key={drawer.name}
                 name={drawer.name}
                 component={Home}
               />)
             }
      </Drawer.Navigator>
      </NavigationContainer>
       );
      }