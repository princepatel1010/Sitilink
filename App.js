import React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/homescreen/homeScreen';
import DrawerMenu from './src/components/drawermenu/drawerMenu';
import LoginScreen from './src/screens/loginScreen/loginScreen';
import ContectUsScreen from './src/screens/contectusScreen/contectusScreen';
import NotificationsScreen from './src/screens/notificationsScreen/notificationsScreen';
import InviteFriendsScreen from './src/screens/inviteFriendsScreen/invitefriendsScreen';
import MyTripsScreen from './src/screens/mytripsScreen/mytripsScreen';
import SplashScreen from 'react-native-splash-screen';

const Drawer = createDrawerNavigator();

export default class App extends React.Component {
  componentDidMount() {
      SplashScreen.hide();
  }
  render() {
    return(
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerMenu {...props}/>}>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Login" component={LoginScreen}/>
            <Drawer.Screen name="Contect Us" component={ContectUsScreen}/>
            <Drawer.Screen name="Notifications" component={NotificationsScreen}/>
            <Drawer.Screen name="Invite Firends" component={InviteFriendsScreen}/>
            <Drawer.Screen name="My Trips" component={MyTripsScreen}/>
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}
