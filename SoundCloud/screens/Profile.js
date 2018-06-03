import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';

class ProfileScreen extends Component {
    static navigationOptions = {
        headerTitle: 'Profile',
        headerTitleStyle: {
            color: '#444',
            fontWeight: 'normal'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title='Profile'
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center'
    }
});

export default ProfileScreen;
