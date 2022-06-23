import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ActivityScreen from '../../Screens/ActivityScreen/ActivityScreen';
import TrackActivityScreen from '../../Screens/TrackActivityScreen/TrackActivityScreen';
// import Timer from '../Timer/Timer';

const MyStack = createStackNavigator();

function Stack() {
  return (
    <MyStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MyStack.Screen name="TrackActivity" component={TrackActivityScreen} />
    </MyStack.Navigator>
  );
}

export default Stack;
