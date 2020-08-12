import { StyleSheet, Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    videoMini: {
        width: width/1.2,
        height: height/2
    },
});
export default styles;