import { createStackNavigator } from 'react-navigation-stack'
import Home from '../Screens/Home'
import ReferScreen from '../Screens/ReferScreen'
import ProfileScreen from '../Screens/ProfileScreen'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Feather from 'react-native-vector-icons/Feather';

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
       initialRouteName="Home"
       screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundOpacity:1,
          backgroundColor: '#133E7C',
          shadowColor:"#133E7C",
          borderBottomColor:"#133E7C",
        },
        headerBackgroundColor:'#133E7C',
        headerTitle: '',
         activeTintColor: '#e91e63',
         itemStyle: { marginVertical: 10 },
       }}

>
       {
         DrawerContent.map(drawer=>
         <Drawer.Screen
          key={drawer.name}
          name={drawer.name}
          options={{
          drawerIcon:({focused})=>
           drawer.iconType==='Material' ?
<MaterialCommunityIcons
                name={drawer.iconName}
                size={24}
                color={focused ? "#e91e63" : "black"}
            />
          :
          drawer.iconType==='Feather' ?
<Feather
              name={drawer.iconName}
              size={24}
              color={focused ? "#e91e63" : "black"}
            />
          :
<FontAwesome5
              name={drawer.iconName}
              size={24}
              color={focused ? "#e91e63" : "black"}
            />

        }}
          component={
            drawer.name==='Home' ? Home
              : drawer.name==='Settings' ? ProfileScreen
                : drawer.name==='Saved Items' ? ReferScreen
                  : ReferScreen
                }
        />)}
       </Drawer.Navigator>
      </NavigationContainer>
      )}