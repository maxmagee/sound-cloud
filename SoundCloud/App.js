import { createSwitchNavigator } from 'react-navigation';

import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';

const Switch = createSwitchNavigator({
  Home: HomeScreen,
  Login: LoginScreen
}, {
  initialRouteName: 'Login'
});

export default Switch;
