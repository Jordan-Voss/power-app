import { createStackNavigator } from 'react-navigation-stack'
import Home from '../Screens/Home'

const AppNav = createStackNavigator(
  {
    Home: { screen: Home },
    NewReport: { screen: Home},
    Reports: { screen: Home},
    EditReport: { screen: Home}
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'

  }
)

export default AppNav;