import React from 'react'
import { StyleSheet } from 'react-native'
import { Directions } from 'react-native-gesture-handler'

export default StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:'white',
    },
    content:{
    },
    title:{
        
        fontSize:30,
        fontWeight:'bold',
    },
    location:{
        fontSize:18,
        fontWeight:'800',
        marginTop:5,
        color:'grey'
    },
    level:{
        fontSize:18,
        fontWeight:'800',
        marginTop:5,
        color:'grey'
    },
    inner_container:{
        marginTop:15,
    },
    detailTitle:{
        fontSize:25,
        textAlign:'center',
        fontWeight:'bold',
    },
    desc:{
        marginTop:6,
    },
    btn:{
        flexDirection:'row',
        marginBottom:25,
    }

})