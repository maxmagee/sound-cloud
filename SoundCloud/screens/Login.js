import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Icon
                    name='soundcloud'
                    size={100}
                    color={'white'}
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button 
                    color='#fff'
                    title='Login to SoundCloud'
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#FF8C00',
        justifyContent: 'center',
        flex: 1,
    }
});

export default LoginScreen;
