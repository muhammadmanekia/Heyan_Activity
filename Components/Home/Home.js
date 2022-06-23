import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import CommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ComingSoon from '../ComingSoon/ComingSoon';

const Home = ({navigation}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Earlier Today</Text>
      <View style={styles.card}>
        <TouchableOpacity style={styles.menu}>
          <EntypoIcons name="dots-three-horizontal" color={'black'} size={14} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={{
              uri: 'https://cdn.pixabay.com/photo/2015/12/23/14/56/man-profile-1105761_1280.jpg',
            }}
            style={styles.profilePic}
          />
          <View style={{flex: 1, paddingRight: 15}}>
            <Text>Jamie Allender surfed for 1.5 hours at Sunset Cliffs</Text>
            <Text style={{fontSize: 10, fontWeight: '200', marginTop: 2}}>
              Today at 5:37 PM
            </Text>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: 'gray',
            borderBottomWidth: 0.2,
            marginTop: 15,
          }}></View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity style={styles.buttonInteraction}>
            <EntypoIcons name="heart-outlined" color={'#C8D1D3'} size={18} />
            <Text style={{paddingLeft: 2, color: '#C8D1D3'}}>LIKE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonInteraction}>
            <CommunityIcon
              name="comment-text-outline"
              color={'#C8D1D3'}
              size={18}
            />
            <Text style={{paddingLeft: 2, color: '#C8D1D3'}}>COMMENT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonInteraction}>
            <CommunityIcon name="share-outline" color={'#C8D1D3'} size={18} />
            <Text style={{paddingLeft: 2, color: '#C8D1D3'}}>SHARE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#F0F3F4',
    margin: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 70 / 2,
    marginRight: 10,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  menu: {
    alignSelf: 'flex-end',
  },
  buttonInteraction: {
    flexDirection: 'row',
    marginTop: 10,
    marginRight: 20,
    marginLeft: 20,
  },
  card: {
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 10,
    padding: 20,
    zIndex: 2,
    shadowRadius: 8,
    shadowOpacity: 0.2,
    shadowColor: '#757575',
    borderRadius: 9,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});

export default Home;
