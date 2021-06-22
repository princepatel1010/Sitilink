import React from 'react';
import { View, Image, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import styles from './style';
import { Drawer } from 'react-native-paper';

const DrawerMenu = (props) => {

    return (

        <View style={{ flex: 1 }}>

            <DrawerContentScrollView {...props}>

            <View style={{ flexDirection: 'row', alignItems: 'center', height: 63, width: 170, marginTop: 40, marginBottom: 20, marginLeft: -10 }}>
                    <View>
                        <DrawerItem
                            icon={() => (<Image source={require('../../../assets/images/avatar.png')} style={{ height: 55, width: 60 }} />)}
                            label=""
                            onPress={() => { props.navigation.navigate('Login') }}
                            style={{ marginLeft: 26, marginBottom: 10 }}
                            labelStyle={styles.drawerText}
                        />
                    </View>

                    <View style={{ flexDirection: 'column', marginStart: -60, }}>
                        <Text style={{ lineHeight: 22.12, fontSize: 14, color: '#0F56B3', fontWeight: '700' }}>HELLO</Text>
                        <Text style={{ lineHeight: 36, fontSize: 30, color: '#414141', fontWeight: '700' }}>Preet</Text>
                    </View>
                </View>

                <View style={{ marginTop: 18, marginLeft: 24, marginBottom: 20 }}>
                    <Text style={styles.titleText}>MENU</Text>
                </View>
                {/* <DrawerItem
                    icon={() => (<Image source={require('../../../assets/images/icons/user_icon.png')} style={{ height: 24, width: 24 }} />)}
                    label="Login"
                    onPress={() => { props.navigation.navigate('Home') }}
                    style={{ marginLeft: 26, marginBottom: 10 }}
                    labelStyle={styles.drawerText}
                /> */}
                <DrawerItem
                    icon={() => (<Image source={require('../../../assets/images/icons/phone_call_icon.png')} style={{ height: 24, width: 24 }} />)}
                    label="Contact Us"
                    onPress={() => { props.navigation.navigate('Login') }}
                    style={{ marginLeft: 26 }}
                    labelStyle={styles.drawerText}
                />
                <DrawerItem
                    icon={() => (<Image source={require('../../../assets/images/icons/notification.png')} style={{ height: 24, width: 24 }} />)}
                    label="Notifications"
                    onPress={() => { props.navigation.navigate('Contect Us') }}
                    style={{ marginLeft: 26, marginBottom: 10 }}
                    labelStyle={styles.drawerText}
                />
                
                <View style={{ marginLeft: 24, marginTop: 38, marginBottom: 30 }}>
                    <Text style={styles.titleText}>POPULAR SECTION</Text>
                </View>
                <DrawerItem
                    icon={() => (<Image source={require('../../../assets/images/icons/friends.png')} style={{ height: 24, width: 24 }} />)}
                    label="Invite friends"
                    onPress={() => { props.navigation.navigate('Contect Us') }}
                    style={{ marginLeft: 26, marginBottom: 10 }}
                    labelStyle={styles.drawerText}
                />
                <DrawerItem
                    icon={() => (<Image source={require('../../../assets/images/icons/direction.png')} style={{ height: 24, width: 24 }} />)}
                    label="My trips"
                    onPress={() => { props.navigation.navigate('Contect Us') }}
                    style={{ marginLeft: 26, marginBottom: 10 }}
                    labelStyle={styles.drawerText}
                />
                <Drawer.Section style = {{marginBottom: 15, marginTop: 180, marginLeft: 20}}>
                    <DrawerItem
                        label = 'Logout'
                        labelStyle = {{fontFamily: 'Manrope-Bold', fontSize: 16}}
                        icon = {({color, size}) => (
                            <Image 
                                source = {require('../../../assets/images/icons/Logout.png')}
                            />
                        )}
                    />
                </Drawer.Section>
            </DrawerContentScrollView>
        </View>
    )
}

export default DrawerMenu;
