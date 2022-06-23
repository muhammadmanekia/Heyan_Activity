import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';

export default function UserScreen() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.header}
        blurRadius={50}
        source={{
          uri: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
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
          }}
        />
        <View
          style={{marginLeft: 'auto', alignItems: 'center', marginRight: 10}}>
          <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>
            Cole Scott
          </Text>
          <Text style={{fontSize: 18, color: 'white'}}>San Diego, CA</Text>
        </View>
      </ImageBackground>
      <TouchableOpacity
        style={{
          width: 178,
          height: 50,
          borderRadius: 30,
          borderColor: 'gray',
          borderWidth: 0.5,
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
          margin: 20,
        }}>
        <Text>EDIT PROFILE</Text>
      </TouchableOpacity>

      <View>
        <View
          style={{
            paddingHorizontal: 15,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{margin: 10, fontWeight: 'bold', fontSize: 18}}>
            Your Friends
          </Text>
          <TouchableOpacity style={{marginLeft: 'auto'}}>
            <Text style={{color: 'gray'}}>See All Friends {'>'}</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal>
          {[...Array(5)].map(x => {
            return (
              <ImageBackground
                source={{
                  uri: 'https://images.unsplash.com/photo-1598966739654-5e9a252d8c32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                }}
                key={x}
                imageStyle={{borderRadius: 37.5}}
                style={{
                  width: 75,
                  height: 75,
                  margin: 5,
                }}></ImageBackground>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  header: {
    height: 280,
    width: 'auto',
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    padding: 20,
    flexDirection: 'row',
  },
});
