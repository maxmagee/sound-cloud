import { AppRegistry, YellowBox } from 'react-native';
import App from './App';

YellowBox.ignoreWarnings([
    'Warning: isMounted(...) is deprecated', 
    'Module RCTImageLoader', 
    'Class RCTCxxModule was not exported'
]);

AppRegistry.registerComponent('SoundCloud', () => App);
