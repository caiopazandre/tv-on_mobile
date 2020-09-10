import React from 'react';
import { View, StatusBar } from 'react-native';
import styles from './styles';
import Video from '../../components/Video';
import { useKeepAwake } from 'expo-keep-awake';


export default function Channel({ route }) {
  useKeepAwake();
  const {link} = route.params;
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Video link={link}/>
    </View>
  );
}