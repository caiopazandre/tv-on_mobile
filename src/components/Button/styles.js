import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomWidth:1,
        borderColor: '#FFA500',
        height: 60,
        paddingLeft: '5%',
    }, 
    text:{
        fontSize: 23,
        fontWeight: '900',
        color: '#7f5200',
        paddingLeft: '5%',
    },
    image:{
        width: 40,
        height: 40,

    }
});
export default styles;