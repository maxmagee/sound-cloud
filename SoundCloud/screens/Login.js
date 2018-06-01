import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';

class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button 
                    title='Go to Home Screen'
                    onPress={() => this.props.navigation.navigate('Home')}
                />         
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        justifyContent: 'center',
        flex: 1,
    }
});

export default LoginScreen;
