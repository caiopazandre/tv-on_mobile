import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    banner: {
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center'
    },
    containerWarning:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    textWarning: {
        textAlign: 'center',
        top: '5%',
        margin: '5%',
        fontSize: 18
    },
    imageWarning: {
        width: 50, 
        height: 50, 
        marginTop: '5%'
    },
    titleWarning: {
        textAlign: 'center', 
        top: '5%', 
        fontWeight: 'bold', 
        fontSize: 20 
    }

});
export default styles;