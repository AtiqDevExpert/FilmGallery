import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Styles from '../config/Styles';
import { Text, Badge } from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import ConfigApp from '../config/ConfigApp';
import Rating from './Rating';

export default function FeaturedSerieCard(props){
	
	const {item} = props;
	const navigation = useNavigation();
	
    const onChangeScreen = (screen, id) => {
      navigation.navigate(screen, {id});
    };

		return(
    <View style={Styles.card1View}>
    <TouchableOpacity activeOpacity={0.9} onPress={() => onChangeScreen('seriedetails', item.serie_id)}>
    <Badge style={Styles.card1Badge} visible={item.serie_featured === 1 ? true : false}><Icon name="star" size={12} /></Badge>
    <FastImage 
      style={Styles.card1Image}
      source={{uri: `${ConfigApp.URL}${ConfigApp.BASEIMAGE}${item.serie_image}`}}
      imageStyle={{borderRadius: 8}}/>
    </TouchableOpacity>
    <View style={Styles.card1Content}>
    <Text numberOfLines={1} style={Styles.card1Title}>{item.serie_title}</Text>
    <Rating rating={item.serie_rate} size={15} margin={5} />
    </View>
    </View>
			)

		}
