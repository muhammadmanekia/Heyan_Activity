import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import {
  weekDates,
  weekMonths,
  weekDayNames,
  monthNames,
} from '../../Components/WeekDates/WeekDates';
import React from 'react';

const WeekActivityScreen = ({toggleHandler}) => {
  const handleToggle = () => {
    toggleHandler('month');
  };

  return (
    <ScrollView>
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <ProgressCircle
            percent={50}
            radius={100}
            borderWidth={8}
            shadowColor="#fff"
            bgColor="#D97D54"
            color="#D97D54"
            outerCircleStyle={styles.progressCircle}>
            <Text
              style={[styles.textDecor, {fontSize: 48, fontWeight: 'bold'}]}>
              0/0
            </Text>
            <Text style={[styles.textDecor, {fontSize: 20}]}>
              ACTIVITIES TRACKED
            </Text>
          </ProgressCircle>
        </View>
        <View style={[styles.viewToggle, {marginBottom: 5}]}>
          <TouchableOpacity style={styles.ToggleViewButton}>
            <FontistoIcon
              name="nav-icon"
              size={15}
              color={'black'}
              style={{paddingRight: 5}}
            />
            <Text>WEEK</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ToggleViewButton}
            onPress={handleToggle}>
            <FontistoIcon
              name="nav-icon-grid"
              size={15}
              color={'black'}
              style={{paddingRight: 5}}
            />
            <Text>MONTH</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.weekCalendar}>
          {weekDayNames.map((day, index) => (
            <View key={index + 7}>
              <Text style={styles.DateStyle} key={index + 10}>
                {monthNames[weekMonths[index]]} {weekDates[index]}
              </Text>
              <Text style={styles.DayStyle} key={index}>
                {day}
              </Text>
              <View style={styles.activityCircles}>
                <View key={index + 9} style={styles.activityCircle}></View>
                <View key={index + 11} style={styles.activityCircle}></View>
                <View key={index + 13} style={styles.emptyCircle}></View>
                <View key={index + 14} style={styles.emptyCircle}></View>
                <View key={index + 12} style={styles.emptyCircle}></View>
              </View>
            </View>
          ))}
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
});

export default WeekActivityScreen;
