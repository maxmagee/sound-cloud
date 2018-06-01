import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';

class HomeScreen extends Component {
    static navigationOptions = {
        headerTitle: 'Home',
        headerTitleStyle: {
            color: '#444',
            fontWeight: 'normal'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Button 
                    title='Play Song'
                    onPress={() => this.props.navigation.navigate('Song')}
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
