import React from 'react';
import { Video } from 'expo-av';
import styles from './styles';

import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');

export default class VideoPlay extends React.Component {
  render() {
    return (
      <Video
        usePoster={true}
        source={{ uri: this.props.link }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="contain"
        shouldPlay
        isLooping={false}
        useNativeControls
        posterSource={require('../../assets/loading.png')}
        style={styles.videoMini}
      />
    );
  }
}