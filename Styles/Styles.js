import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
  horizontalLine: {
    borderBottomColor: '#F0F3F4',
    borderBottomWidth: 1,
    marginTop: 15,
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
    margin: 10,
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
  menu: {
    alignSelf: 'flex-end',
  },
});
