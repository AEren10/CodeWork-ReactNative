import React from 'react'
import { FlatList } from 'react-native'
import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card'
import UseFetch from '../../components/Hooks/UseFetch';

function Favorites(){

    const favorites = useSelector((state) => state.favorites.favorites);
    const render = ({ item }) => <Card job={item}/>
    
    JOBS_URL = `https://www.themuse.com/api/public/jobs?page=${favorites}`; //burada sorun war

    const data =  UseFetch(JOBS_URL)

    console.log(data)
    
    return(
        <FlatList
            data={data.name}   
            renderItem={render}
        />
    )
}

export default Favorites;