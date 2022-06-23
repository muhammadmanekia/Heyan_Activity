import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import Timer from '../TimerScreen/TimerScreen';
import HorizontalScrollTabs from '../../Components/HorizontalScrollTabs/HorizontalScrollTabs';

function TrackActivityScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.leftArrow}
        onPress={() => navigation.navigate('Home')}>
        <FontistoIcon
          name="angle-left"
          size={20}
          color={'white'}
          style={{paddingLeft: 20}}
        />
      </TouchableOpacity>
      <Text style={styles.title}>What Activity Do You Plan To Perform?</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.containerShadow}>
          <TouchableOpacity
            style={[
              styles.activityScroll,
              {marginLeft: 50, overflow: 'hidden'},
            ]}
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#324755',
  },
  title: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 100,
    marginHorizontal: 50,
  },
  activityScroll: {
    width: 136,
    height: 182,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    marginTop: 150,
    marginHorizontal: 10,
  },
});

export default TrackActivityScreen;
