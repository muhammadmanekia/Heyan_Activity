import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Timer from '../../Screens/TimerScreen/TimerScreen';

export default function HorizontalScrollTabs({navigation}) {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.containerShadow}>
        <TouchableOpacity
          style={[styles.activityScroll, {marginLeft: 50, overflow: 'hidden'}]}
          onPress={() => navigation.navigate('Timer')}>
          <Image
            style={{width: 136, height: 107}}
            source={{
              uri: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            }}
          />
          <Text
            style={{
              alignSelf: 'center',
              marginTop: 'auto',
              marginBottom: 'auto',
              fontWeight: 'bold',
            }}>
            Surfing
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerShadow}>
        <TouchableOpacity
          style={[styles.activityScroll, {overflow: 'hidden'}]}
          onPress={() => navigation.navigate('Timer')}>
          <Image
            style={{width: 136, height: 107}}
            source={{
              uri: 'https://images.unsplash.com/photo-1501389446297-06c4c50b5ee8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            }}
          />
          <Text
            style={{
              alignSelf: 'center',
              marginTop: 'auto',
              marginBottom: 'auto',
              fontWeight: 'bold',
            }}>
            Hiking
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerShadow}>
        <TouchableOpacity
          style={[styles.activityScroll, {overflow: 'hidden'}]}
          onPress={() => navigation.navigate('Timer')}>
          <Image
            style={{width: 136, height: 107}}
            source={{
              uri: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1520&q=80',
            }}
          />
          <Text
            style={{
              alignSelf: 'center',
              marginTop: 'auto',
              marginBottom: 'auto',
              fontWeight: 'bold',
            }}>
            Yoga
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  containerShadow: {
    shadowOpacity: 1,
    shadowColor: '#707070',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  activityScroll: {
    width: 136,
    height: 182,
    backgroundColor: 'white',
    borderRadius: 15,
    // justifyContent: 'center',
    margin: 10,
  },
});
