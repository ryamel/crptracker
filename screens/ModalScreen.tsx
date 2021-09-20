import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useContext} from 'react';
import { 
  SafeAreaView,
  Platform,
  ScrollView, 
  StyleSheet, 
  Image
} from 'react-native';
import { Text, View } from '../components/Themed';
import EditScreenInfo from '../components/EditScreenInfo';
var numeral = require('numeral');
import Chart from '../components/coin/chart';
import { coinImages } from '../assets/coinDict';
import CoinDataContext from '../context/coinDataContext';
import useTimeSeries from '../hooks/useTimeSeries';


export default function ModalScreen({route, ...props}) {
  const coins = useContext(CoinDataContext);
  const timeSeries = useTimeSeries(route.params.coinSym);

  
  let coinData = coins.data.filter((coin: {}) => coin.symbol == route.params.coinSym);
  coinData = coinData[0];

  // console.log('coin data:', coinData);
  // console.log(JSON.stringify(coinData.data, null, 3));

  //console.log(JSON.stringify(coinData.timeSeries, null, 3));

  if (timeSeries == null) {
    return <Text>Loading...</Text>
  } else {
    return (
      <ScrollView>
        <Text>Modal Screen</Text>
          <Text>{coinData.name} ({coinData.symbol})</Text>
          <Text>${numeral(coinData.price).format('0,0.00[00000]')} USD</Text>

          <Chart timeSeries={timeSeries} />

          <View><Text style={styleStats.header}>Market</Text></View>

          <View style={styleStats.statsContainer}>
            <View style={styleStats.labels}>
              <Text>Market Cap Ranking</Text>
              <Text>Market Cap (USD)</Text>
              <Text>Daily Volume Traded</Text>
              <Text>Max Supply</Text>
            </View>
            <View style={styleStats.values}>
              <Text># {coinData.market_cap_rank}</Text>
              <Text>$ {numeral(coinData.market_cap).format('0,0')}</Text>
              <Text>{numeral(coinData.volume_24h).format('0,0')}</Text>
              <Text>{numeral(coinData.max_supply).format('0,0')}</Text>
            </View>
          </View>

          <View><Text style={styleStats.header}>Percent Change</Text></View>

          <View style={styleStats.statsContainer}>
            <View style={styleStats.labels}>
              <Text>Change Day</Text>
              <Text>Change Week</Text>
              <Text>Change Month</Text>
            </View>
            <View style={styleStats.values}>
              <Text>% {coinData.percent_change_24h}</Text>
              <Text>% {coinData.percent_change_7d}</Text>
              <Text>% {coinData.percent_change_30d}</Text>
            </View>
          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  coinImage: {
    height: 20,
    width: 20
  }
});

const styleStats = StyleSheet.create({
  body: {
    padding: 5 
  },
  statsContainer: {
    flexDirection: 'row'
  },
  labels: {
    flex: 2
  },
  values: {
    flex: 3
  },
  header: {
    fontWeight: 'bold',
    paddingTop: 20
  }
});
