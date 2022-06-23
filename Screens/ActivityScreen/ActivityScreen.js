import {View, Text} from 'react-native';
import React, {useState} from 'react';
import WeekActivityScreen from '../WeekActivityScreen/WeekActivityScreen';
import MonthActivityScreen from '../MonthActivityScreen/MonthActivityScreen';

const ActivityScreen = () => {
  const [toggle, setToggle] = useState('week');

  const toggleHandler = event => {
    setToggle(event);
  };
  return (
    <View>
      {toggle === 'week' ? (
        <WeekActivityScreen toggleHandler={toggleHandler} />
      ) : (
        <MonthActivityScreen toggleHandler={toggleHandler} />
      )}
    </View>
  );
};

export default ActivityScreen;
