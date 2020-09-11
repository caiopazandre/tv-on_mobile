import React, { Component } from 'react';
import { Video } from 'expo-av'
import VideoPlayer from 'expo-video-player'

export default class VideoPlay extends Component {
  
  render() {
    return (
        <VideoPlayer
          videoProps={{
            shouldPlay: true,
            resizeMode: Video.RESIZE_MODE_CONTAIN,
            source: {
              uri: this.props.link,
            },
          }}
          inFullscreen={true}	
          errorCallback={(err) => console.log('Error: ', err.message, err.type, err.obj)}
          switchToPortrait={() => console.log('Pass your logic to switchToPortrait prop')}
        />
    );
  }
}
