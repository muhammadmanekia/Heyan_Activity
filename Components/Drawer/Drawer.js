import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import TrackActivityScreen from '../../Screens/TrackActivityScreen/TrackActivityScreen';
import TaskLog from '../TaskLog/TaskLog';
import BottomTabs from '../BottomTabs/BottomTabs';
import SignIn from '../../Screens/SignInScreen/SignInScreen';
import ActivityScreen from '../../Screens/ActivityScreen/ActivityScreen';
import Stack from '../Stack/Stack';
import Home from '../../Screens/HomeScreen/HomeScreen';
import SettingsScreen from '../../Screens/SettingsScreen/SettingsScreen';
import DiscoverScreen from '../../Screens/DiscoverScreen/DiscoverScreen';
import UserScreen from '../../Screens/UserScreen/UserScreen';

const MyDrawer = createDrawerNavigator();

function Drawer() {
  return (
    <MyDrawer.Navigator
      screenOptions={{
        headerShown: true,
        headerTitle: 'heyan',
        headerTitleStyle: {
          fontSize: 30,
          fontFamily: 'PoiretOne-Regular',
        },
        headerTintColor: 'black',
      }}
      initialRouteName="Home">
      <MyDrawer.Screen name="Home " component={BottomTabs} />
      <MyDrawer.Screen name="Discover" component={DiscoverScreen} />
      <MyDrawer.Screen name="Profile" component={UserScreen} />
      <MyDrawer.Screen name="Settings" component={SettingsScreen} />
      <MyDrawer.Screen
        name="Track Activity"
        component={Stack}
        options={{headerShown: false}}
      />
      <MyDrawer.Screen
        name="Log Out"
        component={SignIn}
        options={{headerShown: false}}
      />
    </MyDrawer.Navigator>
  );
}

export default Drawer;
