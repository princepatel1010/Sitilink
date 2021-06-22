import React from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity, Image, FlatList, ScrollView, TouchableWithoutFeedback, Button, Dimensions } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import styles, { customStyles } from './style';
import { ScreenData, ModelData } from '../../../api/dataFunctions';
import _ from 'lodash';
import { createFilter } from 'react-native-search-filter';
import { event } from 'react-native-reanimated';


const KEYS_TO_FILTERS = ['station'];

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      searchScreenVisible: false,
      currentPosition: 3,
      allPlaces: this.screenData,
      allBuses: this.screenData,
      searchQuery: '',
      // searchData: this.screenData,
      // filteredSearch : this.screenData,
      searchTerm: '',
      searchIcon: false,
      selectedRoute: null,
      indicatorLabels: [],
      fromValue: '',
      toValue: '',
      fromFocus: true,
      fromBlur: false,
      toFocus: false,
      toBlur: true,
      fromValueForSearch: '',
      toValueForSearch: '',
      filteredBuses: this.screenData,
      noData: true
    }
  }

  // Methods for handle route scrolling
  handleOnScroll = event => {
    this.setState({
      scrollOffset: event.nativeEvent.contentOffset.y,
    });
  };

  handleScrollTo = p => {
    if (this.scrollViewRef.current) {
      this.scrollViewRef.current.scrollTo(p);
    }
  };

  // Methods for searching
  handleSearchFrom(term) {
    this.setState({ searchTerm: term, fromValue: term, isFocused: false })
  }

  handleSearchTo(term) {
    this.setState({ searchTerm: term, toValue: term, isFocused: true })
  }


  handleSuggest = (place) => {
    if (this.state.fromFocus == true && this.state.toBlur == true) {
      this.setState({ fromValue: place })
      this.fromInputRef.blur();
      this.toInputRef.focus();
    } else if (this.state.toFocus == true || this.state.fromBlur == true) {
      this.setState({ toValue: place })
      this.toInputRef.blur()
    }
  }


  // renderFrom = () => {
  //   {
  //     this.filteredSearch.map(place => {
  //       return (
  //         <TouchableOpacity>
  //           <View>
  //             <Text>{place.station}</Text>
  //           </View>
  //         </TouchableOpacity>
  //       )
  //     })
  //   }
  // }

  // renderTo = ({ item }) => {
  //   return (
  //     <View>
  //       <Text>{item.station}</Text>
  //     </View>
  //   )
  // }

  // Data for Rendering
  screenData = ScreenData();
  modeldata = ModelData();

  // Method for HomeScreen Bus List Rendering
  // renderItem = ({ item }) => {
  //   return (
  //     <TouchableOpacity onPress={() => this.onOpenModal(item.id)}>
  //       <View style={styles.busData}>
  //         <View style={styles.busIconContainer}>
  //           <Image
  //             source={require('../../../assets/images/bus.png')}
  //             style={{ height: 36, width: 36 }}
  //           />
  //         </View>
  //         <View style={styles.busInfoContainer}>
  //           <Text style={styles.locationFont}>{item.station.length < 25 ? `${item.station.substring(0, 25)}` : `${item.station.substring(0, 25)}...`}</Text>
  //           <Text style={styles.timeFont}>{item.time} · Arriving</Text>
  //         </View>
  //       </View>
  //     </TouchableOpacity>
  //   )
  // }

  // Methods for Pop-Model

  onOpenModal = i => {
    this.setState({
      showPopup: true,
      selectedRoute: i // When a post is clicked, mark it as selected
    });
  };

  onCloseModal = () => {
    this.setState({ showPopup: false });
  };


  renderModel = () => {
    if (this.state.selectedRoute !== null) {
      const route = this.modeldata.find(i => i.id == this.state.selectedRoute).route;
      const time = this.modeldata.find(i => i.id == this.state.selectedRoute).time;
      return (

        <Modal transparent={true}
          visible={this.state.showPopup}
          swipeDirection={['down']}
          scrollTo={this.handleScrollTo}
          onRequestClose={() => this.onCloseModal()}
        >
          <TouchableWithoutFeedback onPress={() => this.onCloseModal()}>
            <View style={{ flex: 1, backgroundColor: '#000000aa', }}>
              <TouchableWithoutFeedback onPress={() => { }} >
                <View style={{ marginTop: 200, marginBottom: 100, padding: 40, marginRight: 20, marginLeft: 20, borderRadius: 23, backgroundColor: '#ffffff', flex: 1 }}>
                  <View style={{ alignSelf: 'flex-end', margin: -5 }}>
                    <TouchableOpacity onPress={() => { this.onCloseModal() }}>
                      <Image
                        source={require('../../../assets/images/icons/cross.png')}
                      />
                    </TouchableOpacity>
                  </View>

                  <View style={{ marginTop: 10, flex: 1, }}>
                    <ScrollView
                      ref={this.scrollViewRef}
                      onScroll={this.handleOnScroll}
                      scrollEventThrottle={30}
                      showsVerticalScrollIndicator={false}
                      indicatorStyle={'default'}
                    >
                      <View style={{ marginStart: 5 }}>
                        <StepIndicator
                          customStyles={customStyles}
                          labels={route}
                          renderStepIndicator={({ position, stepStatus, label, currentPosition }) => {
                            if (stepStatus == 'finished') {
                              return (
                                <Image source={require('../../../assets/images/tik.png')} />
                              )
                            } else if (stepStatus == 'unfinished') {
                              return (
                                <Image source={require('../../../assets/images/dot.png')} />
                              )
                            }
                          }}

                          currentPosition={this.state.currentPosition}
                          direction={'vertical'}
                          stepCount={route.length}
                          renderLabel={({ position, stepStatus, label, currentPosition }) => {
                            return (
                              <View style={{ margin: 20, marginBottom: 3, marginLeft: 0, flexDirection: 'column', justifyContent: 'space-between' }}>
                                <Text style={{ fontFamily: 'Poppins-Regular', color: 'rgba(0, 0, 0, 1)', fontSize: 20, marginStart: 15 }} numberOfLines={1}>{route[position].length < 18 ? `${route[position].substring(0, 18)}` : `${route[position].substring(0, 18)}...`}</Text>
                                <Text style={{ fontFamily: 'Poppins-Regular', color: 'rgba(0, 0, 0, 1)', fontSize: 13, marginStart: 15 }}>{time[position]}</Text>
                              </View>
                            )
                          }}
                        />
                      </View>
                    </ScrollView>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

      )
    }
  };


  // handleMainSearch = () => {
  //   this.setState({
  //     fromValueForSearch: this.state.fromValue,
  //     toValueForSearch: this.state.toValue,
  //     searchScreenVisible: false,
  //     filteredBuses: this.screenData.filter(createFilter(this.state.toValueForSearch, KEYS_TO_FILTERS))
  //   })
  // }


  handleMainSearch = () => {
    this.setState({
      fromValueForSearch: this.state.fromValue,
      toValueForSearch: this.state.toValue,
      searchScreenVisible: false,
      filteredBuses: this.screenData.filter(createFilter(this.state.toValueForSearch, KEYS_TO_FILTERS))
    })
  }



  render() {

    const filteredSearch = this.screenData.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    const SearchedBuses = this.screenData.filter(createFilter(this.state.toValueForSearch, KEYS_TO_FILTERS))

    return (
      <View style={styles.container} >
        <View style={{ marginTop: 60, marginLeft: 20 }}>
          <TouchableOpacity onPress={() => { this.props.navigation.openDrawer() }}>
            <Image
              source={require('../../../assets/images/icons/hamburger.png')}
            />
          </TouchableOpacity>
        </View>

        {/* 
              Popup Model
          */}

        {this.renderModel()}
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Sitilink</Text>
        </View>
        <View style={styles.cityInputContainer}>
          <TouchableWithoutFeedback onPress={() => { this.setState({ searchScreenVisible: true }) }}>
            <View style={styles.sectionStyle}>
              <TextInput
                style={{ flex: 1, marginStart: 17, top: 3, fontSize: 22, fontFamily: 'Poppins-Light', fontWeight: '300' }}
                placeholder="From"
                value={this.state.fromValueForSearch}
                editable={false}
                allowFontScaling={true}
              />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => { this.setState({ searchScreenVisible: true }) }}>
            <View style={styles.sectionStyle}>
              <Image
                source={
                  require('../../../assets/images/search.png')
                }
                style={styles.imageStyle}
              />
              <TextInput
                style={{ flex: 1, marginStart: 17, top: 3, fontSize: 22, fontFamily: 'Poppins-Light', fontWeight: '300' }}
                placeholder="To"
                value={this.state.toValueForSearch}
                editable={false}
                allowFontScaling={true}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>

        {/* 
            search model
        */}

        <Modal visible={this.state.searchScreenVisible} >
          <View style={{ flex: 1, backgroundColor: '#000000aa', }}>
            <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
              <View style={styles.searchHeaderContainer}>
                <Text style={styles.searchHeaderText}>Sitilink</Text>
                <TouchableOpacity onPress={() => { this.setState({ searchScreenVisible: false, searchFrom: null, searchTo: null }) }}>
                  <Image
                    source={require('../../../assets/images/icons/cross.png')}
                    style={{ marginTop: 5 }}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.searchInputContainer}>
                <View style={styles.sectionStyle}>
                  <TextInput
                    style={{ flex: 1, marginStart: 17, top: 3, fontSize: 22, fontFamily: 'Poppins-Light', fontWeight: '300' }}
                    placeholder="From"
                    editable={true}
                    ref={input => this.fromInputRef = input}
                    onFocus={() => { this.setState({ fromFocus: true }) }}
                    onBlur={() => { this.setState({ fromBlur: false }) }}
                    onChange={() => this.setState({
                      fromFocus: true,
                      toFocus: false,
                      fromBlur: false,
                      toBlur: true
                    })}
                    autoFocus={true}
                    value={this.state.fromValue}
                    onChangeText={(term) => { this.handleSearchFrom(term) }}
                    allowFontScaling={true}
                  />
                </View>
                <View style={styles.sectionStyle}>
                  <TouchableOpacity onPress={this.handleMainSearch}>
                    <Image
                      source={
                        this.state.toValue == '' ? require('../../../assets/images/search.png') : require('../../../assets/images/search_blue.png')
                      }
                      style={styles.imageStyle}
                    />
                  </TouchableOpacity>
                  <TextInput
                    style={{ flex: 1, marginStart: 17, top: 3, fontSize: 22, fontFamily: 'Poppins-Light', fontWeight: '300' }}
                    placeholder="To"
                    editable={true}
                    ref={input => this.toInputRef = input}
                    onFocus={() => { this.setState({ toFocus: true }) }}
                    onBlur={() => { this.setState({ toBlur: false }) }}
                    onChange={() => this.setState({
                      fromFocus: false,
                      toFocus: true,
                      fromBlur: true,
                      toBlur: false
                    })}
                    value={this.state.toValue}
                    onChangeText={(term) => { this.handleSearchTo(term) }}
                    allowFontScaling={true}
                  />
                </View>
              </View>
              <ScrollView>
                {filteredSearch.map(place => {
                  return (
                    <TouchableOpacity onPress={() => { this.handleSuggest(place.station) }}>
                      <View>
                        <Text style={{ fontSize: 20, fontFamily: 'Poppins-Regular', marginStart: 20, marginTop: 20 }}>{place.station}</Text>
                      </View>
                    </TouchableOpacity>
                  )
                })}
              </ScrollView>
            </View>
          </View>
        </Modal>

        {/* <View style={styles.busDataContainer}>
          <FlatList
            data={SearchedBuses}
            renderItem={this.renderItem.bind(this)}
            // keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View> */}
        <ScrollView style={{margin: 20}} showsVerticalScrollIndicator={false}>
          {SearchedBuses.map(bus => {
            return (
              <TouchableOpacity onPress={() => this.onOpenModal(bus.id)}>
                <View style={styles.busData}>
                  <View style={styles.busIconContainer}>
                    <Image
                      source={require('../../../assets/images/bus.png')}
                      style={{ height: 36, width: 36 }}
                    />
                  </View>
                  <View style={styles.busInfoContainer}>
                    <Text style={styles.locationFont}>{bus.station.length < 25 ? `${bus.station.substring(0, 25)}` : `${bus.station.substring(0, 25)}...`}</Text>
                    <Text style={styles.timeFont}>{bus.time} · Arriving</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
    )
  }
}