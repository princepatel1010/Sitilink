import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, FlatList } from 'react-native';
import Data from '../../data/data';
import CustomTextInput from 'react-native-stylized-placeholder';

export default class HomeScreen extends React.Component {
  
  renderItem = ({item}) => {
    return(
    <View style={styles.busData}>
            <View style={styles.busIconContainer}>
              <Image 
                source={item.busIcon}
                style = {{height: 43, width: 40}}
              />
            </View>
            <View style={styles.busInfoContainer}>
              <Text style={styles.locationFont}>{item.arrivingLocation}</Text>
              <Text style={styles.numberFont}>{item.number}</Text>
            </View>
            <View style={styles.timeContainer}>
              <Text style={styles.timeFont}>{item.time}</Text>
            </View>
      </View>
    )
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={{marginTop: 60, marginLeft: 20}}>
          <Image 
            source = {require('../../assets/images/icons/hamburger.png')}
          />
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Sitilink</Text>
        </View>
        <View style={styles.cityInputContainer}>
          <View style={styles.sectionStyle}>
            <CustomTextInput
              style={{flex: 1, marginLeft: 15}}
              placeholder="From"
              allowFontScaling={true}
              placeholderStyle={{top: 12, left: 17, fontSize: 22, fontFamily: 'Poppins-Light', fontWeight: '300'}}
            />
          </View>
          <View style={styles.sectionStyle}>
            <Image
              source={
                require('../../assets/images/search.png')
              }
              style={styles.imageStyle}
            />
            <CustomTextInput
              style={{flex: 1, marginLeft: 15}}
              placeholder="To"
              allowFontScaling={true} 
              placeholderStyle={{top: 12, left: 17, fontSize: 22, fontFamily: 'Poppins-Light', fontWeight: '300'}}
            />
          </View>
        </View>
        <View style={styles.busDataContainer}>
          <FlatList 
            data = {Data}
            renderItem={this.renderItem}
            keyExtractor={item=> item.id}
          />
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  headerTextContainer : {
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
    marginLeft: 32,
    marginRight: 32

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
    backgroundColor: '#F2F4F4'
  },
  busDataContainer: {
    flex: 1,
    marginTop: 20,
    margin: 15,

  },
  busData: {
    height: 70,
    borderRadius: 25,
    backgroundColor: '#F8F9F8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 7
  },
  busIconContainer: {
    margin: 15, 
    alignContent: 'center', 
    width: 40,
    height: 43, 
  },
  busInfoContainer: {
    margin: 15,
    marginLeft: 0
  },
  timeContainer: {
    margin: 15
  },
  locationFont: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    color: 'rgba(51, 51, 51, 1)',
    fontSize: 16,
    lineHeight: 24
  },
  numberFont: {
      fontFamily: 'Poppins-Regular',
      fontWeight: '400',
      color: 'rgba(51, 51, 51, 1)',
      fontSize: 12,
      lineHeight: 18
  },
  timeFont: {
    fontFamily: 'Poppins-Medium',
      fontWeight: '500',
      color: 'rgba(51, 51, 51, 1)',
      fontSize: 18,
      lineHeight: 27
  }
})


