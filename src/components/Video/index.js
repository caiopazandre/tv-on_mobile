import React from 'react';
import { Video } from 'expo-av';
import styles from './styles';

import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');

export default class VideoPlay extends React.Component {
  render() {
    return (
      <Video
        source={{ uri: this.props.link }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="contain"
        shouldPlay
        isLooping={false}
        useNativeControls
        posterStyle={{width: '100%', height: '120%'}}
        usePoster={true}
        posterSource={require('../../assets/load.png')}
        style={styles.videoMini}
      />
    );
  }
}