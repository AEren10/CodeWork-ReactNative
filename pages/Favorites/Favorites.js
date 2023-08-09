import React from 'react'
import { FlatList,View,Text } from 'react-native'
import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card'
import styles from './Favorites.style'


function Favorites({navigation}){

    const favorites = useSelector((state) => state.favorites.favorites);

    const render = ({ item }) =><Card removeActive={true} page={true}  job={item} handlePress={() => handlePressedJob(item)} />
   
    function handlePressedJob(item){
        navigation.navigate("Details",{item})
    }

    return(
        favorites.length === 0
            ?
            <View style={styles.container}>
                <Text style={styles.text}>You don't have any favourite job yet!</Text>
            </View>
            :
            <FlatList
                data={favorites}   
                renderItem={render}
            />
    )
}

export default Favorites;