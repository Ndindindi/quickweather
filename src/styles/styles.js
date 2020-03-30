'use-strict'
import { Dimensions } from 'react-native';


const { width, height } = Dimensions.get('window');

export const styles = {
     slide: {
        flex: 1,
        backgroundColor: '#783B62',
         borderRadius: 15
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
    activeDot:{
        backgroundColor: '#FFF',
        width: 13, height: 13,
        borderRadius: 7,
        marginLeft: 7,
        marginRight: 7
    },
    outerContainer:{
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 30,
        backgroundColor:'#4E3A52',
        height:height*1.05,
        width,
    },
};