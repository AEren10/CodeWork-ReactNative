import React from 'react'
import { Pressable, Text, View } from 'react-native'
import styles from './Card.style'
import Button from '../Button/Button'
import { useDispatch,useSelector } from 'react-redux';
import { removeFavorites } from '../../context/SliceFavorites';
import { removeBasket } from '../../context/SliceBasket';
import CounterButton from '../CounterButton/CounterButton';
import { increment } from '../../context/SliceCounter';
import { decrement } from '../../context/SliceCounter';

export default ({ job, handlePress, removeActive, page, handleCounter }) => {

    const dispatch = useDispatch()

    const count = useSelector((state)=> state.Counter.Counter);

    const text = page ? "Favorites" : "Basket"

    return (
        <Pressable style={styles.container} onPress={handlePress} >
            <Text style={styles.title} >{job.name}</Text>
            <Text style={styles.company}>{job.company.name}</Text>
            <View style={styles.locationContainer}>
                <Text style={styles.location}>{job.locations[0].name}</Text>
            </View>
            <Text style={styles.level}>{job.levels[0].name}</Text>
            {removeActive ? 
                <Button text={`Remove from ${text}`} onPress={() => page 
                ? dispatch(removeFavorites()) 
                : dispatch(removeBasket()) }/> 
                : null}
            {handleCounter && 
                <View style={styles.btn_container}>
                <Text style={styles.btn_text}>Total: {count} </Text>
                    <View style={styles.btn_innercontainer}>
                        <CounterButton text={"+"} onPress={() => dispatch(increment())} /> 
                        <CounterButton text={"-"} onPress={() => count > 1 ?
                                                    dispatch(decrement()) :
                                                    dispatch(removeBasket())} />  
                    </View>
                </View>
                }
            
        </Pressable>
    )
}