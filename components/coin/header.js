import React, {useState} from 'react';
import { 
	SafeAreaView, 
	ScrollView, 
	StatusBar, 
	StyleSheet, 
	Text, 
	useColorScheme, 
	View,
	Button,
	TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Header = (props) => {
	const [search, setSearch] = useState('');

	return (
		<View style={style.headerContainer}>
			<Icon 
				name='search'
				size={25} 
				color='black'
				style={style.iconSearch} 
			/>
			<TextInput 
				placeholder='Search' 
				style={style.searchField}
				onChangeText={setSearch}
				value={search}
			/>
			<Icon 
				name='bars' 
				size={40} 
				color='black'
				style={style.iconSettings} 
			/>
			{/*<Button title='Press me' onPress={console.log('Pressed')} />*/}
		</View>
	);
};



const style = StyleSheet.create({
	headerContainer: {
		height: 50,
		borderBottomWidth: 1,
		flexDirection: "row",
		alignItems: 'center',
		justifyContent: "space-around"
	},
	searchField: {
		height: 50,
		paddingLeft: 10,
		fontSize: 20,
		flex: 6
	},
	iconSettings: {
		flex: 1
	},
	iconSearch: {
		paddingLeft: 10
	}
})



export default Header;
