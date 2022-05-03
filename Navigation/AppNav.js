import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../Screens/Dashboard";
import Analytics from "../Screens/Analytics";
import NewSession from "../Screens/NewSession";
import ProfileScreen from "../Screens/ProfileScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign"
import AuthNav from "./AuthNav";
import { NavigationContainer } from "@react-navigation/native";
import DrawerContent from "./DrawerContent";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { logout } from "../Services/user_service";
import {
  CheckBox,
  Button,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "../Styles/styles";

function CustomDrawerContent(props) {
  return (
    <>
      <DrawerContentScrollView {...props}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate("ProfileScreen")}
        >
          <View style={styles.drawerHeader}>
            <Text>Header</Text>
          </View>
        </TouchableOpacity>
        <View style={{ flex: 1 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View>
        <TouchableOpacity
          onPress={() => {
            props.navigation.closeDrawer();
            props.navigation.navigate("Login");
          }}
          style={styles.roundButton1}
        >
          <MaterialCommunityIcons name="logout" size={24} color="black" />
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
const Drawer = createDrawerNavigator();
function AppNav() {
  return (
    <Drawer.Navigator
      drawerType="front"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: true,
        headerStyle: {
          height:80,
          backgroundOpacity: 1,
          backgroundColor: "#133E7C",
          shadowColor: "#133E7C",
          borderBottomColor: "#133E7C",
        },
        headerBackgroundColor: "#133E7C",
        headerTitle: "",
        activeTintColor: "#9BE6DE",
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
                  color={focused ? "#9BE6DE" : "black"}
                />
              ) : drawer.iconType === "Feather" ? (
                <Feather
                  name={drawer.iconName}
                  size={24}
                  color={focused ? "#9BE6DE" : "black"}
                />
              ) : drawer.iconType === "AntDesign" ? (
                <AntDesign
                  name={drawer.iconName}
                  size={24}
                  color={focused ? "#9BE6DE" : "black"}
                />
              ) : (
                <FontAwesome5
                  name={drawer.iconName}
                  size={24}
                  color={focused ? "#9BE6DE" : "black"}
                />
              ),
          }}
          component={
            drawer.name === "Dashboard"
              ? Dashboard
              : drawer.name === "ProfileScreen"
              ? ProfileScreen
              : drawer.name === "Saved Items"
              ? Analytics
              : drawer.name === "NewSession"
              ? NewSession
              : Analytics
          }
        />
      ))}
    </Drawer.Navigator>
  );
}
export default AppNav;
