import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Screens/Login";
import Signup from "../Screens/Signup";
import AuthScreens from "../Screens/AuthScreens";
import AppNav from "./AppNav";

const Stack = createStackNavigator();

function AuthNavigation() {
  return (
    <Stack.Navigator headerMode="hidden">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="AppNavigation" component={AppNav} />
    </Stack.Navigator>
  );
}
export default AuthNavigation;
