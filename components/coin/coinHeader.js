import React from 'react';
import { 
	ScrollView,
	StyleSheet, 
	Text, 	
	View
} from 'react-native';


const CoinHeader = () => {
	return(
		<View style={style.labels}>
			<Text style={style.heading}>Coin</Text>
			<Text style={style.heading}>24H Change</Text>
			<Text style={style.heading}>Price</Text>
		</View>
	)
}

const style = StyleSheet.create({
	labels: {
		fontSize: 15,
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: 'white'
	},	
	heading: {
		flex: 1,
		paddingLeft: 12,
		paddingTop: 8,
		paddingBottom: 8
	}
})

export default CoinHeader;





