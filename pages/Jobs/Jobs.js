import React from 'react'
import { Text,View } from 'react-native';
import UseFetch from '../../components/Hooks/UseFetch';
import RenderHTML from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import Card from '../../components/Card/Card'



function Jobs({navigation}){

    JOBS_URL = 'https://www.themuse.com/api/public/jobs?page=0';

    const data =  UseFetch(JOBS_URL)

    const renderJobCards = ({ item }) => <Card job={item} handlePress={() => handlePressedJob(item)} />

    function handlePressedJob(item){
        navigation.navigate("Details",{item})
    }

    return(
        
    <View>
        <FlatList  showsVerticalScrollIndicator={false}
            renderItem={renderJobCards}
            data={data.results}
        />
        
    </View>
    );
}

export default Jobs;