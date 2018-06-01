import React from 'react';
import { createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import ProfileScreen from './screens/Profile';
import SearchScreen from './screens/Search';
import StreamScreen from './screens/Stream';

const Tabs = createBottomTabNavigator({
  Home: HomeScreen,
  Stream: StreamScreen,
  Search: SearchScreen,
  Profile: ProfileScreen
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') { 
        iconName = 'home'; 
      } else if (routeName === 'Stream') { 
        iconName = 'flash';
      } else if (routeName === 'Search') {
        iconName = 'search';
      } else if (routeName === 'Profile') {
        iconName = 'account';
      }
      return iconName === 'search' ?
        <MaterialIcons name={iconName} size={25} color={tintColor} /> :
        <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />;
    }
  }),
  tabBarOptions: {
    activeBackgroundColor: 'grey',
    activeTintColor: '#fff',
    inactiveTintColor: 'grey',
    showLabel: false,
    style: {
      backgroundColor: '#000'
    }
  }
});

const Switch = createSwitchNavigator({
  Login: LoginScreen,
  Home: Tabs
}, {
  initialRouteName: 'Login'
});

export default Switch;
