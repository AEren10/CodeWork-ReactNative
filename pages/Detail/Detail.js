import {
  View, Linking, Alert, Text, useWindowDimensions, ScrollView,
} from 'react-native';

import RenderHTML from 'react-native-render-html';
import { useDispatch } from 'react-redux';
import styles from './Detail.style';
import Button from '../../components/Button/Button';

import { addFavorites } from '../../context/SliceFavorites';
import { addBasket } from '../../context/SliceBasket';

function Detail({ route }) {
  const { item } = route.params;

  const dispatch = useDispatch();

  const { width } = useWindowDimensions();
  const source = {
    html: `${item.contents}`,
  };

  const submitOnPress = () => {
    Alert.alert('Successfully submitted!');
    Linking.openURL(item.refs.landing_page);
  };
  const submitOnPressFavorites = () => {
    Alert.alert('Added to favorites!');
    dispatch(addFavorites(item));
  };
  const submitOnPressBaskets = () => {
    Alert.alert('Added to Basket!');
    dispatch(addBasket(item));
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.location}>
          <Text style={{ color: 'red' }}>Location:</Text>
          {' '}
          {item.locations[0].name}
        </Text>
        <Text style={styles.level}>
          <Text style={{ color: 'red' }}>Job Level:</Text>
          {' '}
          {item.levels[0].name}
        </Text>
      </View>
      <View style={styles.inner_container}>
        <Text style={styles.detailTitle}>Job Details</Text>
        <View style={styles.desc}>
          <RenderHTML contentWidth={width} source={source} />
        </View>

      </View>
      <View style={styles.btn_btn}>
        <View style={styles.btn}>
          <Button text="Submit" onPress={submitOnPress} />
          <Button text="add Favorite" onPress={submitOnPressFavorites} />
        </View>
        <Button text="add Basket" onPress={submitOnPressBaskets} />
      </View>
    </ScrollView>

  );
}

export default Detail;
