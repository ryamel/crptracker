import React, {useEffect, useState, useContext} from 'react';
import { 
  SafeAreaView, 
  ScrollView, 
  StatusBar, 
  useColorScheme, 
  Button,
  StyleSheet,
  FlatList
} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import CoinDataContext from '../context/coinDataContext';
import FavCoinListContext from '../context/favCoinListContext';
import CoinHeader from '../components/coin/coinHeader';
import CoinItem from '../components/coin/coinItem';
import useFavCoinList from '../hooks/useFavCoinList';

export default function TabTwoScreen() {
  let coins = useContext(CoinDataContext); // coin data
  let [favList, addCoinToFav, removeCoinFromFav] = useContext(FavCoinListContext); // coin data

  // take favCoin which is only a list of the coin symbols. and then get the coin data from 'CoinContext'
  let favListData = coins.data.filter((coin) => {
    return favList.includes(coin.symbol)
  })


  if (favList.length == 0) {
    return <View><Text style={style.noCoinsText}>No Favourite coins</Text></View>
  } else {
    return (
      <View>
        <CoinHeader />
        <FlatList
          data={favListData}
          renderItem={({item}) => <CoinItem item={item} favBtn={'remove'} />} />
      </View>
    )
  }
}

const style = StyleSheet.create({
    noCoinsText: {
      textAlign: 'center',
      paddingTop: 50,
      fontWeight: 'bold'
    }
  });
