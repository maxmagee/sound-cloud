import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button 
                    title='Home'
                    onPress={() => this.props.navigation.navigate('Stream')}
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

export default HomeScreen;
