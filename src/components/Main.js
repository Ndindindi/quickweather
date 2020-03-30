//importing core modules
import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';

//importing custom modules
import {styles} from '../../src/styles/styles'

//variable declarations
const {width, height} = Dimensions.get('window');
const windIcon = require('../../assets/wind.png');
const HumidityIcon = require('../../assets/humidity.png');
const AirPressureIcon = require('../../assets/air-pressure.png');


export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <View style={{marginLeft: 25, marginTop: 30}}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.tempText}>
                        {this.props.temperature}
                    </Text>
                    <Text style={styles.text}>
                        o
                    </Text>
                </View>
                <View>
                    <Text style={styles.cloudText}>
                        {this.props.clouds}
                    </Text>
                    <Text style={styles.text}>
                        {this.props.region}
                    </Text>
                </View>
                </View>
                <View style={styles.card}>
                    <Card
                        color={'#BF4C67'}
                        icon={windIcon}
                        amount={this.props.wind}
                        unit={'km/h'}
                        title={'Wind'}
                        titleBackground={'#AF3E44'}
                    />
                    <Card
                        color={'#AF5C7E'}
                        icon={HumidityIcon}
                        amount={this.props.humidity}
                        unit={'%'}
                        title={'Humidity'}
                        titleBackground={'#9D4B6C'}
                    />
                    <Card
                        color={'#BF4C67'}
                        icon={AirPressureIcon}
                        amount={this.props.pressure}
                        unit={'hpa'}
                        title={'Air Pressure'}
                        titleBackground={'#AF3E44'}
                    />
                </View>
            </View>
        )
    }

}


const Card = (props) => {

    const cardContainer = {
        height: height * .25,
        width: width * .27,
        borderRadius: 5,
        backgroundColor: props.color,
        marginTop: height * .47
    };

    return (
        <View style={cardContainer}>
            <View>
                <Image
                    source={props.icon}
                    style={{alignSelf: 'center', width: 50, height: 50, marginTop: 25}}
                />
            </View>
            <View style={{flexDirection: 'row', marginTop: 20, justifyContent: 'center'}}>
                <Text style={styles.amount}>
                    {props.amount}
                </Text>
                <Text style={styles.unit}>
                    {props.unit}
                </Text>
            </View>
            <View style={[styles.titleView, {backgroundColor: props.titleBackground}]}>
                <Text style={styles.titleText}>
                    {props.title}
                </Text>
            </View>
        </View>
    )
};