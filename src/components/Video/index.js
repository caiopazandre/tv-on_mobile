import React from 'react';
import { Video } from 'expo-av';
import styles from './styles';

import { View } from 'react-native';

export default class VideoPlay extends React.Component {
  render() {
    return (
      <View>
        <Video
          source={{ uri: this.props.link }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="contain"
          shouldPlay
          isLooping={false}
          posterStyle={{ width: '100%', height: '100%' }}
          usePoster={true}
          posterSource={require('../../assets/load.png')}
          style={styles.videoMini}
        />
      </View>
    );
  }
}