import {Text, TouchableOpacity, View, Image} from 'react-native';
import styles from '../../Styles/Styles';
import React from 'react';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import CommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default StatusCard = ({includeImages}) => {
  return (
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
      <View style={{flexDirection: 'row'}}>
        {includeImages ? (
          <Image
            source={{
              uri: 'https://tahititourisme.com/wp-content/uploads/2019/07/Tom-Servais-Tahiti-Surf-Pro-2017servais17_0332781140x550px.jpg',
            }}
            style={{
              flex: 1,
              width: null,
              height: 100,
              resizeMode: 'contain',
              margin: 10,
              alignSelf: 'center',
              zIndex: 1,
            }}
          />
        ) : null}
        {/* <Image
          source={{
            uri: 'https://tahititourisme.com/wp-content/uploads/2019/07/Tom-Servais-Tahiti-Surf-Pro-2017servais17_0332781140x550px.jpg',
          }}
          style={{
            flex: 1,
            width: null,
            height: 100,
            margin: 10,
            alignSelf: 'center',
            resizeMode: 'contain',

            zIndex: 1,
          }}
        /> */}
      </View>
      <View style={styles.horizontalLine} />
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
  );
};
