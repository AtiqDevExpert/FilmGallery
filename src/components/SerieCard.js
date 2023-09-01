import React from 'react';
import {View, TouchableOpacity, Dimensions} from 'react-native';
import Styles from '../config/Styles';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from "react-native-responsive-fontsize";
import FastImage from 'react-native-fast-image';
import ConfigApp from '../config/ConfigApp';

const screenHeight = Math.round(Dimensions.get('window').height);

export default function SerieCard(props){
	
	const {item} = props;
	const navigation = useNavigation();
	
    const onChangeScreen = (screen, id) => {
      navigation.navigate(screen, {id});
    };

		return(
    <View style={Styles.card2View}>
    <TouchableOpacity activeOpacity={0.9} onPress={() => onChangeScreen('seriedetails', item.serie_id)}>
    <View style={Styles.card2Play}><View style={Styles.card2PlayIcon}><Icon name="play" color={"#ffffff"} size={RFValue(30, screenHeight)} /></View></View>
    <FastImage 
    style={Styles.card2Image}
    source={{uri: `${ConfigApp.URL}${ConfigApp.BASEIMAGE}${item.serie_image}`}}
    imageStyle={{borderRadius: 8}}/>
    </TouchableOpacity>
    <View style={Styles.card2Content}>
    <Text numberOfLines={1} style={Styles.card2Title}>{item.serie_title}</Text>
    <Text numberOfLines={1} style={Styles.card2SubTitle}>{item.serie_year}</Text>
    </View>
    </View>
			)

		}
