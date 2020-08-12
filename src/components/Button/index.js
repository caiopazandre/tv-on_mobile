import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles';

export default class Button extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Image
          style={styles.image}
          source={this.props.image}
        />
        <Text style={styles.text}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

