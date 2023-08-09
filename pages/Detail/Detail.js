import React,{useEffect} from 'react'
import { View,Linking, Alert } from 'react-native';
import { Text ,useWindowDimensions} from 'react-native';
import { ScrollView } from 'react-native';
import RenderHTML from 'react-native-render-html';
import styles from './Detail.style'
import Button from '../../components/Button/Button'

import { useDispatch,} from 'react-redux';

import { addFavorites } from '../../context/SliceFavorites';

function Detail({route}){
    const {item} = route.params; 

    const dispatch = useDispatch()

    const { width } = useWindowDimensions() 
    const source = {
        html: `${item.contents}`
    };


    return(
        <ScrollView style = {styles.container} showsVerticalScrollIndicator={false}>
            <View style = {styles.content}>
                <Text style = {styles.title}>{item.name}</Text>
                <Text style = {styles.location}><Text style={{color:'red'}}>Location:</Text> {item.locations[0].name}</Text> 
               <Text style = {styles.level}><Text style={{color:'red'}}>Job Level:</Text> {item.levels[0].name}</Text> 
            </View>
            <View style = {styles.inner_container}>
                <Text style = {styles.detailTitle}>Job Details</Text>
                <View style = {styles.desc}>
                    <RenderHTML contentWidth={width} source={source} />
                </View>
                
            </View>
            <View style={styles.btn}>
                <Button text="Submit" onPress = {() => { Alert.alert('Successfully submitted!'),Linking.openURL(item.refs.landing_page)}} />
                <Button text="Favorite" onPress={() => { Alert.alert('Added to favorites!'),dispatch(addFavorites(item))}} />
            </View>
        </ScrollView>
        
    )
}

export default Detail;