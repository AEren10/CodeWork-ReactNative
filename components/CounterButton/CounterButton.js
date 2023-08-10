import React from 'react'
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import styles from './CounterButton.style'


function CounterButton({ text , onPress}){
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}
export default CounterButton;