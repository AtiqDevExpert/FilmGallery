import React, { useState, useEffect } from 'react';
import {View, SafeAreaView} from 'react-native';
import { getAllSeries } from "../config/DataApp";
import Styles from '../config/Styles';
import AppLoading from '../components/AppLoading';
import SerieCard from '../components/SerieCard';
import LoadMoreButton from '../components/LoadMoreButton';
import Empty from '../components/Empty';
import { FlatGrid } from 'react-native-super-grid';
import {isTablet} from 'react-native-device-info';

export default function Series(props) {

    const [loading, setLoading] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);
  	const [showButton, setshowButton] = useState(true);
	const [page, setPage] = useState(1);
	const [items, setItems] = useState([]);

	useEffect(() => {

		loadMore();

	}, []);

	const renderItem = (item, index) => {

		return (
			<SerieCard item={item} key={index}/>
			);
	};

  	const loadMore = () => {

    setLoading(true);
    setPage(page+1);

    getAllSeries(page).then((response) => {
              
        if (!items) {
        setItems(response);
    	setLoading(false);
        }else{
        setItems([...items, ...response]);
    	setLoading(false);
        }

        if (response.length <= 0) {
        setshowButton(false);
        }
        
        setIsLoaded(true);

    });

  };

  const renderButton = () => {

    return (
      <LoadMoreButton Indicator={loading} showButton={showButton} Items={items} Num={6} Click={() => loadMore()}/>
    )

  }

	if (isLoaded) {

    if (items.length <= 0) {

			return(
				<Empty/>
				);

		}else{

		return(

			<View style={Styles.FullHeightScreen}>
			<SafeAreaView>

			<FlatGrid
			itemDimension={isTablet() === true ? 200 : 140}
			spacing={15}
			data={items} 
			showsHorizontalScrollIndicator={false}
			showsVerticalScrollIndicator={false}
			renderItem={({item}) => (renderItem(item))}
			ListFooterComponent={renderButton}
			/>

			</SafeAreaView>
			</View>

			);

		}

	}else{
		return (
			<AppLoading/>
			);
	}

}

