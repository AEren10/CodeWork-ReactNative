import React from 'react'
import { FlatList,View,Text } from 'react-native'
import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card'
import styles from './Basket.style'


function Basket(){
    
        const baskets = useSelector((state) => state.baskets.baskets);

        const render = ({ item }) =><Card removeActive={true}  job={item} page={false} />
       
        return(
            baskets.length === 0
                ?
                <View style={styles.container}>
                    <Text style={styles.text}>Yout basket is empty!</Text>
                </View>
                :
                <FlatList
                    data={baskets}   
                    renderItem={render}
                />
        )
    
}

export default Basket;