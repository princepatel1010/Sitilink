import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',        
    },

    headerTextContainer: {
        marginTop: 140,
        marginLeft: 30,
    },

    headerText: {
        fontFamily: 'RobotoMono-Medium',
        lineHeight: 63,
        letterSpacing: 3,
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 48,
    },

    cityInputContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',

    },

    sectionStyle: {
        flexDirection: 'row-reverse',
        margin: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2F4F4',
        borderColor: '#000',
        height: 50,
        borderRadius: 10,
        width: 160,
    },

    imageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
        backgroundColor: '#F2F4F4',
    },

    busDataContainer: {
        flex: 1,
        margin: 15,
        marginBottom: 15,

    },

    busData: {
        height: 70,
        borderRadius: 25,
        backgroundColor: '#F8F9F8',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 7,
    },

    busIconContainer: {
        justifyContent: 'center',
        marginStart: 12
    },

    busInfoContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginStart: 20,
        marginEnd: 40
    },

    locationFont: {
        fontFamily: 'Poppins-Regular',
        fontWeight: '400',
        color: 'rgba(51, 51, 51, 1)',
        fontSize: 20,
        lineHeight: 24,
        marginEnd: 12
    },

    timeFont: {
        fontFamily: 'Poppins-Regular',
        color: 'rgba(51, 51, 51, 1)',
        fontSize: 15,
        lineHeight: 27
    },

    nextBtn: {
        alignSelf: 'flex-end'
    },

    text: {
        fontSize: 18
    },

    routeModalContainer:
    {
        marginTop: 200,
        marginBottom: 125,
        marginRight: 25,
        marginLeft: 25,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        flex: 1
    },

    routeModalConatainer: {
        marginTop: 200,
        marginBottom: 100,
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 23,
        backgroundColor: '#ffffff',
        flex: 1
    },

    indicatorContainer: {
        backgroundColor: 'pink',
        margin: 15
    },


    labelContainer: {
        flex: 1,
        flexDirection: 'row',
        margin: 15,
        backgroundColor: 'grey',
        justifyContent: 'space-evenly',
        
    },

    searchHeaderContainer: {
        marginTop: 50,
        marginStart: -22,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    searchHeaderText: {
        fontFamily: 'RobotoMono-Medium',
        lineHeight: 63,
        letterSpacing: 3,
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 48,
    },

    searchInputContainer: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'center'
    },

    placeListContainer: {
        flex: 1,
        margin: 22,
    },
    labelContainer: {
        margin: 20,
        marginLeft: 0,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
      },

});

export const customStyles = {
    stepIndicatorSize: 17,
    currentStepIndicatorSize: 15,
    separatorStrokeWidth: 1,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: 'rgba(0, 230, 118, 1)',
    stepStrokeWidth: 0,
    stepStrokeFinishedColor: 'rgba(0, 230, 118, 1)',
    stepStrokeUnFinishedColor: 'grey',
    separatorFinishedColor: 'rgba(0, 230, 118, 1)',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: 'rgba(0, 230, 118, 1)',
    stepIndicatorUnFinishedColor: 'white',
    stepIndicatorCurrentColor: 'white',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: 'rgba(0, 230, 118, 1)',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    labelAlign: 'flex-start',
    currentStepLabelColor: 'rgba(0, 230, 118, 1)'
}


export default styles;


