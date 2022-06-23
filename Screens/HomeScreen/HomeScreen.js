import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import StatusCard from '../../Components/StatusCard/StatusCard';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.sectionTitle}>Earlier Today</Text>
        <StatusCard />
        <StatusCard includeImages />
        <StatusCard />
        <StatusCard />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#F0F3F4',
  },
  scrollView: {
    marginHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
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
