import React from 'react';
import { View, StatusBar } from 'react-native';
import styles from './styles';
import Video from '../../components/Video';
import Banner from '../../components/Banner';

const bannerIdChannel = 'ca-app-pub-5924494372714654/6352205729';

export default function Channel({ route }) {
  const {link} = route.params;
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Video link={link}/>
      <View style={styles.banner}>
        <Banner type="banner" id={bannerIdChannel} />
      </View>
    </View>
  );
}