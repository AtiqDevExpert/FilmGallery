import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Avatar, List, IconButton } from 'react-native-paper';
import {map, size} from 'lodash';
import Strings from '../config/Strings';
import Styles from '../config/Styles';
import ConfigApp from '../config/ConfigApp';
import { getFavMovies, removeMovieBookmark, getFavSeries, removeSerieBookmark } from "../config/DataApp";
import Empty from '../components/Empty';

export default function Favorites(props) {

	const [isLoaded, setIsLoaded] = useState(false);
	const [movies, setMovies] = useState([]);
	const [series, setSeries] = useState([]);

	const onChangeScreen = (screen, id) => {
		props.navigation.navigate(screen, {id});
	};

	useEffect(() => {

		getFavMovies().then((response) => {

			setMovies(response);
			setIsLoaded(true);

		});

	}, []);

	useEffect(() => {

		getFavSeries().then((response) => {

			setSeries(response);
			setIsLoaded(true);

		});

	}, []);

	const removeMBookmark = async (id) => {

		removeMovieBookmark(id).then(token => {
			if (token === true) {
				getFavMovies().then((response) => {

					setMovies(response);

				});
			}

		});

	};

	const removeSBookmark = async (id) => {

		removeSerieBookmark(id).then(token => {
			if (token === true) {
				getFavSeries().then((response) => {

					setSeries(response);

				});
			}

		});

	};

	const renderMovies = () => {

		if (!movies || size(movies) < 1 ) {

			return null;

		}else {

			return (
				<View>
				<List.Subheader style={Styles.TitleListHeader}>{Strings.ST2}</List.Subheader>

				{map(movies, (item, index) => (
					<List.Item
					key={index}
					title={item.title}
					underlayColor={"transparent"}
					titleStyle={Styles.TitleList}
					onPress={() => onChangeScreen('moviedetails', item.id)}
					left={props => <Avatar.Image style={{marginRight: 10}} source={{uri: `${ConfigApp.URL}${ConfigApp.BASEIMAGE}${item.image}`}} />}
					right={props => <IconButton {...props} style={Styles.IconList} onPress={() => removeMBookmark(item.id)} icon="trash-can" />}
					/>

					))}

				</View>
				);
		}

	};

	const renderSeries = () => {

		if (!series || size(series) < 1 ) {

			return null;

		}else {

			return (
				<View>
				<List.Subheader style={Styles.TitleListHeader}>{Strings.ST3}</List.Subheader>

				{map(series, (item, index) => (
					<List.Item
					key={index}
					title={item.title}
					underlayColor={"transparent"}
					titleStyle={Styles.TitleList}
					onPress={() => onChangeScreen('seriedetails', item.id)}
					left={props => <Avatar.Image style={{marginRight: 10}} source={{uri: `${ConfigApp.URL}${ConfigApp.BASEIMAGE}${item.image}`}} />}
					right={props => <IconButton {...props} style={Styles.IconList} onPress={() => removeSBookmark(item.id)} icon="trash-can" />}
					/>

					))}

				</View>
				);
		}

	};

	if (size(series) < 1 && size(movies) < 1 ) {

		return(
			<Empty/>
			);

	}else{
		return (

			<View style={Styles.FullHeightScreen2}>
			<List.Section>
			{renderMovies()}
			{renderSeries()}
			</List.Section>
			</View>
			);
	}
}

