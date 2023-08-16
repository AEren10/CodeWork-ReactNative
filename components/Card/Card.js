import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from './Card.style';
import Button from '../Button/Button';
import { removeFavorites } from '../../context/SliceFavorites';
import { removeBasket, increaseQuantity, decrementQuantity } from '../../context/SliceBasket';
import CounterButton from '../CounterButton/CounterButton';

export default function Card({
  job, handlePress, removeActive, page, handleCounter,
}) {
  const dispatch = useDispatch();

  // const quantity = useSelector((state)=> state.baskets.baskets);

  const text = page ? 'Favorites' : 'Basket';

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Text style={styles.title}>{job.name}</Text>
      <Text style={styles.company}>{job.company.name}</Text>
      <View style={styles.locationContainer}>
        <Text style={styles.location}>{job.locations[0].name}</Text>
      </View>
      <Text style={styles.level}>{job.levels[0].name}</Text>
      {removeActive
        ? (
          <Button
            text={`Remove from ${text}`}
            onPress={() => (page
              ? dispatch(removeFavorites(job))
              : dispatch(removeBasket(job)))}
          />
        )
        : null}
      {handleCounter
                && (
                <View style={styles.btn_container}>
                  <Text style={styles.btn_text}>
                    Total:
                    {job.quantity}
                  </Text>
                  <View style={styles.btn_innercontainer}>
                    <CounterButton text="+" onPress={() => dispatch(increaseQuantity(job))} />
                    <CounterButton
                      text="-"
                      onPress={() => (job.quantity > 1
                        ? dispatch(decrementQuantity(job))
                        : dispatch(removeBasket(job)))}
                    />
                  </View>
                </View>
                )}

    </Pressable>
  );
}
