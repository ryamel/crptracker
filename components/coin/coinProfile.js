import React, { useState, useEffect, useContext } from 'react';
import { 
	SafeAreaView,
	ScrollView, 
	StyleSheet, 
	Text, 
	View,
	Image
} from 'react-native';
// context... coin data and favourite list
import CoinDataContext from '../context/coinDataContext';
// navigation
//import { useNavigation } from '@react-navigation/native';
// images
import { coinImages } from '../media/coinDict';
// number format
var numeral = require('numeral');
// component
import CoinStats from './coinStats';
import Chart from './chart';



const CoinProfile = ({route, ...props}) => {
	const market = useContext(CoinDataContext);
	// console.log(JSON.stringify(coinData.data, null, 3));
	let coinData = market.data.filter((coin) => coin.symbol == route.params.coinSym);
	coinData = coinData[0];
	console.log(JSON.stringify(coinData.timeSeries, null, 3));

	return (
		<SafeAreaView>
			<ScrollView style={style.body}>

				<Text>{coinData.name} ({coinData.symbol})</Text>
				<Text>${numeral(coinData.price).format('0,0.00[00000]')} USD</Text>

				<Chart data={coinData.timeSeries} />
				<CoinStats coinData={coinData} />


			</ScrollView>
		</SafeAreaView>
	)
}


const style = StyleSheet.create({
	coinImage: {
		height: 20,
		width: 20
	}
})

export default CoinProfile;