import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Styles from '../config/Styles';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Strings from '../config/Strings';
import { useNavigation } from '@react-navigation/native';

export default function Heading(props){
	
	const {title, screenname} = props;
	const navigation = useNavigation();
	
	const onChangeScreen = (screen) => {
		navigation.navigate(screen);
	};

	if (!screenname) {
		return(
			<View style={{paddingHorizontal: 20, marginTop: 30, marginBottom: 15}}>
			<Text style={Styles.headingTitle}>{title}</Text>
			</View>
			)}else{
			return(

			<View style={{paddingHorizontal: 20, marginTop: 30, marginBottom: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
			<View style={{width: '70%', alignItems: 'flex-start'}}>
			<Text style={Styles.headingTitle}>{title}</Text>
			</View>

			<View style={{width: '30%', alignItems: 'flex-end'}}>
			<TouchableOpacity style={Styles.headingButton} activeOpacity={0.9} onPress={() => onChangeScreen(screenname)}>
			<Text style={Styles.headingButtonText}>{Strings.ST9}</Text>
			<Icon style={Styles.headingButtonIcon} name="menu-right" size={30}/>
			</TouchableOpacity>
			</View>
			</View>
				)}

		}
