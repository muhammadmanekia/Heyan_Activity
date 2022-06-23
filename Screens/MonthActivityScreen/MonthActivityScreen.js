import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import {matrix} from '../../Components/WeekDates/WeekDates';

const MonthActivityScreen = ({toggleHandler}) => {
  const handleToggle = () => {
    toggleHandler('week');
  };
  const date = new Date();

  const CalenderHandler = () => {
    var rows = [];
    rows = matrix.map((row, rowIndex) => {
      var rowItems = row.map((item, colIndex) => {
        return (
          <Text
            style={[
              styles.EachDate,
              {
                fontWeight: rowIndex == 0 ? 'bold' : 'normal',
                backgroundColor: item == date.getDate() ? '#D97D54' : '#fff',
                color: item == date.getDate() ? '#fff' : '#000',
              },
            ]}
            key={colIndex}>
            {item != -1 ? item : ''}
          </Text>
        );
      });
      return (
        <View style={styles.RowStyle} key={rowIndex}>
          {rowItems}
        </View>
      );
    });
    return rows;
  };

  return (
    <ScrollView>
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <TouchableOpacity style={styles.leftArrow}>
            <FontistoIcon
              name="angle-left"
              size={30}
              color={'white'}
              style={{paddingRight: 5}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.rightArrow}>
            <FontistoIcon
              name="angle-right"
              size={30}
              color={'white'}
              style={{paddingRight: 5}}
            />
          </TouchableOpacity>
          <Text style={[styles.textDecor, {fontSize: 48, fontWeight: 'bold'}]}>
            JUNE
          </Text>
          <Text style={[styles.textDecor, {fontSize: 20}]}>
            Quote of the month
          </Text>
        </View>
        <View style={[styles.viewToggle, {marginBottom: 5}]}>
          <TouchableOpacity
            style={styles.ToggleViewButton}
            onPress={handleToggle}>
            <FontistoIcon
              name="nav-icon"
              size={15}
              color={'black'}
              style={{paddingRight: 5}}
            />
            <Text>WEEK</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ToggleViewButton}>
            <FontistoIcon
              name="nav-icon-grid"
              size={15}
              color={'black'}
              style={{paddingRight: 5}}
            />
            <Text>MONTH</Text>
          </TouchableOpacity>
        </View>
        <View>
          <CalenderHandler />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  sectionHeader: {
    height: 330,
    backgroundColor: '#D97D54',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textDecor: {
    color: 'white',
    padding: 8,
    fontFamily: 'HelveticaNeue-Thin',
  },
  progressCircle: {
    shadowRadius: 8,
    shadowOpacity: 0.5,
    shadowColor: '#757575',
    borderRadius: 100,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  leftArrow: {
    alignSelf: 'flex-start',
    justifyContent: 'center',
    position: 'absolute',
  },
  rightArrow: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    position: 'absolute',
  },
  viewToggle: {
    flexDirection: 'row',
    borderBottomColor: '#F0F3F4',
    borderBottomWidth: 0.5,
  },
  weekCalendar: {
    marginTop: 2,
    marginLeft: 15,
  },
  ToggleViewButton: {
    marginLeft: 15,
    margin: 5,
    flexDirection: 'row',
  },
  activityCircles: {
    marginLeft: 15,
    margin: 5,
    flexDirection: 'row',
  },
  DayStyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  activityCircle: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: 'white',
    shadowRadius: 4,
    shadowOpacity: 0.2,
    shadowColor: '#757575',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    margin: 6,
  },
  emptyCircle: {
    width: 60,
    height: 60,
    backgroundColor: 'lightgray',
    borderRadius: 100,
    margin: 6,
  },
  DateStyle: {
    textTransform: 'uppercase',
    color: 'gray',
    fontSize: 14,
  },
  EachDate: {
    flex: 1,
    height: 18,
    marginHorizontal: 15,
    textAlign: 'center',

    // Highlight current date
  },
  RowStyle: {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default MonthActivityScreen;
