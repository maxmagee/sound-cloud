import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';

class StreamScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    title='Stream'
                    onPress={() => this.props.navigation.navigate('Search')}
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

export default StreamScreen;
