import React, {useContext} from 'react';
import { 
  SafeAreaView, 
  ScrollView, 
  StatusBar, 
  StyleSheet, 
  useColorScheme,
  Button,
  FlatList
} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import CoinHeader from '../components/coin/coinHeader';
import CoinDataContext from '../context/coinDataContext';
import CoinItem from '../components/coin/coinItem';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const coins = useContext(CoinDataContext);


  if (coins == null) {
    return null;
  } else {
    return (
      <View>
        <CoinHeader />
        <FlatList
          data={coins.data}
          renderItem={({item}) => <CoinItem item={item} favBtn={'add'} />} 
          keyExtractor = {(item, index) => index.toString()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
    labels: {
    fontSize: 15,
    flexDirection: 'row',
    justifyContent: 'center'
  },  
  heading: {
    flex: 1,
    paddingLeft: 12,
    paddingTop: 8,
    paddingBottom: 8
  }
});
