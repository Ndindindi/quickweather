'use-strict'
import {Dimensions} from 'react-native';


const {width, height} = Dimensions.get('window');

export const styles = {
    slide: {
        flex: 1,
        backgroundColor: '#783B62',
        borderRadius: 15,
        paddingHorizontal: 10,
    },
    container: {
        flex: 1,
    },

    imgBackground: {
        width,
        height,
        backgroundColor: 'transparent',
        position: 'absolute'
    },

    image: {
        width,
        height,
    },
    dotStyle: {
        backgroundColor: 'rgba(255,255,255,.3)',
        width: 13,
        height: 13,
        borderRadius: 7,
        marginLeft: 7,
        marginRight: 7
    },
    activeDot: {
        backgroundColor: '#FFF',
        width: 13, height: 13,
        borderRadius: 7,
        marginLeft: 7,
        marginRight: 7
    },
    outerContainer: {
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 30,
        backgroundColor: '#4E3A52',
        height: height * 1.05,
        width,
    },
    card: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    amount: {
        fontSize: 28,
        color: '#FFF',
    },
    unit: {
        color: '#FFF',
        justifyContent: 'flex-end'
    },
    titleText:{
        color: '#FFF',
        marginLeft: 28,
        marginTop:5
    },
    titleView:{
        position: 'relative',
        top: 35,
        alignSelf: 'center',
        width:'100%',
        height: '18%',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    text:{
        color: '#FFF'
    },
    cloudText:{
        color: '#FFF',
        fontSize: 30,
    },
    tempText:{
        color: '#FFF',
        fontSize: 50,

    },

};