import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Modal,
  TextInput,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import CommunityIcon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
// import Timer from '../Timer/Timer';
import ModalHandler from '../../Components/Modal/Modal';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const weekDayNames = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const today = new Date();
const thisDate = today.getDate();
const thisMonth = today.getMonth();
const thisDay = today.getDay();

var weekDates = [];
var weekMonths = [];
var setIndex;
var prevDate;
var editTitle;
var editDescription;
var sectId;

const TaskLog = ({navigation}) => {
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [optionsButton, setOptionsButton] = useState(new Array(7).fill(false));

  const [tasks, setTasks] = useState([
    {
      date: '02/01',
      tasks: [
        {
          title: 'Finish English HW',
          description: 'Chapters 24 & 25',
        },
        {
          title: 'Math Homework',
          description: 'Solve worksheets and practice problems',
        },
      ],
    },
    {
      date: '02/05',
      tasks: [
        {
          title: 'Finish Science HW',
          description: 'Chapters 28 & 29',
        },
        {
          title: 'History Homework',
          description: 'Watch the documentary',
        },
      ],
    },
  ]);

  const findDate = (month, day) => {
    var month = month < 10 ? '0' + month : month;
    var day = day < 10 ? '0' + day : day;
    var date = month + '/' + day;

    return date;
  };

  const modalToggle = () => {
    setAddModalVisible(!addModalVisible);
  };

  const editModalToggle = () => {
    setEditModalVisible(!editModalVisible);
  };

  const addTask = (index, newtitle, description) => {
    var monthNow = weekMonths[index];
    var dateNow = weekDates[index];

    var date = findDate(monthNow, dateNow);

    var copyTasks = [...tasks];

    var found = false;

    if (date && tasks) {
      for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        if (task.date === date) {
          task.tasks.push({title: newtitle, description: description});
          found = true;
        }
      }
      if (!found) {
        copyTasks.push({
          date: date,
          tasks: [{title: newtitle, description: description}],
        });
      }
    }

    setTasks(copyTasks);
  };

  const handleOptionButtonOnChange = index => {
    const open = [...optionsButton];
    open.map((val, i) => {
      if (i !== index) {
        open[i] = false;
      }
    });
    open[index] = !open[index];
    setOptionsButton(open);
  };
  const editTask = (index, sectId, newTitle, newDescription) => {
    var monthNow = weekMonths[index];
    var dateNow = weekDates[index];

    var date = findDate(monthNow, dateNow);

    var copyTasks = [...tasks];

    var found = false;

    if (date && tasks) {
      for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        if (task.date === date) {
          task.tasks[sectId].title = newTitle;
          task.tasks[sectId].description = newDescription;
          found = true;
        }
      }
      if (!found) {
        copyTasks.push({
          date: date,
          tasks: [{title: newTitle, description: newDescription}],
        });
      }
    }

    setTasks(copyTasks);
  };
  const editModalTask = (index, id, title, description) => {
    var monthNow = weekMonths[index];
    var dateNow = weekDates[index];

    var setTaskDate = findDate(monthNow, dateNow);

    editTitle = title;
    editDescription = description;
    sectId = id;
    setEditModalVisible(!editModalVisible);
  };

  const ButtonOptions = ({index}) => {
    return (
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <TouchableOpacity
          onPress={() => ((setIndex = index), setAddModalVisible(true))}
          style={{paddingRight: 2}}>
          <CommunityIcon name="timer" color="#4a4de7" size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => ((setIndex = index), setAddModalVisible(true))}
          style={{paddingRight: 2}}>
          <MaterialIcon name="check-circle" color="green" size={20} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => ((setIndex = index), setAddModalVisible(true))}
          style={{paddingRight: 10}}>
          <Feather name="target" color="red" size={20} />
        </TouchableOpacity>
      </View>
    );
  };

  const taskOnDate = (month, day) => {
    var date = findDate(month, day);

    if (date && tasks) {
      for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        if (task.date === date) {
          return task.tasks;
        }
      }
    }

    return [{title: 'No tasks for the day'}];
  };

  return (
    <ScrollView>
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={[styles.textDecor, {fontSize: 48, fontWeight: 'bold'}]}>
            0/0
          </Text>
          <Text style={[styles.textDecor, {fontSize: 20}]}>
            TASKS COMPLETED
          </Text>
        </View>
        <View style={[styles.viewToggle, {marginBottom: 5}]}>
          <TouchableOpacity style={styles.ToggleViewButton}>
            <Text>WEEK</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ToggleViewButton}>
            <Text>MONTH</Text>
          </TouchableOpacity>
        </View>
        <View>
          {weekDayNames.map((day, index) => {
            console.log('ThisDate', weekMonths);
            prevDate = today.getDate();
            today.setDate(thisDate - thisDay + 1 + index);
            if (prevDate > today.getDate()) {
              today.setMonth(today.getMonth() + 1);
            }
            weekMonths.push(today.getMonth() + 1);
            weekDates.push(today.getDate());
            var info = taskOnDate(weekMonths[index], weekDates[index]);
            console.log(info);
            console.log(prevDate);
            return (
              <View key={index} style={{marginLeft: 8, marginRight: 8}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.DateStyle}>
                    {monthNames[weekMonths[index] - 1]}{' '}
                  </Text>
                  <Text style={styles.DateStyle}>{weekDates[index]}</Text>
                </View>
                <View>
                  <Text key={index} style={styles.DayStyle}>
                    {day}
                  </Text>
                </View>
                {info.map((i, id) => (
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      position: 'relative',
                    }}
                    key={id}>
                    <TouchableOpacity
                      key={id}
                      style={[
                        styles.dataStyle,
                        {
                          flex: 1,
                          flexDirection: 'row',
                          justifyContent: 'center',
                        },
                      ]}
                      onPress={
                        i.title !== 'No tasks for the day'
                          ? () => navigation.navigate('Timer', {title: i.title})
                          : null
                      }>
                      <Text
                        style={[
                          styles.DateStyle,
                          {
                            textAlign: 'center',
                            padding: 5,
                            fontSize: 16,
                            justifyContent: 'center',
                          },
                        ]}>
                        {i.title}
                      </Text>
                      <View
                        key={id}
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                          justifyContent: 'flex-end',
                          margin: 5,
                        }}>
                        <TouchableOpacity
                          key={id}
                          onPress={() => {
                            editModalTask(index, id, i.title, i.description);
                            console.log('Edit', id);
                          }}>
                          <MaterialIcon name="edit" size={18} />
                        </TouchableOpacity>
                      </View>
                    </TouchableOpacity>
                  </View>
                ))}
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    margin: 5,
                  }}>
                  {optionsButton[index] ? (
                    <ButtonOptions index={index} />
                  ) : null}
                  <Button
                    title="+"
                    key={index}
                    onPress={() => handleOptionButtonOnChange(index)}
                    color="blue"
                  />
                </View>
                {addModalVisible ? (
                  <ModalHandler
                    setIndex={setIndex}
                    modalToggle={modalToggle}
                    addTask={(index, title, description) =>
                      addTask(index, title, description)
                    }
                  />
                ) : null}
                {editModalVisible ? (
                  <ModalHandler
                    setIndex={setIndex}
                    modalToggle={editModalToggle}
                    sectId={sectId}
                    editTask={(index, id, title, description) =>
                      editTask(index, id, title, description)
                    }
                    title={editTitle}
                    description={editDescription}
                  />
                ) : null}
              </View>
            );
          })}
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
  viewToggle: {
    flexDirection: 'row',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.3,
  },
  ToggleViewButton: {
    marginLeft: 15,
    margin: 5,
  },
  DateStyle: {
    color: '#4d6371',
    textTransform: 'uppercase',
    fontSize: 14,
  },
  DayStyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  dataStyle: {
    borderColor: 'black',
    borderWidth: 2,
    margin: 5,
    borderRadius: 20,
  },
});

export default TaskLog;
