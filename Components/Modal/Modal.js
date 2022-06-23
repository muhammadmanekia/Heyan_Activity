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

const ModalHandler = ({
  monthNames,
  weekDates,
  weekMonths,
  setIndex,
  modalToggle,
  addTask,
  title,
  description,
  editTask,
  sectId,
}) => {
  const [titleVal, setTitleVal] = useState(title ? title : '');
  const [descriptionVal, setDescriptionVal] = useState(
    description ? description : '',
  );

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  flex: 15,
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginBottom: 15,
                }}>
                Add Task
              </Text>
              <TouchableOpacity
                style={[
                  styles.button,
                  styles.buttonClose,
                  {alignContent: 'flex-end', alignSelf: 'stretch', flex: 1},
                ]}
                onPress={() => modalToggle()}>
                <Text style={styles.textStyle}>X</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginBottom: 15, width: '100%'}}>
              <Text style={styles.modalText}>Title</Text>
              <TextInput
                onChangeText={newTextVal => setTitleVal(newTextVal)}
                value={titleVal}
                placeholder="Title"
                style={{borderBottomColor: 'gray', borderBottomWidth: 0.2}}
              />
            </View>

            <View style={{marginBottom: 15, width: '100%'}}>
              <Text style={styles.modalText}>Description</Text>
              <TextInput
                onChangeText={newTextVal => setDescriptionVal(newTextVal)}
                value={descriptionVal}
                placeholder="Description"
                style={{borderBottomColor: 'gray', borderBottomWidth: 0.2}}
              />
            </View>

            <TouchableOpacity
              style={[
                styles.button,
                styles.buttonClose,
                {backgroundColor: '#4a4de7'},
              ]}
              onPress={() => (
                editTask
                  ? editTask(setIndex, sectId, titleVal, descriptionVal)
                  : addTask(setIndex, titleVal, descriptionVal),
                setTitleVal(''),
                setDescriptionVal(''),
                modalToggle()
              )}>
              <Text style={[styles.textStyle, {color: 'white'}]}>Add Task</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 300,
  },
  button: {
    borderRadius: 10,
    padding: 8,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '',
  },
  buttonClose: {
    backgroundColor: 'white',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  modalText: {
    textAlign: 'left',
    fontWeight: '500',
    marginBottom: 5,
  },
});

export default ModalHandler;
