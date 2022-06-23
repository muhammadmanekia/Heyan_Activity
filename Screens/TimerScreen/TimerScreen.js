import React, {useState, useEffect} from 'react';
import {View, Text, Animated, StyleSheet, TouchableOpacity} from 'react-native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import Icon from 'react-native-vector-icons/EvilIcons';

const Timer = props => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [duration, setDuration] = useState(5);
  const [changeDuration, setChangeDuration] = useState(0);

  const onComplete = () => {
    if (duration !== 0) {
      setChangeDuration(!changeDuration);
    }
    console.log('onComplete');
    // setDuration(10);
    console.log(duration);
    // return [true, 1];
  };
  const children = ({remainingTime}) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    var minutesString = `${minutes}`;
    var secondsString = `${seconds}`;

    if (minutes < 10) {
      minutesString = '0' + minutes;
    }

    if (seconds < 10) {
      secondsString = '0' + seconds;
    }

    return `${minutesString}:${secondsString}`;
  };

  // console.log(props.route.params.title);

  useEffect(() => {
    console.log(changeDuration);
    if (duration == 5) {
      setDuration(10);
    }

    if (duration == 10) {
      setDuration(5);
    }

    if (duration == 0) {
      return;
    }
  }, [changeDuration]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={{alignSelf: 'flex-start', marginTop: 50, marginLeft: 15}}>
        <Icon name="chevron-left" color="white" size={30} />
      </TouchableOpacity>
      <View style={{marginTop: 10}}>
        <Text style={styles.text}>CURRENT ACTIVITY</Text>
        <Text style={styles.text}>Title</Text>
      </View>
      <View style={{paddingTop: '30%'}}>
        <CountdownCircleTimer
          isPlaying={isPlaying}
          key={changeDuration}
          duration={duration}
          size={220}
          strokeWidth={12}
          colors={'#D97D54'}
          onComplete={onComplete}>
          {({remainingTime}) => (
            <Animated.Text style={{color: 'white', fontSize: 36}}>
              {children({remainingTime})}
            </Animated.Text>
          )}
        </CountdownCircleTimer>
      </View>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Text style={[styles.text, {fontSize: 24, fontWeight: '500'}]}>
          {duration == 5 ? "You've got this!" : 'Take a break. You deserve it'}
        </Text>
        <TouchableOpacity
          onPress={() => (
            props.navigation.navigate('Complete', {
              title: 'Title',
            }),
            console.log('Complete'),
            setDuration(0)
          )}
          style={{marginTop: 90}}>
          <Icon name="check" size={80} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#344856',
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

export default Timer;
