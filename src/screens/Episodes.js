import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Avatar, List, IconButton } from 'react-native-paper';
import {map} from 'lodash';
import Styles from '../config/Styles';
import ConfigApp from '../config/ConfigApp';
import AppLoading from '../components/AppLoading';
import LoadMoreButton from '../components/LoadMoreButton';
import { getEpisodesBySerie } from "../config/DataApp";
import Empty from '../components/Empty';

export default function Episodes(props) {

	const { route } = props;
  	const { navigation } = props;
  	const { id } = route.params;
    const [loading, setLoading] = useState(false);
  	const [isLoaded, setIsLoaded] = useState(false);
  	const [showButton, setshowButton] = useState(true);
	const [page, setPage] = useState(1);
	const [items, setItems] = useState([]);

	const onChangeScreen = (screen, id) => {
		props.navigation.navigate(screen, {id});
	};

	const onPlay = (url, title) => {
	    navigation.navigate('player', {url: url, title: title});
	};

	const onInfo = (id, title) => {
	    navigation.navigate('episodeinfo', {id: id, title: title});
	};

	useEffect(() => {
		loadMore();

	}, []);

  	const loadMore = () => {

    setLoading(true);
    setPage(page+1);

    getEpisodesBySerie(id, page).then((response) => {
      
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
      <LoadMoreButton Indicator={loading} showButton={showButton} Items={items} Num={12} Click={() => loadMore()}/>
    )

  }

  	if (isLoaded) {

    if (items.length <= 0) {

			return(
				<Empty/>
				);

		}else{

		return(

			<View style={Styles.FullHeightScreen2}>
			<List.Section>
				{map(items, (item, index) => (
					<List.Item
					key={index}
					title={item.episode_title}
					underlayColor={"transparent"}
					titleStyle={Styles.TitleList}
					onPress={() => onPlay(item.episode_link, item.episode_title)}
					left={props => <Avatar.Image style={{marginRight: 10}} source={{uri: `${ConfigApp.URL}${ConfigApp.BASEIMAGE}${item.episode_image}`}} />}
					right={props => <IconButton {...props} style={Styles.IconList} onPress={() => onInfo(item.episode_id, item.episode_title)} icon="information-outline" />}
					/>

					))}
			{renderButton()}
			</List.Section>
			</View>

			);

		}

	}else{
		return (
			<AppLoading/>
			);
	}


}

