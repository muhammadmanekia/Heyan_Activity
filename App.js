import React from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Drawer from './Components/Drawer/Drawer';
import Timer from './Screens/TimerScreen/TimerScreen';
import {NavigationContainer} from '@react-navigation/native';
import Complete from './Screens/CompleteScreen/CompleteScreen';
import SignIn from './Screens/SignInScreen/SignInScreen';
import TrackActivityScreen from './Screens/TrackActivityScreen/TrackActivityScreen';
import BottomTabs from './Components/BottomTabs/BottomTabs';
import ActivityScreen from './Screens/ActivityScreen/ActivityScreen';
import HorizontalScrollTabs from './Components/HorizontalScrollTabs/HorizontalScrollTabs';

const MyStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MyStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <MyStack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <MyStack.Screen name="HomeStack" component={Drawer} />
        {/* <MyStack.Screen name="BottomTabs" component={BottomTabs} /> */}
        <MyStack.Screen name="Timer" component={Timer} />
        <MyStack.Screen name="ActivityScreen" component={ActivityScreen} />
        <MyStack.Screen name="TrackActivity" component={TrackActivityScreen} />
        <MyStack.Screen name="Complete" component={Complete} />
        <MyStack.Screen
          name="HorizontalScrollTabs"
          component={HorizontalScrollTabs}
        />
      </MyStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
