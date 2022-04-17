// import React from "react";
// import { Platform, StatusBar } from "react-native";
// import { createStackNavigator } from 'react-navigation-stack'
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createAppContainer, createSwitchNavigator } from 'react-navigation'
// import { FontAwesome } from "react-native-vector-icons";

import Signup from "../Screens/Signup";
import Login from "../Screens/Login";
import Dashboard from "../Screens/Dashboard";
import ProfileScreen from "../Screens/ProfileScreen";
import DrawerContent from "./DrawerContent";

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
};

export const SignedOut = createStackNavigator({
  Signup: {
    screen: Signup,
    navigationOptions: {
      title: "Sign Up",
      headerStyle,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Sign In",
      headerStyle,
    },
  },
});
const Drawer = createDrawerNavigator();
export const SignedIn = () => {
  return (
    <Drawer.Navigator
      drawerType="front"
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundOpacity: 1,
          backgroundColor: "#133E7C",
          shadowColor: "#133E7C",
          borderBottomColor: "#133E7C",
        },
        headerBackgroundColor: "#133E7C",
        headerTitle: "",
        activeTintColor: "#e91e63",
        itemStyle: { marginVertical: 10 },
      }}
    >
      {DrawerContent.map((drawer) => (
        <Drawer.Screen
          key={drawer.name}
          name={drawer.name}
          options={{
            drawerIcon: ({ focused }) =>
              drawer.iconType === "Material" ? (
                <MaterialCommunityIcons
                  name={drawer.iconName}
                  size={24}
                  color={focused ? "#e91e63" : "black"}
                />
              ) : drawer.iconType === "Feather" ? (
                <Feather
                  name={drawer.iconName}
                  size={24}
                  color={focused ? "#e91e63" : "black"}
                />
              ) : (
                <FontAwesome5
                  name={drawer.iconName}
                  size={24}
                  color={focused ? "#e91e63" : "black"}
                />
              ),
          }}
          component={
            drawer.name === "Dashboard"
              ? Dashboard
              : drawer.name === "Settings"
              ? ProfileScreen
              : drawer.name === "Saved Items"
              ? ReferScreen
              : ReferScreen
          }
        />
      ))}
    </Drawer.Navigator>
  );
};

export const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn,
      },
      SignedOut: {
        screen: SignedOut,
      },
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut",
    }
  );
};
const AppContainer = createAppContainer(createRootNavigator);
export default AppContainer;
