import React, { Component } from 'react';
import { 
    Animated,
    Button,
    Dimensions,
    Easing,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View 
} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
                    <Animated.View style={styles.upperMostIcons}>
                        <TouchableOpacity>
                            <MaterialIcons 
                                name='play-arrow' 
                                size={30} 
                                style={{ color: 'white' }} 
                            />
                        </TouchableOpacity>

                        <View>
                            <TouchableOpacity>
                                <Text style={styles.upperSongTitle}>Eternity</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Text style={styles.upperArtistName}>Stellardrone</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity>
                            <MaterialCommunityIcons 
                                name='heart' 
                                size={30} 
                                style={{ color: 'white' }} 
                            />
                        </TouchableOpacity>
                    </Animated.View>

                    <Animated.View style={styles.upperIcons}>
                        <Animated.View style={styles.upperLeftIcons}>
                            <TouchableOpacity>
                                <Text style={styles.artistName}>Stellardrone</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Text style={styles.songTitle}>Eternity</Text>
                            </TouchableOpacity>
                        </Animated.View>

                        <Animated.View>
                            <TouchableOpacity>
                                <MaterialCommunityIcons
                                    name='chevron-down'
                                    size={40}
                                    style={styles.upperRightIcon}
                                />
                            </TouchableOpacity>
                        </Animated.View>
                    </Animated.View>

                    <Animated.View style={styles.lowerIcons}>
                        <Animated.View style={styles.lowerIconWrapper}>
                            <TouchableOpacity style={styles.likes}>
                                <MaterialCommunityIcons
                                    name='heart'
                                    size={25}
                                    style={{ color: 'white' }}
                                />
                                <Text style={{ color: 'white' }}>1,414</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <FeatherIcons
                                    name='share'
                                    size={25}
                                    style={{ color: 'white' }}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <MaterialCommunityIcons
                                    name='repeat-once'
                                    size={25}
                                    style={{ color: 'white' }}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <MaterialIcons
                                    name='more-horiz'
                                    size={35}
                                    style={{ color: 'white' }}
                                />
                            </TouchableOpacity>
                        </Animated.View>
                    </Animated.View>

                </Animated.View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    artistName: {
        backgroundColor: '#000',
        color: '#fff',
        marginLeft: 15,
        fontSize: 20,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    imageContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        height: SCREEN_HEIGHT
    },
    likes: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    lowerIcons: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 40
    },
    lowerIconWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    songTitle: {
        backgroundColor: '#000',
        color: '#fff',
        marginLeft: 15,
        marginTop: 10,
        fontSize: 25,
        fontWeight: 'bold'
    },
    upperArtistName: {
        color: 'white',
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    },
    upperIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    upperLeftIcons: {
        flexDirection: 'column'
    },
    upperMostIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 12
    },
    upperRightIcon: {
        color: '#fff',
        marginRight: 10,
    },
    upperSongTitle: {
        color: 'white'
    }
});

export default SongScreen;
