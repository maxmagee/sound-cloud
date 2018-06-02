import React, { Component } from 'react';
import { 
    Animated,
    Button,
    Dimensions,
    Easing,
    SafeAreaView,
    StyleSheet, 
    View 
} from 'react-native';

import songBackground from '../images/songBackground.jpg';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class SongScreen extends Component {
    constructor() {
        super();
        this.animatedValue = new Animated.Value(0);
    }

    componentDidMount() {
        this.animate();
    }

    animate() {
        this.animatedValue.setValue(0);
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: 90000,
                easing: Easing.linear,
                useNativeDriver: true
            }
        ).start(() => this.animate());
    }

    render() {
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <Button
                        title='Song'
                        onPress={() => this.props.navigation.navigate('Home')}
                    />
                </View>
                <Animated.View style={styles.imageContainer}>
                    <Animated.Image
                        source={songBackground}
                        style={{
                            transform: [{
                                translateX: this.animatedValue.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, -SCREEN_WIDTH * 2]
                                })
                            }],
                            height: SCREEN_HEIGHT,
                            width: SCREEN_WIDTH * 3,
                            position: 'absolute'
                        }}
                    />
                </Animated.View>
            </SafeAreaView>
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

export default SongScreen;
