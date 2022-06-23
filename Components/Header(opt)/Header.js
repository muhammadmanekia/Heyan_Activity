import React, {useState} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

Icon.loadFont();

const openMenu = () => {
  Alert.alert('DSDA');
};

function Header() {
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={openMenu} style={{zIndex: 1}}>
          <Icon
            name="align-left"
            size={25}
            color="black"
            backgroundColor="transparent"
            style={styles.menuIcon}></Icon>
        </TouchableOpacity>
        <View style={styles.headerTitle}>
          <Text style={styles.headerText}>heyan</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '40%',
    alignItems: 'flex-end',
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    paddingBottom: 10,
  },
  menuIcon: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginLeft: 16,
  },
  headerTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -41,
    flex: 1,
  },
  headerText: {
    fontSize: 30,
    fontFamily: 'PoiretOne-Regular',
  },
});

export default Header;
