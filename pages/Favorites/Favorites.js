import React from 'react'
import { FlatList } from 'react-native'
import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card'
import UseFetch from '../../components/Hooks/UseFetch';

function Favorites(){

    
    const favorites = useSelector((state) => state.favorites.favorites);
     

    const render = ({ item }) => <Card job={item} handlePress={() => handlePressedJob(item)} />
    
    function handlePressedJob(item){
        navigation.navigate("Details",{item})
    }
    
    return(
        <FlatList
            data={favorites}   
            renderItem={render}
        />
    )
}

export default Favorites;