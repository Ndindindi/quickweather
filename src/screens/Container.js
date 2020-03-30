//importing core modules
import React from 'react';
import { StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native';

//importing custom modules
import {styles} from '../../src/styles/styles';
import Swiper from 'react-native-swiper'

//variable declarations
const { width, height } = Dimensions.get('window');

export default class Container extends React.Component{
    render() {
    return (
        <View style={styles.outerContainer}>
        <View style={styles.container}>
            {/*<StatusBar barStyle='light-content' />*/}
            <Swiper style={styles.wrapper}
                    dot={<View style={styles.dotStyle} />}
                    activeDot={<View style={styles.activeDot} />}
                    paginationStyle={{
                        bottom: 10
                    }}
                    loop={false}>
                <View style={styles.slide}>
                    <Text>
                        Dar es salaam
                    </Text>
                </View>
                <View style={styles.slide}>
                    <Text>
                        Mwanza
                    </Text>
                </View>
                <View style={styles.slide}>
                    <Text>
                        Arusha
                    </Text>
                </View>
            </Swiper>
        </View>
        </View>
    );
}}


