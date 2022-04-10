import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import AppNav from './AppNav'
import AuthNav from './AuthNav'

const SwitchNavigator = createSwitchNavigator(
    {
      Auth: AuthNav,
      App: AppNav
    },
    {
      initialRouteName: 'Auth'
    }
  )
const AppContainer = createAppContainer(SwitchNavigator)

export default AppContainer