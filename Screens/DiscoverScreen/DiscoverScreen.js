import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import HorizontalScrollTabs from '../../Components/HorizontalScrollTabs/HorizontalScrollTabs';

export default function DiscoverScreen({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>
          Discover{'\n'}Activities
        </Text>
        <View style={styles.horizontalLine} />
        <Text style={{color: 'white', fontSize: 18}}>
          Discover Fun New Activities Below:
        </Text>
      </View>
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Search Activities"
          style={{paddingHorizontal: 20, width: 290}}></TextInput>
        <TouchableOpacity
          style={{
            backgroundColor: '#D97D54',
            width: 55,
            height: 55,
            float: 'right',
            borderRadius: 8,
            justifyContent: 'center',
          }}>
          <Icon
            name="search"
            size={25}
            color="white"
            style={{alignSelf: 'center'}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          padding: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Popular Near You</Text>
        <TouchableOpacity style={{marginLeft: 'auto'}}>
          <Text style={{color: 'gray'}}>See All Activities {'>'}</Text>
        </TouchableOpacity>
      </View>
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
      <View
        style={{
          padding: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
          Featured Activities
        </Text>
      </View>
      <View>
        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1520&q=80https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1520&q=80',
          }}
          style={{
            width: 320,
            height: 210,
            borderRadius: 25,
            alignSelf: 'center',
            padding: 20,
            margin: 15,
            shadowRadius: 8,
            shadowOpacity: 0.7,
            shadowColor: '#757575',
            borderRadius: 9,
            shadowOffset: {
              width: 0,
              height: 3,
            },
          }}
          imageStyle={{borderRadius: 25}}>
          <Text
            style={{
              marginTop: 'auto',
              color: 'white',
              fontSize: 30,
              fontWeight: 'bold',
            }}>
            Yoga
          </Text>
          <Text
            style={{
              color: 'white',
            }}>
            Moderate Intensity
          </Text>
        </ImageBackground>
      </View>
      <View>
        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1474418397713-7ede21d49118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1453&q=80',
          }}
          style={{
            width: 320,
            height: 210,
            borderRadius: 25,
            alignSelf: 'center',
            padding: 20,
            margin: 15,
            shadowRadius: 8,
            shadowOpacity: 0.7,
            shadowColor: '#757575',
            borderRadius: 9,
            shadowOffset: {
              width: 0,
              height: 3,
            },
          }}
          imageStyle={{borderRadius: 25}}>
          <Text
            style={{
              marginTop: 'auto',
              color: 'white',
              fontSize: 30,
              fontWeight: 'bold',
            }}>
            Meditation
          </Text>
          <Text
            style={{
              color: 'white',
            }}>
            Low Intensity
          </Text>
        </ImageBackground>
      </View>
      <View>
        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
          }}
          style={{
            width: 320,
            height: 210,
            borderRadius: 25,
            alignSelf: 'center',
            padding: 20,
            margin: 15,
            shadowRadius: 8,
            shadowOpacity: 0.7,
            shadowColor: '#757575',
            borderRadius: 9,
            shadowOffset: {
              width: 0,
              height: 3,
            },
          }}
          imageStyle={{borderRadius: 25}}>
          <Text
            style={{
              marginTop: 'auto',
              color: 'white',
              fontSize: 30,
              fontWeight: 'bold',
            }}>
            Weight Lifting
          </Text>
          <Text
            style={{
              color: 'white',
            }}>
            High Intensity
          </Text>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 200,
    padding: 20,
    backgroundColor: '#87BCBF',
  },
  horizontalLine: {
    borderBottomColor: '#F0F3F4',
    borderBottomWidth: 1,
    marginVertical: 15,
    width: 50,
  },
  searchBar: {
    // flex: 1,
    flexDirection: 'row',
    width: 345,
    height: 55,
    shadowRadius: 8,
    shadowOpacity: 1,
    shadowColor: '#757575',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    // borderColor: 'black',
    // borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'center',
    top: -30,
    backgroundColor: 'white',
  },
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
