import React, { useState, useEffect, useContext } from 'react';
import { 
	SafeAreaView,
	ScrollView, 
	StyleSheet, 
	Text, 
	View,
	Image
} from 'react-native';
// number format
var numeral = require('numeral');


const CoinStats = (props) => {

	return (
		<View style={style.body}>

			<View><Text style={style.header}>Market</Text></View>
			<View style={style.statsContainer}>
				<View style={style.labels}>
					<Text>Market Cap Ranking</Text>
					<Text>Market Cap (USD)</Text>
					<Text>Daily Volume Traded</Text>
					<Text>Max Supply</Text>
				</View>

				<View style={style.values}>
					<Text># {props.coinData.market_cap_rank}</Text>
					<Text>$ {numeral(props.coinData.market_cap).format('0,0')}</Text>
					<Text>{numeral(props.coinData.volume_24h).format('0,0')}</Text>
					<Text>{numeral(props.coinData.max_supply).format('0,0')}</Text>
				</View>
			</View>

			<View><Text style={style.header}>Percent Change</Text></View>
			<View style={style.statsContainer}>
				<View style={style.labels}>
					<Text>Change Day</Text>
					<Text>Change Week</Text>
					<Text>Change Month</Text>
				</View>

				<View style={style.values}>
					<Text>% {props.coinData.percent_change_24h}</Text>
					<Text>% {props.coinData.percent_change_7d}</Text>
					<Text>% {props.coinData.percent_change_30d}</Text>
				</View>
			</View>

		</View>
	)
}


const style = StyleSheet.create({
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
})

export default CoinStats;