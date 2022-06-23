import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Circle from 'react-native-vector-icons/FontAwesome';

const Complete = props => {
  return (
    <View style={styles.container}>
      <View style={{marginTop: 60}}>
        <Text style={styles.text}>CURRENT ACTIVITY</Text>
        <Text style={styles.text}>{props.route.params.title}</Text>
      </View>
      <View style={{paddingTop: '30%'}}>
        <Circle
          name="circle"
          size={150}
          color="white"
          style={{top: 150, left: 30, position: 'absolute'}}
        />
        <Icon
          name="checkmark-circle"
          size={200}
          color="#16EB0E"
          backgroundColor="white"
          style={{zIndex: 1}}
        />
      </View>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Text style={[styles.text, {fontSize: 24, fontWeight: '500'}]}>
          Well Done!
        </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
          <Text style={styles.text}>Go Back to Task Logs</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#65C969',
  },
  text: {
    margin: 10,
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '300',
    fontFamily: 'HelveticaNeue-Medium',
    letterSpacing: 2,
  },
});

export default Complete;
