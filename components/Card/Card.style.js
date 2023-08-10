import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor:'white'
    },
    title: {
      
        fontSize: 20,
        fontWeight: 'bold',
    },
    company: {
        fontStyle: 'italic',
        fontSize:17,
        marginTop:7,
        marginBottom:7
    },
    locationContainer: {
        width: 150,
        backgroundColor: '#ef5350',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        alignItems: 'center',
    },
    location: {
      
        fontWeight: 'bold'
    },
    level: {
        textAlign: 'right',
        fontSize: 15,
        color: '#ef5350',
        fontWeight:'bold',
    },
    btn_container: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:10,
    },
    btn_innercontainer:{
        flexDirection:'row',   
    },
    btn_text:{
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center',   
    }
})