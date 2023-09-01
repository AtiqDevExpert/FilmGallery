import React, { useState, useEffect } from 'react';
import {ScrollView, View, SafeAreaView} from 'react-native';
import { Avatar, List } from 'react-native-paper';
import { getGenres } from "../config/DataApp";
import {map} from 'lodash';
import Styles from '../config/Styles';
import ConfigApp from '../config/ConfigApp';
import AppLoading from '../components/AppLoading';
import Empty from '../components/Empty';

export default function SeriesGenres(props) {

	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);

	useEffect(() => {

		getGenres().then((response) => {

			setItems(response);
			setIsLoaded(true);

		});

	}, []);

	const onChangeScreen = (screen, id, title) => {
		props.navigation.navigate(screen, {id: id, title: title});
	};

	if (isLoaded) {

    if (items.length <= 0) {

			return(
				<Empty/>
				);

		}else{

			return(

				<View style={Styles.FullHeightScreen2}>
				<ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
				<SafeAreaView>
				{map(items, (item) => (
			<List.Item
			key={item.genre_id}
			title={item.genre_title}
			underlayColor={"transparent"}
			titleStyle={Styles.TitleList}
			onPress={() => onChangeScreen('seriesbygenre', item.genre_id, item.genre_title)}
			left={props => <Avatar.Image style={{marginRight: 10}} source={{uri: `${ConfigApp.URL}${ConfigApp.BASEIMAGE}${item.genre_image}`}} />}
			right={props => <List.Icon {...props} style={Styles.IconList} icon="chevron-right" />}
			/>
					))}
				</SafeAreaView>
				</ScrollView>
				</View>

				);

		}

	}else{
		return (
			<AppLoading/>
			);
	}

}

