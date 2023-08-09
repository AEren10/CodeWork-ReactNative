import React from 'react'
import { Pressable, Text, View } from 'react-native'
import styles from './Card.style'
import Button from '../Button/Button'
import { useDispatch,useSelector } from 'react-redux';
import { removeFavorites } from '../../context/SliceFavorites';
import { removeBasket } from '../../context/SliceBasket';

export default ({ job, handlePress, removeActive, page }) => {

    const dispatch = useDispatch()

    const text = page ? "Favorites" : "Basket"

    return (
        <Pressable style={styles.container} onPress={handlePress} >
            <Text style={styles.title} >{job.name}</Text>
            <Text style={styles.company}>{job.company.name}</Text>
            <View style={styles.locationContainer}>
                <Text style={styles.location}>{job.locations[0].name}</Text>
            </View>
            <Text style={styles.level}>{job.levels[0].name}</Text>
            {removeActive ? <Button text={`Remove from ${text}`} onPress={() => page 
                ? dispatch(removeFavorites()) 
                : dispatch(removeBasket()) }/> : null}
            
        </Pressable>
    )
}