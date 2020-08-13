import { StyleSheet, Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    videoMini: {
        width: width,
        height: height
    },
});
export default styles;