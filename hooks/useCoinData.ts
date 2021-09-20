import React, { useEffect, useState, useContext} from 'react';
import axios from 'axios';
import { coinList } from '../coinList';
import accessKey from '../globalvar';
// load all coin data

export default function useCoinData() {
	const [coinData, setCoinData] = useState(null);

	useEffect(() => {
		loadCoinData();
	}, []);


	const loadCoinData = async () => {
		try {
			let URL = `https://api.lunarcrush.com/v2?data=assets&data_points=0&key=${accessKey}&symbol=${coinList.toString()}`;
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
