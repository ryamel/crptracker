import React, { useEffect, useState, useContext} from 'react';
import axios from 'axios';
import { coinList } from '../coinList';

// load all coin data

export default function useCoinData() {
	const [coinData, setCoinData] = useState(null);

	useEffect(() => {
		loadCoinData();
	}, []);


	const loadCoinData = async () => {
		try {
			let end = (+ new Date())/1000; // unix timestamp in seconds
			let start = end - 31556926; // 1 year in unix timestamp seconds
			let accessKey = 'gudlof43pliaewjm1di9pb';
			let data_points = '2';
			let URL = `https://api.lunarcrush.com/v2?data=assets&key=${accessKey}&data_points=${data_points}&interval=day&time_series_indicators=open&symbol=${coinList.toString()}`;

			axios.get(URL)
				.then(res => {
					setCoinData(res.data);
					//console.log(JSON.stringify(res.data, null, 3));
				})
				.catch(res => console.log(res))
		} 
		catch (e) {
			console.warn(e);
			console.log(e);
		}
	}

	return coinData;
}
