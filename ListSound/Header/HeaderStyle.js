import { StyleSheet } from 'react-native';
module.exports = StyleSheet.create({
    titleAppBox: {
        flex: 1,
    },
    titleAppText: {
        fontSize: 34, 
        marginTop: 20,
        textAlign: 'center', 
        fontWeight: 'bold',
        color: 'white'
    },
    boxProfile: {
        flex: 1,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        color: 'white',
        backgroundColor: 'white',
        borderRadius: 12
    },
    profileImg: {
        width: 50,
        height: 50,
        backgroundColor: '#4d4d4d',
        borderRadius: 99,
        marginRight: 15
    },
    textProfile: {
        fontSize: 28,
        color: 'black',
    }
})