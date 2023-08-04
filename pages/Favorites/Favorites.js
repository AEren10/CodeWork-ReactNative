import React from 'react'
import { FlatList } from 'react-native'
import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card'
import UseFetch from '../../components/Hooks/UseFetch';

function Favorites(){

    const favorites = useSelector((state) => state.favorites.favorites);
    const render = ({ item }) => <Card job={item}/>
    
    // JOBS_URL = 'https://www.themuse.com/api/public/jobs?page=0';

    // const data =  UseFetch(`JOBS_URL${favorites}`)

    console.log(favorites)
    
    return(
        <FlatList
            data={[]}   
            renderItem={render}
        />
    )
}

export default Favorites;