import React from 'react';
import { 
  createBottomTabNavigator, 
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import ProfileScreen from './screens/Profile';
import SearchScreen from './screens/Search';
import SongScreen from './screens/Song';
import StreamScreen from './screens/Stream';

// Stack Navigators
const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Song: {
    screen: SongScreen,
    navigationOptions: ({ navigation }) => ({ // eslint-disable-line no-unused-vars
      header: null
    })
  }
});

const StreamStack = createStackNavigator({
  Stream: StreamScreen,
  Song: SongScreen
});

const SearchStack = createStackNavigator({
  Search: SearchScreen,
  Song: SongScreen
});

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
  Song: SongScreen
});

HomeStack.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const navigationOptions = {};

  if (routeName === 'Song') {
    navigationOptions.tabBarVisible = false;
  }

  return navigationOptions;
};

// Tab Navigator

const Tabs = createBottomTabNavigator({
  Home: HomeStack,
  Stream: StreamStack,
  Search: SearchStack,
  Profile: ProfileStack
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

// Switch Navigator

const Switch = createSwitchNavigator({
  Login: LoginScreen,
  Home: Tabs
}, {
  initialRouteName: 'Login'
});

export default Switch;
