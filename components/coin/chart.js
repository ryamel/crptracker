import React, { useState, useEffect, useContext } from 'react';
import { 
	StyleSheet, 
	Text, 
	View
} from 'react-native';
import { VictoryBar, VictoryChart, VictoryLine } from 'victory';


const Chart = (props) => {
	console.log(props.timeSeries);
	return (
		<View style={style.body}>
{/*			<VictoryChart>
				<VictoryLine data={props.data}/>
			</VictoryChart>
*/}	
		<Text>Chart</Text>
		</View>
	)
}


const style = StyleSheet.create({
	body: {

	}
})

export default Chart;