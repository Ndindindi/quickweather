//importing core modules
import React from 'react';
import {StyleSheet, Text, View, StatusBar, Dimensions} from 'react-native';

//importing custom modules
import {styles} from '../../src/styles/styles';
import Swiper from 'react-native-swiper'
import Main from "../components/Main";

//variable declarations
const {width, height} = Dimensions.get('window');

export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            daressalaam: {
                temperature: 18,
                clouds: 'Sunny',
                wind_speed: 1.6,
                humidity: 75,
                pressure: 1025
            },
            mwanza: {
                temperature: 18,
                clouds: 'Sunny',
                wind_speed: 1.6,
                humidity: 75,
                pressure: 1025
            },
            arusha: {
                temperature: 18,
                clouds: 'Sunny',
                wind_speed: 1.6,
                humidity: 75,
                pressure: 1025
            }
        }
    }

    componentDidMount() {
        this.loadDarWeather();
        this.loadMwanzaWeather();
        this.loadArushaWeather();
    }

    loadDarWeather() {
        fetch('https://api.openweathermap.org/data/2.5/forecast?id=160263&appid=2ec588acf81e68aedfdfbdec83ba9db9')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        daressalaam: {
                            temperature: result.list[0].main.temp,
                            clouds: result.list[0].weather[0].description,
                            wind_speed: result.list[0].wind.speed,
                            humidity: result.list[0].main.humidity,
                            pressure: result.list[0].main.pressure,
                        }
                    });
                },
            )
    }

    loadMwanzaWeather() {
        fetch('https://api.openweathermap.org/data/2.5/forecast?id=152224&appid=2ec588acf81e68aedfdfbdec83ba9db9')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        mwanza: {
                            temperature: result.list[0].main.temp,
                            clouds: result.list[0].weather[0].description,
                            wind_speed: result.list[0].wind.speed,
                            humidity: result.list[0].main.humidity,
                            pressure: result.list[0].main.pressure,
                        }
                    });
                },
            )
    }

    loadArushaWeather() {
        fetch('https://api.openweathermap.org/data/2.5/forecast?id=161325&appid=2ec588acf81e68aedfdfbdec83ba9db9')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        arusha: {
                            temperature: result.list[0].main.temp,
                            clouds: result.list[0].weather[0].description,
                            wind_speed: result.list[0].wind.speed,
                            humidity: result.list[0].main.humidity,
                            pressure: result.list[0].main.pressure,
                        }
                    });
                },
            )
    }

    render() {
        return (
            <View style={styles.outerContainer}>
                <View style={styles.container}>
                    {/*<StatusBar barStyle='light-content' />*/}
                    <Swiper style={styles.wrapper}
                            dot={<View style={styles.dotStyle}/>}
                            activeDot={<View style={styles.activeDot}/>}
                            paginationStyle={{
                                bottom: 10
                            }}
                            loop={false}>
                        <View style={styles.slide}>
                            <Main
                                region={'Dar es salaam'}
                                temperature={this.state.daressalaam.temperature}
                                clouds={this.state.daressalaam.clouds}
                                wind={this.state.daressalaam.wind_speed}
                                humidity={this.state.daressalaam.humidity}
                                pressure={this.state.daressalaam.pressure}

                            />
                        </View>
                        <View style={styles.slide}>
                            <Main
                                region={'Mwanza'}
                                temperature={this.state.mwanza.temperature}
                                clouds={this.state.mwanza.clouds}
                                wind={this.state.mwanza.wind_speed}
                                humidity={this.state.mwanza.humidity}
                                pressure={this.state.mwanza.pressure}
                            />
                        </View>
                        <View style={styles.slide}>
                            <Main
                                region={'Arusha'}
                                temperature={this.state.arusha.temperature}
                                clouds={this.state.arusha.clouds}
                                wind={this.state.arusha.wind_speed}
                                humidity={this.state.arusha.humidity}
                                pressure={this.state.arusha.pressure}
                            />
                        </View>
                    </Swiper>
                </View>
            </View>
        );
    }
}


