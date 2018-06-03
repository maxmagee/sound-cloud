import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';

class SearchScreen extends Component {
    static navigationOptions = {
        headerTitle: 'Search',
        headerTitleStyle: {
            color: '#444',
            fontWeight: 'normal'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title='Search'
                    onPress={() => this.props.navigation.navigate('Profile')}
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

export default SearchScreen;
