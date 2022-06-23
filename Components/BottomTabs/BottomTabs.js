import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Home from '../../Screens/HomeScreen/HomeScreen';
import TrackActivityScreen from '../../Screens/TrackActivityScreen/TrackActivityScreen';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import DiscoverScreen from '../../Screens/DiscoverScreen/DiscoverScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Stack from '../Stack/Stack';
import UserScreen from '../../Screens/UserScreen/UserScreen';
import ActivityScreen from '../../Screens/ActivityScreen/ActivityScreen';

const Tab = createBottomTabNavigator();

const CustomTabButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{top: -30, justifyContent: 'center', alignContent: 'center'}}
    onPress={onPress}>
    <View
      style={{
        width: 60,
        height: 60,
        borderRadius: 35,
        backgroundColor: '#D97D54',
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

const BottomTabs = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <SimpleLineIcon
                name="home"
                size={20}
                color={focused ? '#D97D54' : '#748c94'}
                style={{marginTop: 5, marginBottom: 5}}
              />
              <Text
                style={{
                  display: focused ? 'flex' : 'none',
                  color: focused ? '#D97D54' : '#748c94',
                  fontSize: 8,
                }}>
                HOME
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Task Logs"
        component={ActivityScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <SimpleLineIcon
                name="energy"
                size={20}
                color={focused ? '#D97D54' : '#748c94'}
                style={{marginTop: 5, marginBottom: 5}}
              />
              <Text
                style={{
                  display: focused ? 'flex' : 'none',
                  color: focused ? '#D97D54' : '#748c94',
                  fontSize: 8,
                }}>
                ACTIVITY
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Track Activity"
        component={Stack}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <SimpleLineIcon name="plus" size={40} color="white" />
            </View>
          ),
          tabBarButton: props => (
            <CustomTabButton
              {...props}
              onPress={() => navigation.navigate('TrackActivity')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <SimpleLineIcon
                name="magnifier"
                size={20}
                color={focused ? '#D97D54' : '#748c94'}
                style={{marginTop: 5, marginBottom: 5}}
              />
              <Text
                style={{
                  display: focused ? 'flex' : 'none',
                  color: focused ? '#D97D54' : '#748c94',
                  fontSize: 8,
                }}>
                DISCOVER
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UserScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <SimpleLineIcon
                name="user"
                size={20}
                color={focused ? '#D97D54' : '#748c94'}
                style={{marginTop: 5, marginBottom: 5}}
              />
              <Text
                style={{
                  display: focused ? 'flex' : 'none',
                  color: focused ? '#D97D54' : '#748c94',
                  fontSize: 8,
                }}>
                PROFILE
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
