import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Switch,
} from 'react-native';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

import React from 'react';

export default function SettingsScreen() {
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: 'gray',
          margin: 20,
          marginTop: 40,
        }}
      />
      <View
        style={{
          width: 350,
          height: 390,
          backgroundColor: 'white',
          borderRadius: 20,
        }}>
        <TouchableOpacity
          style={{
            padding: 25,
            borderBottomColor: 'gray',
            borderBottomWidth: 0.4,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 15}}>Preference</Text>
          <Text style={{marginLeft: 'auto'}}>{'>'}</Text>
        </TouchableOpacity>
        <View
          style={{
            padding: 25,
            borderBottomColor: 'gray',
            borderBottomWidth: 0.4,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 15}}>Push Notifications</Text>
          <Switch style={{marginLeft: 'auto'}} />
        </View>
        <View
          style={{
            padding: 25,
            borderBottomColor: 'gray',
            borderBottomWidth: 0.4,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 15}}>Allow Access to My Contacts</Text>
          <Switch style={{marginLeft: 'auto'}} />
        </View>
        <View
          style={{
            padding: 25,
            borderBottomColor: 'gray',
            borderBottomWidth: 0.4,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 15}}>Allow My Location</Text>
          <Switch style={{marginLeft: 'auto'}} />
        </View>
        <View
          style={{
            padding: 25,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 15}}>Others Can See My Activity</Text>
          <Switch style={{marginLeft: 'auto'}} />
        </View>
      </View>
    </View>
  );
}
