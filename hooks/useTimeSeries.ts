import React, { useEffect, useState, useContext} from 'react';
import axios from 'axios';
import { coinList } from '../coinList';
import accessKey from '../globalvar';

// load time series coin data

export default function useTimeSeries(coinSym: string) {
	const [timeSeries, setTimeSeries] = useState(null);

	useEffect(() => {
		loadTimeSeries();
	}, []);


	const loadTimeSeries = async () => {
		try {
			let end = (+ new Date())/1000; // unix timestamp in seconds
			let start = end - 31556926; // 1 year in unix timestamp seconds
			let data_points = '365';
			let URL = `https://api.lunarcrush.com/v2?data=assets&key=${accessKey}&data_points=${data_points}&interval=day&time_series_indicators=open&symbol=${coinSym}`;

			axios.get(URL)
				.then(res => {
					setTimeSeries(res.data.data[0].timeSeries);
					//console.log(JSON.stringify(res.data.data[0].timeSeries, null, 3));
				})
				.catch(res => console.log(res))
		} 
		catch (e) {
			console.warn(e);
			console.log(e);
		}
	}

	return timeSeries;
}
