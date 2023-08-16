import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import UseFetch from '../../components/Hooks/UseFetch';

import Card from '../../components/Card/Card';

function Jobs({ navigation }) {
  const JOBS_URL = 'https://www.themuse.com/api/public/jobs?page=0';

  const data = UseFetch(JOBS_URL);

  function handlePressedJob(item) {
    navigation.navigate('Details', { item });
  }

  const renderJobCards = ({ item }) => <Card removeActive={false} job={item} handlePress={() => handlePressedJob(item)} />;

  return (

    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        renderItem={renderJobCards}
        data={data.results}
      />

    </View>
  );
}

export default Jobs;
