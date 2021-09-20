import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, useContext} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import useCoinData from './hooks/useCoinData';
import Navigation from './navigation';

import useFavCoinList from './hooks/useFavCoinList';

import { CoinDataProvider } from './context/coinDataContext';
import { FavListProvider } from './context/favCoinListContext';





export default function App() {
  let isLoadingComplete = useCachedResources();
  let colorScheme = useColorScheme();
  let coinData = useCoinData();
  let [favList, addCoinToFav, removeCoinFromFav] = useFavCoinList();



  if (!isLoadingComplete || coinData == null) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <CoinDataProvider value={coinData}>
          <FavListProvider value={[favList, addCoinToFav, removeCoinFromFav]}>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </FavListProvider> 
        </CoinDataProvider> 
      </SafeAreaProvider>
    );
  }
}
