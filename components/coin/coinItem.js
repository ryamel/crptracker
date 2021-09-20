import React, {useContext} from 'react';
import { 
	StyleSheet, 
	Text, 	
	View,
	TouchableOpacity,
	Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { coinImages } from '../../assets/coinDict';
import numeral from 'numeral';
import FavCoinListContext from '../../context/favCoinListContext';


const CoinItem = ({item, ...props}) => {
	let [favList, addCoinToFav, removeCoinFromFav] = useContext(FavCoinListContext); // coin data
	

	var { color, sym } = '';
	if (item.percent_change_24h > 0) {
		color = 'green';
		sym = 'caret-up';
	} else if (item.percent_change_24h == 0) {
		color = 'black';
		sym = '';
	} else if (item.percent_change_24h < 0) {
		color = 'red';
		sym = 'caret-down'; 
	}

	

	const favBtn = () => {
		if (favList.includes(item.symbol)) return <Ionicons name='star' size={18} color={'black'} onPress={() => removeCoinFromFav(item.symbol)} />
		if (!favList.includes(item.symbol)) return <Ionicons name='star-outline' size={18} color={'black'} onPress={() => addCoinToFav(item.symbol)} />
		// if (props.favBtn == 'add') return <Ionicons name='add-circle-outline' size={18} color={'black'} onPress={() => addCoinToFav(item.symbol)} />
		// if (props.favBtn == 'remove') return <Ionicons name="remove-circle-outline" size={18} color={'black'} onPress={() => removeCoinFromFav(item.symbol)} />
		return null;
	}

	if (!(color && sym)) {
		return null;
	} else {
		return (
		//  <TouchableOpacity onPress={() => navigation.navigate('CoinProfile', { coinSym: item.symbol})} >
			<View style={style.listItemView}>

				<View style={style.nameView}>
					<Image style={style.icon} source={coinImages.name[item.symbol]} />
					<View style={style.textView}>
						<View style={style.topData}>
							<Text>{item.symbol}  </Text>
						</View>
						<Text style={style.nameText}>{ item.name === item.symbol ? null : item.name}</Text>
					</View>	
				</View>

				<View style={style.perChange}>
					<Text style={style.perChangeText}> 
						<Icon style={style.perChangeSym} name={sym} size={15} color={color}/>
						{ ' ' + Math.abs(item.percent_change_24h) }%
					</Text>
				</View>

		
				<Text style={style.coinPrice} >{numeral(item.price).format('0,0.0000')}</Text>

				<View style={style.favBtnView}>
					{ favBtn() }
				</View>
				
			</View>
		)
	}
}





const style = StyleSheet.create({
	listItemView: {
		flexDirection: "row",
		paddingLeft: 15,
		paddingRight: 5,
		paddingTop: 15,
		paddingBottom: 15,
		borderBottomWidth: 1,
		borderColor: 'gray'
	},
	nameView: {
		flex: 6
	},
	nameText: {
		fontSize: 12
	},
	coinPrice: {
		flex: 4,
		fontSize: 14
	},
	topData: {
		flexDirection: 'row'
	},
	textView: {
		fontSize: 12,
		position: 'absolute',
		top: -8,
		left: 30
	},
	flexRow: {
		flexDirection: 'row'
	},
	icon: {
		position: 'absolute',
		top: 4,
		left: 0
	},
	perChange: {
		flex: 3
	},
	favBtnView: {
		flex: 1
	}
})


export default CoinItem;






