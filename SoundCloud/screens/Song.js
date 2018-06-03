import React, { Component } from 'react';
import { 
    Animated,
    Dimensions,
    Easing,
    PanResponder,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View 
} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import songBackground from '../images/songBackground.jpg';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class SongScreen extends Component {
    constructor() {
        super();
        this.animatedValue = new Animated.Value(0);
        this.imageSlideDuration = 20000;
    }

    state = {
        liked: false,
        likeCount: 1414
    }

    componentWillMount() {
        this.animation = new Animated.ValueXY({ x: 0, y: 0 });
        this.PanResponder = PanResponder.create({
            onMoveShouldSetPanResponder: (evt, gestureState) => true,   // eslint-disable-line
            onPanResponderMove: (evt, gestureState) => {
                this.animation.setValue({ x: 0, y: gestureState.dy });
            },
            onPanResponderRelease: (evt, gestureState) => {
                if (gestureState.moveY < SCREEN_HEIGHT && gestureState.dy < 0) {
                    Animated.spring(this.animation.y, {
                        toValue: 0,
                        tension: 1,
                        useNativeDriver: true
                    }).start();
                } else if (gestureState.dy < 0) {
                    Animated.spring(this.animation.y, {
                        toValue: 0,
                        tension: 1,
                        useNativeDriver: true
                    }).start();
                } else if (gestureState.dy > 0) {
                    Animated.spring(this.animation.y, {
                        toValue: SCREEN_HEIGHT - 60,
                        tension: 1,
                        useNativeDriver: true
                    }).start();
                }
            }
        });
    }

    componentDidMount() {
        this.slideImage(0, 1);
    }

    slideImage(startValue, endValue) {
        this.animatedValue.setValue(startValue);
        Animated.timing(
            this.animatedValue,
            {
                toValue: endValue,
                duration: this.imageSlideDuration,
                easing: Easing.linear,
                useNativeDriver: true
            }
        ).start(() => this.slideImage(endValue, startValue));
    }

    animateToBottom = () => {
        Animated.spring(this.animation.y, {
            toValue: SCREEN_HEIGHT - 60,
            tension: 1,
            useNativeDriver: true
        }).start();
    }

    toggleLiked = () => {
        this.setState(prevState => {
            return {
                ...prevState,
                liked: !prevState.liked,
                likeCount: prevState.liked ? prevState.likeCount - 1 : prevState.likeCount + 1
            };
        });
    }

    render() {
        const animatedHeight = {
            transform: this.animation.getTranslateTransform()
        };

        const animatedIconOpacity = this.animation.y.interpolate({
            inputRange: [0, SCREEN_HEIGHT - 200, SCREEN_HEIGHT - 60],
            outputRange: [0, 0, 1],
            extrapolate: 'clamp'
        });

        const animatedScreenOpacity = this.animation.y.interpolate({
            inputRange: [SCREEN_HEIGHT - 500, SCREEN_HEIGHT - 150, SCREEN_HEIGHT - 60],
            outputRange: [1, 0, 0],
            extrapolate: 'clamp'
        });

        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <Ionicons
                        style={styles.headerIcon}
                        name='ios-arrow-back'
                        size={30}
                        color='grey'
                        onPress={() => this.props.navigation.navigate('Home')}
                    />
                    <Text style={styles.headerText}>Playlist</Text>
                    <View style={{ flex: 1 }} />
                </View>
                <Animated.View 
                    {...this.PanResponder.panHandlers}
                    style={[animatedHeight, styles.imageContainer]}
                >
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
                    <Animated.View 
                        style={[styles.upperMostIcons, { opacity: animatedIconOpacity }]}
                    >
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

                        <TouchableOpacity
                            onPress={this.toggleLiked}
                        >
                            <MaterialCommunityIcons 
                                name='heart' 
                                size={30} 
                                style={{ color: this.state.liked ? 'red' : 'white' }} 
                            />
                        </TouchableOpacity>
                    </Animated.View>

                    <Animated.View style={[styles.upperIcons, { opacity: animatedScreenOpacity }]}>
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
                                    onPress={this.animateToBottom}
                                />
                            </TouchableOpacity>
                        </Animated.View>
                    </Animated.View>

                    <Animated.View style={[styles.lowerIcons, { opacity: animatedScreenOpacity }]}>
                        <Animated.View style={styles.lowerIconWrapper}>
                            <TouchableOpacity 
                                style={styles.likes}
                                onPress={this.toggleLiked}
                            >
                                <MaterialCommunityIcons
                                    name='heart'
                                    size={25}
                                    style={{ color: this.state.liked ? 'red' : 'white' }}
                                />
                                <Text style={{ color: 'white' }}>{this.state.likeCount}</Text>
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
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: '#999',
        flexDirection: 'row',
        marginTop: 50
    },
    headerIcon: {
        marginLeft: 10,
        marginRight: 135
    },
    headerText: {
        fontSize: 18,
        color: '#444'
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
