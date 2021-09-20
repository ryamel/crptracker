import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; // local storage

// use the favourite coin list and methods





export default function useFavouriteCoin() {
  const [favList, setFavList] = useState<string[]>([]);


  useEffect(() => {
    async function getFavList() {
      try {
        const jsonValue = await AsyncStorage.getItem('@fav_coins');
        jsonValue !== null ? setFavList(JSON.parse(jsonValue)) : setFavList([])
        
      } catch (e) {
        console.log(e);
      }
    }

    getFavList()
  }, [])


  const addCoinToFav = async (coinAdd: string) => {
    try {
      console.log('Adding coin!...', coinAdd);

      if (!favList.includes(coinAdd)) {
        let updateList: string[] = favList;
        updateList.push(coinAdd);
        await AsyncStorage.setItem('@fav_coins', JSON.stringify(updateList));
        setFavList([...favList, coinAdd]);
      }
    }
    catch (e) {
      console.log(e);
    }
  }


  const removeCoinFromFav = async (coinRemove: string) => {
    try {
      console.log('Removing coin...', coinRemove);

      if (favList.includes(coinRemove)) {
        let ind = favList.indexOf(coinRemove);
        favList.splice(ind, 1);
        await AsyncStorage.setItem('@fav_coins', JSON.stringify(favList));
        setFavList(favList.filter(coin => coin !== coinRemove));
      }
    }
    catch (e) {
      console.log(e);
    }
  }



  return [favList, addCoinToFav, removeCoinFromFav]
}






