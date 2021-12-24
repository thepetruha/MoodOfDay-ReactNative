import { StyleSheet } from 'react-native';
module.exports = StyleSheet.create({
    itemList: {
        height: 400,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        overflow: 'hidden',
    },
    contentList: {
        flex: 1,
        justifyContent: 'center',
    },
    contentCarousel: {
        flex: 7, 
        flexDirection:'row', 
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleAppText: {
        fontSize: 34, 
        marginTop: 20,
        textAlign: 'center', 
        fontWeight: 'bold',
        color: 'white'
    },
    img: {
        width: '100%',
        height: '100%',
    },
    bluerIMG: {
        flex: 1,
        position: 'absolute',
        zIndex: 9999
    }
});